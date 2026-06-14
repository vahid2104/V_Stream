import MainLayout from "@/components/layout/MainLayout";
import { getTrendingMovies } from "@/services/tmdbService";
import { getTMDBImageUrl } from "@/lib/imageUrl";

export default async function HomePage() {
  const trendingMovies = await getTrendingMovies();

  return (
    <MainLayout>
      <section className="mx-auto max-w-[1180px] px-6 pt-32">
        <h1 className="text-3xl font-bold">TMDB API Test</h1>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {trendingMovies.results.slice(0, 10).map((movie) => (
            <div key={movie.id} className="rounded-xl bg-white/5 p-3">
              <img
                src={getTMDBImageUrl(movie.poster_path, "w500")}
                alt={movie.title || "Movie poster"}
                className="h-[260px] w-full rounded-lg object-cover"
              />

              <h2 className="mt-3 line-clamp-1 text-sm font-semibold">
                {movie.title}
              </h2>

              <p className="mt-1 text-xs text-white/50">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}