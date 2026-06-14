"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
} from "lucide-react";

import Button from "@/components/ui/Button";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { awardsSectionStyles } from "./AwardsSection.styles";

type AwardsSectionProps = {
  awardMovies: TMDBMovie[];
  fastMovies: TMDBMovie[];
  liveMovies: TMDBMovie[];
};

type CompactListProps = {
  title: string;
  items: TMDBMovie[];
  showLiveDot?: boolean;
};

function CompactMovieList({
  title,
  items,
  showLiveDot = false,
}: CompactListProps) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = items.slice(startIndex, startIndex + 4);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + 4 < items.length;

  function handlePrev() {
    if (!canGoPrev) return;

    setStartIndex((current) => Math.max(current - 4, 0));
  }

  function handleNext() {
    if (!canGoNext) return;

    setStartIndex((current) => Math.min(current + 4, items.length - 4));
  }

  return (
    <div className={awardsSectionStyles.listColumn}>
      <div className={awardsSectionStyles.listHeader}>
        <h2 className={awardsSectionStyles.listTitle}>
          {title}
          {showLiveDot && <span className={awardsSectionStyles.liveDot} />}
        </h2>

        <div className={awardsSectionStyles.listControls}>
          <button
            type="button"
            className={awardsSectionStyles.controlButton}
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label={`Previous ${title}`}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            className={awardsSectionStyles.controlButton}
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label={`Next ${title}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className={awardsSectionStyles.compactList}>
        {visibleItems.map((movie) => {
          const movieTitle = movie.title || movie.name || "Unknown Title";
          const posterUrl = getTMDBImageUrl(movie.poster_path, "w342");
          const rating = movie.vote_average
            ? movie.vote_average.toFixed(1)
            : "N/A";

          return (
            <Link
              key={movie.id}
              href={`/details/movie/${movie.id}`}
              className={awardsSectionStyles.compactItem}
            >
              <div className={awardsSectionStyles.compactImageWrapper}>
                {movie.poster_path ? (
                  <Image
                    src={posterUrl}
                    alt={movieTitle}
                    fill
                    sizes="78px"
                    className={awardsSectionStyles.compactImage}
                  />
                ) : (
                  <div className={awardsSectionStyles.fallback}>
                    {movieTitle}
                  </div>
                )}
              </div>

              <div className={awardsSectionStyles.compactContent}>
                <span className={awardsSectionStyles.ageBadge}>PG-13</span>

                <h3 className={awardsSectionStyles.compactTitle}>
                  {movieTitle}
                </h3>

                <p className={awardsSectionStyles.compactGenre}>
                  Comedy • Action
                </p>

                <div className={awardsSectionStyles.compactMeta}>
                  <Star className={awardsSectionStyles.star} />
                  <span className={awardsSectionStyles.rating}>{rating}</span>
                  <span>|</span>
                  <span>Movie</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function AwardsSection({
  awardMovies,
  fastMovies,
  liveMovies,
}: AwardsSectionProps) {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);

  const awardMovie = awardMovies[activeAwardIndex];

  if (!awardMovie) return null;

  const canGoPrevAward = activeAwardIndex > 0;
  const canGoNextAward = activeAwardIndex < awardMovies.length - 1;

  function handlePrevAward() {
    if (!canGoPrevAward) return;

    setActiveAwardIndex((current) => current - 1);
  }

  function handleNextAward() {
    if (!canGoNextAward) return;

    setActiveAwardIndex((current) => current + 1);
  }

  const title = awardMovie.title || awardMovie.name || "Unknown Title";

  const releaseYear =
    awardMovie.release_date?.split("-")[0] ||
    awardMovie.first_air_date?.split("-")[0] ||
    "N/A";

  const backdropUrl = getTMDBImageUrl(
    awardMovie.backdrop_path || awardMovie.poster_path,
    "w780"
  );

  const rating = awardMovie.vote_average
    ? awardMovie.vote_average.toFixed(1)
    : "N/A";

  return (
    <section className={awardsSectionStyles.section}>
      <div className={awardsSectionStyles.awardColumn}>
        <div className={awardsSectionStyles.sectionHeader}>
          <h2 className={awardsSectionStyles.sectionTitle}>
            Movies On Awards
          </h2>

          <div className={awardsSectionStyles.headerControls}>
            <button
              type="button"
              className={awardsSectionStyles.controlButton}
              onClick={handlePrevAward}
              disabled={!canGoPrevAward}
              aria-label="Previous award movie"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className={awardsSectionStyles.controlButton}
              onClick={handleNextAward}
              disabled={!canGoNextAward}
              aria-label="Next award movie"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Link href={`/details/movie/${awardMovie.id}`}>
          <div className={awardsSectionStyles.awardImageWrapper}>
            {awardMovie.backdrop_path || awardMovie.poster_path ? (
              <Image
                src={backdropUrl}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className={awardsSectionStyles.awardImage}
              />
            ) : (
              <div className={awardsSectionStyles.fallback}>{title}</div>
            )}

            <div className={awardsSectionStyles.awardImageGradient} />
          </div>
        </Link>

        <span className={awardsSectionStyles.awardBadge}>Best Pictures</span>

        <h3 className={awardsSectionStyles.awardTitle}>{title}</h3>

        <div className={awardsSectionStyles.awardMeta}>
          <span className={awardsSectionStyles.rating}>⭐ {rating}</span>
          <span>|</span>
          <span>{releaseYear}</span>
          <span>•</span>
          <span>Movie</span>
          <span>•</span>
          <span>HD</span>
        </div>

        <p className={awardsSectionStyles.overview}>{awardMovie.overview}</p>

        <div className={awardsSectionStyles.actions}>
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

      <div className={awardsSectionStyles.listsGrid}>
        <CompactMovieList title="Fast" items={fastMovies} />
        <CompactMovieList title="Live" items={liveMovies} showLiveDot />
      </div>
    </section>
  );
}