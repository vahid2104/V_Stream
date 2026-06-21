"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import WatchlistButton from "@/components/user/WatchlistButton/WatchlistButton";

import Button from "@/components/ui/Button";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie, TMDBVideo } from "@/types/tmdb";

import { heroStyles } from "./HeroSection.styles";

type HeroSectionProps = {
  movies: TMDBMovie[];
};

export default function HeroSection({ movies }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailer, setTrailer] = useState<TMDBVideo | null>(null);
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);

  const activeMovie = movies[activeIndex];

  useEffect(() => {
    if (movies.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === movies.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  if (!activeMovie) return null;

  const title = activeMovie.title || activeMovie.name || "Unknown Title";

  const releaseYear =
    activeMovie.release_date?.split("-")[0] ||
    activeMovie.first_air_date?.split("-")[0] ||
    "N/A";

  const backdropUrl = getTMDBImageUrl(activeMovie.backdrop_path, "original");

  async function handlePlayTrailer() {
    setIsTrailerLoading(true);

    try {
      const mediaType = activeMovie.media_type || "movie";

      const response = await fetch(
        `/api/trailer?mediaType=${mediaType}&id=${activeMovie.id}`,
      );

      const data = await response.json();

      if (!data.trailer) {
        alert("Trailer is not available for this title.");
        return;
      }

      setTrailer(data.trailer);
      setIsTrailerOpen(true);
    } catch {
      alert("Could not load trailer. Please try again.");
    } finally {
      setIsTrailerLoading(false);
    }
  }

  return (
    <section className={heroStyles.section}>
      <Image
        src={backdropUrl}
        alt={title}
        fill
        priority
        className={heroStyles.image}
      />

      <div className={heroStyles.overlayBase} />
      <div className={heroStyles.overlayNavbar} />
      <div className={heroStyles.overlayTop} />
      <div className={heroStyles.overlaySide} />
      <div className={heroStyles.overlayBottom} />

      <div className={heroStyles.contentWrapper}>
        <div className={heroStyles.content}>
          <span className={heroStyles.badge}>Movie</span>

          <h1 className={heroStyles.title}>{title}</h1>

          <p className={heroStyles.meta}>
            {releaseYear} • Rating {activeMovie.vote_average.toFixed(1)} • HD
          </p>

          <p className={heroStyles.overview}>{activeMovie.overview}</p>

          <div className={heroStyles.actions}>
            <Button
              variant="main"
              onClick={handlePlayTrailer}
              disabled={isTrailerLoading}
            >
              <Play size={16} fill="white" />
              {isTrailerLoading ? "Loading..." : "Watch Trailer"}
            </Button>

            <WatchlistButton
              item={{
                id: activeMovie.id,
                mediaType: activeMovie.media_type || "movie",
                title,
                posterPath: activeMovie.poster_path,
                backdropPath: activeMovie.backdrop_path,
                rating: activeMovie.vote_average,
                releaseDate:
                  activeMovie.release_date || activeMovie.first_air_date,
              }}
            />
          </div>
        </div>
      </div>

      <div className={heroStyles.dotsOuter}>
        <div className={heroStyles.dotsInner}>
          {movies.map((movie, index) => (
            <button
              key={movie.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? heroStyles.dotActive
                  : heroStyles.dotInactive
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isTrailerOpen && trailer && (
        <div
          className={heroStyles.trailerOverlay}
          onClick={() => setIsTrailerOpen(false)}
        >
          <div
            className={heroStyles.trailerBox}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={heroStyles.closeTrailer}
              onClick={() => setIsTrailerOpen(false)}
            >
              Close
            </button>

            <iframe
              className={heroStyles.trailerIframe}
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={`${title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
