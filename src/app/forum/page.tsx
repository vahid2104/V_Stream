import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer/Footer";

import ForumPageContent from "@/components/forum/ForumPageContent/ForumPageContent";

import {
  getPopularMovies,
  getTrendingMovies,
} from "@/services/tmdbService";

export default async function ForumPage() {
  const [trending, popular] = await Promise.all([
    getTrendingMovies(),
    getPopularMovies(),
  ]);

  return (
    <MainLayout>
      <ForumPageContent
        trendingMovies={trending.results.slice(0, 10)}
        popularMovies={popular.results.slice(0, 8)}
      />
      <Footer />
    </MainLayout>
  );
}