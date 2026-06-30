import { subscriptionStyles } from "./SubscriptionPageContent.styles";

type ComparisonRowProps = {
  feature: string;
  basic: string;
  standard: string;
  premium: string;
  isLast?: boolean;
};

function valueClass(value: string) {
  if (value === "No") return subscriptionStyles.valueNo;
  if (value === "Yes") return subscriptionStyles.valueYes;
  return "";
}

export default function ComparisonRow({
  feature,
  basic,
  standard,
  premium,
  isLast = false,
}: ComparisonRowProps) {
  return (
    <tr>
      <td
        className={`${subscriptionStyles.td} ${
          isLast ? subscriptionStyles.lastRow : ""
        }`}
      >
        {feature}
      </td>

      <td
        className={`${subscriptionStyles.td} ${valueClass(basic)} ${
          isLast ? subscriptionStyles.lastRow : ""
        }`}
      >
        {basic}
      </td>

      <td
        className={`${subscriptionStyles.td} ${valueClass(standard)} ${
          isLast ? subscriptionStyles.lastRow : ""
        }`}
      >
        {standard}
      </td>

      <td
        className={`${subscriptionStyles.td} ${valueClass(premium)} ${
          isLast ? subscriptionStyles.lastRow : ""
        }`}
      >
        {premium}
      </td>
    </tr>
  );
}