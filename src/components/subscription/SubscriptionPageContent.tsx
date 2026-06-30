"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/hooks/useSubscription";

import BillingToggle from "./BillingToggle";
import PlanCards from "./PlanCards";
import PlanComparisonTable from "./PlanComparisonTable";
import {
  type BillingCycle,
  type Plan,
} from "./subscriptionMockData";
import { subscriptionStyles } from "./SubscriptionPageContent.styles";

export default function SubscriptionPageContent() {
  const { isAuthenticated } = useAuth();
  const { subscribe } = useSubscription();

  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSelectPlan(plan: Plan, isTrial: boolean) {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    setProcessingPlanId(plan.id);

    try {
      await subscribe(plan.id, plan.name, billingCycle, isTrial);

      setSuccessMessage(
        isTrial
          ? `${plan.name} free trial activated!`
          : `${plan.name} subscription activated!`
      );
    } finally {
      setProcessingPlanId(null);
    }
  }

  return (
    <main className={subscriptionStyles.page}>
      <section className={subscriptionStyles.container}>
        <div className={subscriptionStyles.top}>
          <div>
            <h1 className={subscriptionStyles.title}>
              Choose the plan that is right for you
            </h1>

            <p className={subscriptionStyles.subtitle}>
              Select a flexible V Stream subscription plan based on your viewing
              needs. You can switch between monthly and yearly billing.
            </p>
          </div>

          <BillingToggle
            billingCycle={billingCycle}
            onChange={setBillingCycle}
          />
        </div>

        <PlanCards
          billingCycle={billingCycle}
          processingPlanId={processingPlanId}
          onSelectPlan={handleSelectPlan}
        />

        <section className={subscriptionStyles.compareSection}>
          <h2 className={subscriptionStyles.compareTitle}>
            Compare our plans and find the right one for you
          </h2>

          <p className={subscriptionStyles.compareSubtitle}>
            Compare features across Basic, Standard and Premium plans before
            choosing the best option for your streaming experience.
          </p>

          <PlanComparisonTable />
        </section>
      </section>

      <section className={subscriptionStyles.cta}>
        <div className={subscriptionStyles.ctaInner}>
          <div>
            <h2 className={subscriptionStyles.ctaTitle}>
              Start your V Stream journey today.
            </h2>

            <p className={subscriptionStyles.ctaText}>
              Explore trending movies, save your watchlist and enjoy trailers
              with a modern streaming experience.
            </p>
          </div>

          <Link href="/" className={subscriptionStyles.ctaButton}>
            Explore Movies
          </Link>
        </div>
      </section>

      {isLoginModalOpen && (
        <div
          className={subscriptionStyles.modalOverlay}
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className={subscriptionStyles.modalBox}
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className={subscriptionStyles.modalTitle}>
              Login required
            </h2>

            <p className={subscriptionStyles.modalText}>
              Please login or create an account before choosing a subscription
              plan.
            </p>

            <Link href="/login" className={subscriptionStyles.modalButton}>
              Go to Login
            </Link>

            <button
              type="button"
              className={subscriptionStyles.modalSecondary}
              onClick={() => setIsLoginModalOpen(false)}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {successMessage && (
        <div
          className={subscriptionStyles.modalOverlay}
          onClick={() => setSuccessMessage("")}
        >
          <div
            className={subscriptionStyles.modalBox}
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className={subscriptionStyles.modalTitle}>
              Subscription activated!
            </h2>

            <p className={subscriptionStyles.modalText}>{successMessage}</p>

            <Link href="/profile" className={subscriptionStyles.modalButton}>
              View Profile
            </Link>

            <button
              type="button"
              className={subscriptionStyles.modalSecondary}
              onClick={() => setSuccessMessage("")}
            >
              Continue browsing
            </button>
          </div>
        </div>
      )}
    </main>
  );
}