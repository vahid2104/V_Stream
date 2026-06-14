"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import MovieCard from "@/components/movie/MovieCard/MovieCard";
import type { TMDBMovie } from "@/types/tmdb";

import { justReleaseStyles } from "./JustReleaseSection.styles";

type JustReleaseSectionProps = {
  movies: TMDBMovie[];
};

export default function JustReleaseSection({ movies }: JustReleaseSectionProps) {
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
    <section className={justReleaseStyles.section}>
      <div className={justReleaseStyles.header}>
        <h2 className={justReleaseStyles.title}>Just Release</h2>
      </div>

      <div className={justReleaseStyles.rowWrapper}>
        {canScrollLeft && (
          <button
            type="button"
            className={`${justReleaseStyles.arrowBase} ${justReleaseStyles.arrowLeft}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll just release movies left"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div
          ref={rowRef}
          className={`${justReleaseStyles.row} ${
            canScrollLeft ? justReleaseStyles.edgeSpaceLeft : ""
          } ${canScrollRight ? justReleaseStyles.edgeSpaceRight : ""}`}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} item={movie} mediaType="movie" />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className={`${justReleaseStyles.arrowBase} ${justReleaseStyles.arrowRight}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll just release movies right"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </section>
  );
}