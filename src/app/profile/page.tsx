import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer/Footer";
import ProfilePageContent from "@/components/profile/ProfilePageContent";

export default function ProfilePage() {
  return (
    <MainLayout>
      <ProfilePageContent />
      <Footer />
    </MainLayout>
  );
}