"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/hooks/useSubscription";
import { profileStyles } from "./ProfilePageContent.styles";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ProfilePageContent() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const { subscription, loading } = useSubscription();

  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";
  const firstLetter = displayName.charAt(0).toUpperCase();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || loading) {
    return (
      <main className={profileStyles.page}>
        <div className={profileStyles.container}>Loading profile...</div>
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className={profileStyles.page}>
      <div className={profileStyles.container}>
        <section className={profileStyles.card}>
          <div className={profileStyles.userTop}>
            <div className={profileStyles.avatar}>{firstLetter}</div>

            <div>
              <h1 className={profileStyles.name}>{displayName}</h1>
              <p className={profileStyles.email}>{user.email}</p>
            </div>
          </div>

          <section className={profileStyles.section}>
            <h2 className={profileStyles.sectionTitle}>
              Active Subscription
            </h2>

            {subscription ? (
              <>
                <div className={profileStyles.grid}>
                  <div className={profileStyles.item}>
                    <p className={profileStyles.label}>Plan</p>
                    <p className={profileStyles.value}>
                      {subscription.planName}
                    </p>
                  </div>

                  <div className={profileStyles.item}>
                    <p className={profileStyles.label}>Billing</p>
                    <p className={profileStyles.value}>
                      {subscription.billingCycle}
                    </p>
                  </div>

                  <div className={profileStyles.item}>
                    <p className={profileStyles.label}>Started</p>
                    <p className={profileStyles.value}>
                      {formatDate(subscription.startedAt)}
                    </p>
                  </div>

                  <div className={profileStyles.item}>
                    <p className={profileStyles.label}>Expires</p>
                    <p className={profileStyles.value}>
                      {formatDate(subscription.expiresAt)}
                    </p>
                  </div>

                  <div className={profileStyles.item}>
                    <p className={profileStyles.label}>Status</p>
                    <p className={profileStyles.value}>
                      {subscription.status}
                    </p>
                  </div>
                </div>

                <Link href="/subscriptions" className={profileStyles.action}>
                  Change Plan
                </Link>
              </>
            ) : (
              <>
                <p className={profileStyles.empty}>
                  No active subscription yet. Choose a plan to unlock premium V
                  Stream features.
                </p>

                <Link href="/subscriptions" className={profileStyles.action}>
                  Choose a Plan
                </Link>
              </>
            )}
          </section>
        </section>
      </div>
    </main>
  );
}