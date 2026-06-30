import ComparisonRow from "./ComparisonRow";
import { planFeatures } from "./subscriptionMockData";
import { subscriptionStyles } from "./SubscriptionPageContent.styles";

export default function PlanComparisonTable() {
  return (
    <div className={subscriptionStyles.tableWrapper}>
      <table className={subscriptionStyles.table}>
        <thead>
          <tr>
            <th className={subscriptionStyles.th}>Features</th>
            <th className={subscriptionStyles.th}>Basic</th>
            <th className={subscriptionStyles.th}>
              Standard{" "}
              <span className={subscriptionStyles.popularBadge}>Popular</span>
            </th>
            <th className={subscriptionStyles.th}>Premium</th>
          </tr>
        </thead>

        <tbody>
          {planFeatures.map((item, index) => (
            <ComparisonRow
              key={item.feature}
              feature={item.feature}
              basic={item.basic}
              standard={item.standard}
              premium={item.premium}
              isLast={index === planFeatures.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}