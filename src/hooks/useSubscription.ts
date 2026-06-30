"use client";

import { useEffect, useState } from "react";

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

const STORAGE_KEY = "v_stream_mock_subscription";

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
  const [subscription, setSubscription] = useState<MockSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  function fetchSubscription() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    setSubscription(JSON.parse(saved));
    setLoading(false);
  }

  async function subscribe(
    planId: string,
    planName: string,
    billingCycle: BillingCycle,
    isTrial: boolean
  ) {
    await new Promise((resolve) => setTimeout(resolve, 900));

    const nextSubscription: MockSubscription = {
      planId,
      planName,
      billingCycle,
      isTrial,
      status: isTrial ? "Trial" : "Active",
      startedAt: new Date().toISOString(),
      expiresAt: getExpiryDate(isTrial, billingCycle),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSubscription));
    setSubscription(nextSubscription);

    return nextSubscription;
  }

  useEffect(() => {
  queueMicrotask(() => {
    fetchSubscription();
  });
}, []);

  return {
    subscription,
    loading,
    subscribe,
    fetchSubscription,
  };
}