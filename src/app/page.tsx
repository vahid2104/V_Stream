import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ProviderMarquee from "@/components/home/ProviderMarquee/ProviderMarquee";

import {
  getMovieWatchProviders,
  getTrendingMovies,
} from "@/services/tmdbService";

export default async function HomePage() {
  const [trendingMovies, watchProviders] = await Promise.all([
    getTrendingMovies(),
    getMovieWatchProviders("US"),
  ]);

  const heroMovies = trendingMovies.results.slice(0, 4);

  return (
    <MainLayout>
      <HeroSection movies={heroMovies} />
      <ProviderMarquee providers={watchProviders} />
    </MainLayout>
  );
}