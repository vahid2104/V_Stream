"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Bookmark, Play } from "lucide-react";

import Button from "@/components/ui/Button";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { heroStyles } from "./HeroSection.styles";

type HeroSectionProps = {
  movies: TMDBMovie[];
};

export default function HeroSection({ movies }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMovie = movies[activeIndex];

  useEffect(() => {
    if (movies.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === movies.length - 1 ? 0 : currentIndex + 1
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
            <Button variant="main">
              <Play size={16} fill="white" />
              Watch Trailer
            </Button>

            <Button variant="ghost">
              <Bookmark size={16} />
              Add Watchlist
            </Button>
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
    </section>
  );
}