"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { popularWeekStyles } from "./PopularWeekSection.styles";

type PopularWeekSectionProps = {
  movies: TMDBMovie[];
};

export default function PopularWeekSection({
  movies,
}: PopularWeekSectionProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

    const scrollAmount = row.clientWidth * 0.85;

    row.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
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
  }, [movies.length]);

  return (
    <section className={popularWeekStyles.section}>
      <div className={popularWeekStyles.header}>
        <h2 className={popularWeekStyles.title}>Popular of the Week</h2>
      </div>

      <div className={popularWeekStyles.rowWrapper}>
        {canScrollLeft && (
          <button
            type="button"
            className={`${popularWeekStyles.arrowBase} ${popularWeekStyles.arrowLeft}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll popular movies left"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div ref={rowRef} className={popularWeekStyles.row}>
          {movies.map((movie, index) => {
            const title = movie.title || movie.name || "Unknown Title";
            const posterUrl = getTMDBImageUrl(movie.poster_path, "w500");
            const rating = movie.vote_average
              ? movie.vote_average.toFixed(1)
              : "N/A";
            const rank = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={movie.id}
                href={`/details/movie/${movie.id}`}
                className={popularWeekStyles.item}
              >
                <span className={popularWeekStyles.rank}>{rank}</span>

                <article className={popularWeekStyles.card}>
                  {movie.poster_path ? (
                    <Image
                      src={posterUrl}
                      alt={title}
                      fill
                      sizes="100px"
                      className={popularWeekStyles.image}
                    />
                  ) : (
                    <div className={popularWeekStyles.fallback}>{title}</div>
                  )}

                  <div className={popularWeekStyles.gradient} />

                  <div className={popularWeekStyles.content}>
                    <h3 className={popularWeekStyles.movieTitle}>{title}</h3>

                    <div className={popularWeekStyles.meta}>
                      <Star className={popularWeekStyles.star} />
                      <span className={popularWeekStyles.rating}>{rating}</span>
                      <span className={popularWeekStyles.dot}>|</span>
                      <span>Movie</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className={`${popularWeekStyles.arrowBase} ${popularWeekStyles.arrowRight}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll popular movies right"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </section>
  );
}