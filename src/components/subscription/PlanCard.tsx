import type { BillingCycle, Plan } from "./subscriptionMockData";
import { subscriptionStyles } from "./SubscriptionPageContent.styles";

type PlanCardProps = {
  plan: Plan;
  billingCycle: BillingCycle;
  processingPlanId: string | null;
  onSelectPlan: (plan: Plan, isTrial: boolean) => void;
};

function getDisplayPrice(price: number, billingCycle: BillingCycle) {
  if (billingCycle === "monthly") return price;

  return price * 0.8;
}

export default function PlanCard({
  plan,
  billingCycle,
  processingPlanId,
  onSelectPlan,
}: PlanCardProps) {
  const price = getDisplayPrice(plan.monthlyPrice, billingCycle);
  const isProcessing = processingPlanId === plan.id;

  return (
    <article
      className={`${subscriptionStyles.card} ${
        plan.isPopular ? subscriptionStyles.popularCard : ""
      }`}
    >
      <div className={subscriptionStyles.cardHeader}>
        <h3 className={subscriptionStyles.planName}>{plan.name}</h3>

        {plan.isPopular && (
          <span className={subscriptionStyles.popularBadge}>Popular</span>
        )}
      </div>

      <p className={subscriptionStyles.planDescription}>{plan.description}</p>

      <div className={subscriptionStyles.priceWrap}>
        <span className={subscriptionStyles.price}>${price.toFixed(2)}</span>
        <span className={subscriptionStyles.priceUnit}>/month</span>
      </div>

      <div className={subscriptionStyles.cardActions}>
        <button
          type="button"
          className={subscriptionStyles.outlineButton}
          disabled={isProcessing}
          onClick={() => onSelectPlan(plan, true)}
        >
          Start Free Trial
        </button>

        <button
          type="button"
          className={subscriptionStyles.solidButton}
          disabled={isProcessing}
          onClick={() => onSelectPlan(plan, false)}
        >
          {isProcessing ? "Processing..." : "Choose Plan"}
        </button>
      </div>
    </article>
  );
}