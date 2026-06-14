import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import StudioMarquee from "@/components/home/StudioMarquee";
import { getTrendingMovies } from "@/services/tmdbService";

export default async function HomePage() {
  const trendingMovies = await getTrendingMovies();

  const heroMovies = trendingMovies.results.slice(0, 4);

  return (
    <MainLayout>
      <HeroSection movies={heroMovies} />
      <StudioMarquee />
    </MainLayout>
  );
}