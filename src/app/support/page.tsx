import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer/Footer";
import SupportPageContent from "@/components/support/SupportPageContent";

import { getTrendingMovies } from "@/services/tmdbService";

export default async function SupportPage() {
  const trendingMovies = await getTrendingMovies();

  return (
    <MainLayout>
      <SupportPageContent posters={trendingMovies.results.slice(0, 16)} />
      <Footer />
    </MainLayout>
  );
}