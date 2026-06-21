"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Share2 } from "lucide-react";
import WatchlistButton from "@/components/user/WatchlistButton/WatchlistButton";
import Button from "@/components/ui/Button";
import LandscapeCard from "@/components/movie/LandscapeCard/LandscapeCard";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type {
  MediaType,
  TMDBCastMember,
  TMDBDetails,
  TMDBMovie,
  TMDBReview,
  TMDBVideo,
} from "@/types/tmdb";

import { detailsPageStyles } from "./DetailsPageContent.styles";

type DetailsPageContentProps = {
  details: TMDBDetails;
  cast: TMDBCastMember[];
  similarItems: TMDBMovie[];
  reviews: TMDBReview[];
  trailer: TMDBVideo | null;
  mediaType: MediaType;
};

export default function DetailsPageContent({
  details,
  cast,
  similarItems,
  reviews,
  trailer,
  mediaType,
}: DetailsPageContentProps) {
  const castRowRef = useRef<HTMLDivElement | null>(null);
  const similarRowRef = useRef<HTMLDivElement | null>(null);

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const title = details.title || details.name || "Unknown Title";

  const releaseYear =
    details.release_date?.split("-")[0] ||
    details.first_air_date?.split("-")[0] ||
    "N/A";

  const runtimeLabel = details.runtime
    ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`
    : details.number_of_seasons
      ? `${details.number_of_seasons} Season${
          details.number_of_seasons > 1 ? "s" : ""
        }`
      : "N/A";

  const genres = details.genres.map((genre) => genre.name).slice(0, 3);
  const backdropUrl = getTMDBImageUrl(details.backdrop_path, "original");

  function scrollRow(
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right",
  ) {
    if (!ref.current) return;

    ref.current.scrollBy({
      left:
        direction === "right"
          ? ref.current.clientWidth * 0.8
          : -ref.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  async function handleShare() {
    const shareUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title,
        text: `Check out ${title} on V Stream`,
        url: shareUrl,
      });

      return;
    }

    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  }

  function handlePlayTrailer() {
    if (!trailer) {
      alert("Trailer is not available for this title.");
      return;
    }

    setIsTrailerOpen(true);
  }

  return (
    <div className={detailsPageStyles.page}>
      <section className={detailsPageStyles.hero}>
        {details.backdrop_path ? (
          <Image
            src={backdropUrl}
            alt={title}
            fill
            priority
            sizes="100vw"
            className={detailsPageStyles.backdrop}
          />
        ) : (
          <div className={detailsPageStyles.fallback}>{title}</div>
        )}

        <div className={detailsPageStyles.overlayBase} />
        <div className={detailsPageStyles.overlayTop} />
        <div className={detailsPageStyles.overlaySide} />
        <div className={detailsPageStyles.overlayBottom} />

        <div className={detailsPageStyles.heroContent}>
          <span className={detailsPageStyles.badge}>
            {mediaType === "tv" ? "Series" : "Movie"}
          </span>

          <h1 className={detailsPageStyles.title}>{title}</h1>

          <div className={detailsPageStyles.meta}>
            <span className={detailsPageStyles.rating}>
              ⭐ {details.vote_average.toFixed(1)}
            </span>
            <span>|</span>
            <span>{runtimeLabel}</span>
            <span>•</span>
            <span>{releaseYear}</span>
            {genres.map((genre) => (
              <span key={genre}>• {genre}</span>
            ))}
          </div>

          <p className={detailsPageStyles.overview}>{details.overview}</p>

          <div className={detailsPageStyles.actions}>
            <Button variant="main" onClick={handlePlayTrailer}>
              <Play size={16} fill="white" />
              Play Trailer
            </Button>

            <WatchlistButton
              item={{
                id: details.id,
                mediaType,
                title,
                posterPath: details.poster_path,
                backdropPath: details.backdrop_path,
                rating: details.vote_average,
                releaseDate: details.release_date || details.first_air_date,
              }}
            />

            <div className={detailsPageStyles.secondaryActions}>
              <button
                type="button"
                className={detailsPageStyles.iconButton}
                onClick={handleShare}
              >
                <Share2 size={17} />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={detailsPageStyles.section}>
        <h2 className={detailsPageStyles.storyTitle}>Story Line</h2>
        <p className={detailsPageStyles.storyText}>{details.overview}</p>
      </section>

      {cast.length > 0 && (
        <section className={detailsPageStyles.scrollSection}>
          <div className={detailsPageStyles.scrollHeader}>
            <h2 className={detailsPageStyles.scrollTitle}>Top Cast</h2>

            <div className={detailsPageStyles.scrollControls}>
              <button
                type="button"
                className={detailsPageStyles.scrollButton}
                onClick={() => scrollRow(castRowRef, "left")}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className={detailsPageStyles.scrollButton}
                onClick={() => scrollRow(castRowRef, "right")}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div ref={castRowRef} className={detailsPageStyles.scrollRow}>
            {cast.slice(0, 12).map((person) => (
              <div key={person.id} className={detailsPageStyles.castItem}>
                <div className={detailsPageStyles.castAvatar}>
                  {person.profile_path ? (
                    <Image
                      src={getTMDBImageUrl(person.profile_path, "w185")}
                      alt={person.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className={detailsPageStyles.fallback}>
                      {person.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <p className={detailsPageStyles.castName}>{person.name}</p>
                  <p className={detailsPageStyles.castCharacter}>
                    {person.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {reviews.length > 0 && (
        <section className={detailsPageStyles.reviewsSection}>
          <h2 className={detailsPageStyles.reviewsTitle}>Reviews</h2>

          <div className={detailsPageStyles.reviewsGrid}>
            {reviews.map((review) => (
              <article key={review.id} className={detailsPageStyles.reviewCard}>
                <h3 className={detailsPageStyles.reviewAuthor}>
                  {review.author_details.name ||
                    review.author_details.username ||
                    review.author}
                </h3>

                <p className={detailsPageStyles.reviewMeta}>
                  {review.author_details.rating
                    ? `⭐ ${review.author_details.rating}/10`
                    : "TMDB Review"}
                </p>

                <p className={detailsPageStyles.reviewText}>{review.content}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {similarItems.length > 0 && (
        <section className={detailsPageStyles.similarSection}>
          <div className={detailsPageStyles.scrollHeader}>
            <h2 className={detailsPageStyles.similarTitle}>
              Similar {mediaType === "tv" ? "Series" : "Movies"} for you
            </h2>

            <div className={detailsPageStyles.scrollControls}>
              <button
                type="button"
                className={detailsPageStyles.scrollButton}
                onClick={() => scrollRow(similarRowRef, "left")}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className={detailsPageStyles.scrollButton}
                onClick={() => scrollRow(similarRowRef, "right")}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div ref={similarRowRef} className={detailsPageStyles.scrollRow}>
            {similarItems.map((item) => (
              <LandscapeCard key={item.id} item={item} mediaType={mediaType} />
            ))}
          </div>
        </section>
      )}

      {isTrailerOpen && trailer && (
        <div
          className={detailsPageStyles.trailerOverlay}
          onClick={() => setIsTrailerOpen(false)}
        >
          <div
            className={detailsPageStyles.trailerBox}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={detailsPageStyles.closeTrailer}
              onClick={() => setIsTrailerOpen(false)}
            >
              Close
            </button>

            <iframe
              className={detailsPageStyles.trailerIframe}
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={`${title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
