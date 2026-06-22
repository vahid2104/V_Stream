import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer/Footer";
import MovieReleasePageContent from "@/components/movieRelease/MovieReleasePageContent/MovieReleasePageContent";

import { getUpcomingMovies } from "@/services/tmdbService";

export default async function MovieReleasePage() {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <MainLayout>
      <MovieReleasePageContent movies={upcomingMovies.results.slice(0, 20)} />
      <Footer />
    </MainLayout>
  );
}