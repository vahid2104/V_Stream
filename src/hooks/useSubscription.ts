"use client";

import { useCallback, useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import type { BillingCycle } from "@/components/subscription/subscriptionMockData";

export type MockSubscription = {
  planId: string;
  planName: string;
  billingCycle: BillingCycle;
  isTrial: boolean;
  status: "Active" | "Trial";
  startedAt: string;
  expiresAt: string;
};

function getExpiryDate(isTrial: boolean, billingCycle: BillingCycle) {
  const date = new Date();

  if (isTrial) {
    date.setDate(date.getDate() + 7);
    return date.toISOString();
  }

  if (billingCycle === "monthly") {
    date.setMonth(date.getMonth() + 1);
  } else {
    date.setFullYear(date.getFullYear() + 1);
  }

  return date.toISOString();
}

export function useSubscription() {
  const { user } = useAuth();

  const [subscription, setSubscription] = useState<MockSubscription | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubscription = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const subscriptionRef = doc(
        db,
        "users",
        user.uid,
        "subscription",
        "current"
      );

      const snapshot = await getDoc(subscriptionRef);

      if (!snapshot.exists()) {
        setSubscription(null);
        return;
      }

      setSubscription(snapshot.data() as MockSubscription);
    } catch {
      setError("Failed to load subscription.");
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      fetchSubscription();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [fetchSubscription]);

  async function subscribe(
    planId: string,
    planName: string,
    billingCycle: BillingCycle,
    isTrial: boolean
  ) {
    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const nextSubscription: MockSubscription = {
      planId,
      planName,
      billingCycle,
      isTrial,
      status: isTrial ? "Trial" : "Active",
      startedAt: new Date().toISOString(),
      expiresAt: getExpiryDate(isTrial, billingCycle),
    };

    const subscriptionRef = doc(
      db,
      "users",
      user.uid,
      "subscription",
      "current"
    );

    await setDoc(subscriptionRef, {
      ...nextSubscription,
      updatedAt: serverTimestamp(),
    });

    setSubscription(nextSubscription);

    return nextSubscription;
  }

  return {
    subscription,
    loading,
    error,
    subscribe,
    fetchSubscription,
  };
}