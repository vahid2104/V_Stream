"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import LandscapeCard from "@/components/movie/LandscapeCard/LandscapeCard";
import type { MediaType, TMDBMovie } from "@/types/tmdb";

import { mediaRowSectionStyles } from "./MediaRowSection.styles";

type MediaRowSectionProps = {
  title: string;
  items: TMDBMovie[];
  mediaType: MediaType;
};

export default function MediaRowSection({
  title,
  items,
  mediaType,
}: MediaRowSectionProps) {
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

    row.scrollBy({
      left: direction === "right" ? row.clientWidth * 0.85 : -row.clientWidth * 0.85,
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
  }, [items.length]);

  return (
    <section className={mediaRowSectionStyles.section}>
      <div className={mediaRowSectionStyles.header}>
        <h2 className={mediaRowSectionStyles.title}>{title}</h2>
      </div>

      <div className={mediaRowSectionStyles.rowWrapper}>
        {canScrollLeft && (
          <button
            type="button"
            className={`${mediaRowSectionStyles.arrowBase} ${mediaRowSectionStyles.arrowLeft}`}
            onClick={() => handleScroll("left")}
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div ref={rowRef} className={mediaRowSectionStyles.row}>
          {items.map((item) => (
            <LandscapeCard key={item.id} item={item} mediaType={mediaType} />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            className={`${mediaRowSectionStyles.arrowBase} ${mediaRowSectionStyles.arrowRight}`}
            onClick={() => handleScroll("right")}
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </section>
  );
}