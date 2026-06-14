import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ProviderMarquee from "@/components/home/ProviderMarquee/ProviderMarquee";
import JustReleaseSection from "@/components/home/JustReleaseSection/JustReleaseSection";
import PopularWeekSection from "@/components/home/PopularWeekSection/PopularWeekSection";
import FeaturedSection from "@/components/home/FeaturedSection/FeaturedSection";

import {
  getMovieWatchProviders,
  getNowPlayingMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/services/tmdbService";

export default async function HomePage() {
  const [trendingMovies, watchProviders, nowPlayingMovies, topRatedMovies] =
    await Promise.all([
      getTrendingMovies(),
      getMovieWatchProviders("US"),
      getNowPlayingMovies(),
      getTopRatedMovies(),
    ]);

  const heroMovies = trendingMovies.results.slice(0, 4);
  const justReleaseMovies = nowPlayingMovies.results.slice(0, 10);
  const popularWeekMovies = trendingMovies.results.slice(0, 10);
  const featuredMovies = topRatedMovies.results.slice(0, 6);

  return (
    <MainLayout>
      <HeroSection movies={heroMovies} />
      <ProviderMarquee providers={watchProviders} />
      <JustReleaseSection movies={justReleaseMovies} />
      <PopularWeekSection movies={popularWeekMovies} />
      <FeaturedSection movies={featuredMovies} />
    </MainLayout>
  );
}
