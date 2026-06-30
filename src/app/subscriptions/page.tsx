import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer/Footer";
import SubscriptionPageContent from "@/components/subscription/SubscriptionPageContent";

export default function SubscriptionsPage() {
  return (
    <MainLayout>
      <SubscriptionPageContent />
      <Footer />
    </MainLayout>
  );
}