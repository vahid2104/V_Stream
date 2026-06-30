import PlanCard from "./PlanCard";
import { plans, type BillingCycle, type Plan } from "./subscriptionMockData";
import { subscriptionStyles } from "./SubscriptionPageContent.styles";

type PlanCardsProps = {
  billingCycle: BillingCycle;
  processingPlanId: string | null;
  onSelectPlan: (plan: Plan, isTrial: boolean) => void;
};

export default function PlanCards({
  billingCycle,
  processingPlanId,
  onSelectPlan,
}: PlanCardsProps) {
  return (
    <div className={subscriptionStyles.cardsGrid}>
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          billingCycle={billingCycle}
          processingPlanId={processingPlanId}
          onSelectPlan={onSelectPlan}
        />
      ))}
    </div>
  );
}