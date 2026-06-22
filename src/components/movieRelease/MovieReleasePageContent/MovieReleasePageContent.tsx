import Image from "next/image";
import Link from "next/link";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { movieReleaseStyles } from "./MovieReleasePageContent.styles";

type MovieReleasePageContentProps = {
  movies: TMDBMovie[];
};

function groupMoviesByMonth(movies: TMDBMovie[]) {
  return movies.reduce<Record<string, TMDBMovie[]>>((groups, movie) => {
    const date = movie.release_date || movie.first_air_date;

    if (!date) return groups;

    const month = new Date(date).toLocaleString("en-US", {
      month: "long",
    });

    if (!groups[month]) {
      groups[month] = [];
    }

    groups[month].push(movie);

    return groups;
  }, {});
}

export default function MovieReleasePageContent({
  movies,
}: MovieReleasePageContentProps) {
  const groupedMovies = groupMoviesByMonth(movies);
  const heroMovies = movies.slice(0, 10);

  return (
    <main className={movieReleaseStyles.page}>
      <section className={movieReleaseStyles.hero}>
        <div className={movieReleaseStyles.heroBg}>
          {heroMovies.map((movie) => (
            <div key={movie.id} className={movieReleaseStyles.heroImage}>
              <Image
                src={getTMDBImageUrl(movie.backdrop_path || movie.poster_path, "w780")}
                alt={movie.title || movie.name || "Movie"}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className={movieReleaseStyles.heroOverlay} />

        <div className={movieReleaseStyles.heroContent}>
          <h1 className={movieReleaseStyles.title}>
            Schedule Release All Movie Around The World
          </h1>

          <p className={movieReleaseStyles.subtitle}>
            Get up to date with upcoming movie releases and discover what is
            coming next on V Stream.
          </p>
        </div>
      </section>

      <section className={movieReleaseStyles.content}>
        <div className={movieReleaseStyles.topBar}>
          <h2 className={movieReleaseStyles.sectionTitle}>Upcoming Release</h2>
        </div>

        {Object.entries(groupedMovies).map(([month, monthMovies]) => (
          <div key={month} className={movieReleaseStyles.monthSection}>
            <h3 className={movieReleaseStyles.monthTitle}>{month}</h3>

            <div className={movieReleaseStyles.releaseGrid}>
              {monthMovies.map((movie) => {
                const title = movie.title || movie.name || "Unknown Title";
                const date = movie.release_date || movie.first_air_date || "";
                const day = date ? new Date(date).getDate().toString().padStart(2, "0") : "--";

                return (
                  <Link
                    key={movie.id}
                    href={`/details/movie/${movie.id}`}
                    className={movieReleaseStyles.releaseItem}
                  >
                    <span className={movieReleaseStyles.day}>{day}</span>

                    <div className={movieReleaseStyles.poster}>
                      <Image
                        src={getTMDBImageUrl(movie.poster_path, "w185")}
                        alt={title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className={movieReleaseStyles.info}>
                      <h4 className={movieReleaseStyles.movieTitle}>{title}</h4>
                      <p className={movieReleaseStyles.meta}>
                        {movie.release_date || "Coming soon"} • Movie
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}