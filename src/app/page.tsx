import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import ProviderMarquee from "@/components/home/ProviderMarquee/ProviderMarquee";
import JustReleaseSection from "@/components/home/JustReleaseSection/JustReleaseSection";
import PopularWeekSection from "@/components/home/PopularWeekSection/PopularWeekSection";
import FeaturedSection from "@/components/home/FeaturedSection/FeaturedSection";
import MediaRowSection from "@/components/home/MediaRowSection/MediaRowSection";

import {
  getAnimeTvShows,
  getMovieWatchProviders,
  getNowPlayingMovies,
  getPopularMovies,
  getPopularTvShows,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/services/tmdbService";

export default async function HomePage() {
  const [
    trendingMovies,
    watchProviders,
    nowPlayingMovies,
    topRatedMovies,
    popularMovies,
    popularTvShows,
    animeTvShows,
  ] = await Promise.all([
    getTrendingMovies(),
    getMovieWatchProviders("US"),
    getNowPlayingMovies(),
    getTopRatedMovies(),
    getPopularMovies(),
    getPopularTvShows(),
    getAnimeTvShows(),
  ]);

  const heroMovies = trendingMovies.results.slice(0, 4);
  const justReleaseMovies = nowPlayingMovies.results.slice(0, 10);
  const popularWeekMovies = trendingMovies.results.slice(0, 10);
  const featuredMovies = topRatedMovies.results.slice(0, 12);

  const movieItems = popularMovies.results.slice(0, 12);
  const seriesItems = popularTvShows.results.slice(0, 12);
  const animeSeriesItems = animeTvShows.results.slice(0, 12);

  return (
    <MainLayout>
      <HeroSection movies={heroMovies} />
      <ProviderMarquee providers={watchProviders} />
      <JustReleaseSection movies={justReleaseMovies} />
      <PopularWeekSection movies={popularWeekMovies} />
      <FeaturedSection movies={featuredMovies} />

      <MediaRowSection title="Movies" items={movieItems} mediaType="movie" />
      <MediaRowSection title="Series" items={seriesItems} mediaType="tv" />
      <MediaRowSection
        title="Anime Series"
        items={animeSeriesItems}
        mediaType="tv"
      />
    </MainLayout>
  );
}