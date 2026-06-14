import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ProviderMarquee from "@/components/home/ProviderMarquee/ProviderMarquee";
import JustReleaseSection from "@/components/home/JustReleaseSection/JustReleaseSection";

import {
  getMovieWatchProviders,
  getNowPlayingMovies,
  getTrendingMovies,
} from "@/services/tmdbService";

export default async function HomePage() {
  const [trendingMovies, watchProviders, nowPlayingMovies] = await Promise.all([
    getTrendingMovies(),
    getMovieWatchProviders("US"),
    getNowPlayingMovies(),
  ]);

  const heroMovies = trendingMovies.results.slice(0, 4);
  const justReleaseMovies = nowPlayingMovies.results.slice(0, 10);

  return (
    <MainLayout>
      <HeroSection movies={heroMovies} />
      <ProviderMarquee providers={watchProviders} />
      <JustReleaseSection movies={justReleaseMovies} />
    </MainLayout>
  );
}