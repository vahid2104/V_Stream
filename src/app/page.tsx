import HeroSection from "@/components/home/HeroSection";
import StudioMarquee from "@/components/home/StudioMarquee";
import MainLayout from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <StudioMarquee />
    </MainLayout>
  );
}