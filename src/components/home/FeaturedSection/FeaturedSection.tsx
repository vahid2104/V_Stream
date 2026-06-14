"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

import Button from "@/components/ui/Button";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { featuredSectionStyles } from "./FeaturedSection.styles";

type FeaturedSectionProps = {
  movies: TMDBMovie[];
};

export default function FeaturedSection({ movies }: FeaturedSectionProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const featuredMovies = useMemo(() => movies.slice(0, 8), [movies]);
  const activeMovie = featuredMovies[activeIndex];

  function updateScrollButtons() {
    const row = rowRef.current;

    if (!row) return;

    const maxScrollLeft = row.scrollWidth - row.clientWidth;

    setCanScrollLeft(row.scrollLeft > 10);
    setCanScrollRight(row.scrollLeft < maxScrollLeft - 10);
  }

  function handleScroll(direction: "left" | "right") {
    const row = rowRef.current;

    if (!row) return;

    const scrollAmount = row.clientWidth * 0.75;

    row.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    window.setTimeout(updateScrollButtons, 350);
  }

  useEffect(() => {
    updateScrollButtons();

    const row = rowRef.current;

    if (!row) return;

    row.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      row.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [featuredMovies.length]);

  if (!activeMovie) return null;

  const title = activeMovie.title || activeMovie.name || "Unknown Title";

  const releaseYear =
    activeMovie.release_date?.split("-")[0] ||
    activeMovie.first_air_date?.split("-")[0] ||
    "N/A";

  const backdropUrl = getTMDBImageUrl(activeMovie.backdrop_path, "original");

  return (
    <section className={featuredSectionStyles.section}>
      <div className={featuredSectionStyles.banner}>
        {activeMovie.backdrop_path ? (
          <Image
            src={backdropUrl}
            alt={title}
            fill
            sizes="1180px"
            className={featuredSectionStyles.backgroundImage}
          />
        ) : (
          <div className={featuredSectionStyles.fallback}>{title}</div>
        )}

        <div className={featuredSectionStyles.overlayBase} />
        <div className={featuredSectionStyles.overlaySide} />
        <div className={featuredSectionStyles.overlayBottom} />

        <div className={featuredSectionStyles.contentWrapper}>
          <div className={featuredSectionStyles.leftContent}>
            <h2 className={featuredSectionStyles.sectionTitle}>
              Featured in V Stream
            </h2>

            <p className={featuredSectionStyles.subtitle}>
              Best featured for you today
            </p>

            <span className={featuredSectionStyles.rank}>
              #{activeIndex + 1} in V Stream
            </span>

            <h3 className={featuredSectionStyles.title}>{title}</h3>

            <div className={featuredSectionStyles.meta}>
              <span className={featuredSectionStyles.rating}>
                ⭐ {activeMovie.vote_average.toFixed(1)}
              </span>
              <span>|</span>
              <span>{releaseYear}</span>
              <span>•</span>
              <span>Movie</span>
              <span>•</span>
              <span>HD</span>
            </div>

            <p className={featuredSectionStyles.overview}>
              {activeMovie.overview}
            </p>

            <div className={featuredSectionStyles.actions}>
              <Button variant="main">
                <Play size={16} fill="white" />
                Play Now
              </Button>

              <Button variant="ghost">
                <Bookmark size={16} />
                Add Watchlist
              </Button>
            </div>
          </div>

          <div className={featuredSectionStyles.rightContent}>
            <div className={featuredSectionStyles.sliderWrapper}>
              {canScrollLeft && (
                <button
                  type="button"
                  className={`${featuredSectionStyles.arrowBase} ${featuredSectionStyles.arrowLeft}`}
                  onClick={() => handleScroll("left")}
                  aria-label="Scroll featured movies left"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <div ref={rowRef} className={featuredSectionStyles.cardsRow}>
                {featuredMovies.map((movie, index) => {
                  const movieTitle =
                    movie.title || movie.name || "Unknown Title";
                  const posterUrl = getTMDBImageUrl(movie.poster_path, "w500");
                  const isActive = index === activeIndex;

                  return (
                    <Link
                      key={movie.id}
                      href={`/details/movie/${movie.id}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`${featuredSectionStyles.card} ${
                        isActive ? featuredSectionStyles.activeCard : ""
                      }`}
                    >
                      {movie.poster_path ? (
                        <Image
                          src={posterUrl}
                          alt={movieTitle}
                          fill
                          sizes="210px"
                          className={featuredSectionStyles.cardImage}
                        />
                      ) : (
                        <div className={featuredSectionStyles.fallback}>
                          {movieTitle}
                        </div>
                      )}

                      <div className={featuredSectionStyles.cardGradient} />

                      <div className={featuredSectionStyles.cardContent}>
                        <h4 className={featuredSectionStyles.cardTitle}>
                          {movieTitle}
                        </h4>

                        <div className={featuredSectionStyles.cardMeta}>
                          <Star className={featuredSectionStyles.star} />
                          <span className={featuredSectionStyles.cardRating}>
                            {movie.vote_average.toFixed(1)}
                          </span>
                          <span>|</span>
                          <span>Movie</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {canScrollRight && (
                <button
                  type="button"
                  className={`${featuredSectionStyles.arrowBase} ${featuredSectionStyles.arrowRight}`}
                  onClick={() => handleScroll("right")}
                  aria-label="Scroll featured movies right"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}