import type { BillingCycle } from "./subscriptionMockData";
import { subscriptionStyles } from "./SubscriptionPageContent.styles";

type BillingToggleProps = {
  billingCycle: BillingCycle;
  onChange: (value: BillingCycle) => void;
};

export default function BillingToggle({
  billingCycle,
  onChange,
}: BillingToggleProps) {
  return (
    <div className={subscriptionStyles.toggle}>
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`${subscriptionStyles.toggleButton} ${
          billingCycle === "monthly" ? subscriptionStyles.toggleActive : ""
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={`${subscriptionStyles.toggleButton} ${
          billingCycle === "yearly" ? subscriptionStyles.toggleActive : ""
        }`}
      >
        Yearly
      </button>
    </div>
  );
}