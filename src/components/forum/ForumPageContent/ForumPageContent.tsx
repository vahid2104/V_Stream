"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

import { forumStyles } from "./ForumPageContent.styles";

type ForumPageContentProps = {
  trendingMovies: TMDBMovie[];
  popularMovies: TMDBMovie[];
};

const discussions = [
  {
    title: "Do you agree that Spider-Man 3 is the worst movie? Why?",
    text: "Some fans think Spider-Man 3 tried to do too much at once. Others still love it for its emotional moments and iconic scenes.",
    meta: "@vstreamfan • 3 hours ago • 65 likes • 10 comments",
  },
  {
    title: "Spider-Man: Into the Spider-Verse second movie?",
    text: "The Spider-Verse movies changed the visual style of animation. Which part of the story impressed you most?",
    meta: "@moviehunter • 4 hours ago • 90 likes • 24 comments",
  },
  {
    title: "Top Gun is propaganda for the movie world?",
    text: "Top Gun: Maverick brought back classic blockbuster energy. Is it just entertainment or something more?",
    meta: "@cinemalover • 5 hours ago • 432 likes • 65 comments",
  },
  {
    title: "Are modern superhero movies becoming too similar?",
    text: "Marvel, DC and other universes keep growing, but some viewers feel the formula is getting repetitive.",
    meta: "@criticmode • 7 hours ago • 43 likes • 4 comments",
  },
];

const premiereEvents = [
  {
    day: "05",
    title: "Talk About Weak Hero S1: Episode 4",
    episode: "Season 1 Episode 4: The Turning Point",
    time: "09:00 AM EST",
    info:
      "A live community discussion about character decisions, turning points and what the episode means for the rest of the season.",
    rules: ["Be respectful", "No spoilers without warning", "Keep discussion movie-related"],
  },
  {
    day: "08",
    title: "Talk About Satan’s Slaves: Communion",
    episode: "Special horror night discussion",
    time: "08:30 PM EST",
    info:
      "Join a horror-focused discussion about atmosphere, storytelling, sound design and the strongest scenes from the movie.",
    rules: ["Use spoiler tags", "Respect different opinions", "No spam"],
  },
  {
    day: "12",
    title: "Spider-Verse Visual Style Breakdown",
    episode: "Animation community event",
    time: "07:00 PM EST",
    info:
      "A discussion about color, frame rate, comic-book composition and why Spider-Verse feels different from traditional animation.",
    rules: ["Share examples", "Keep it friendly", "Credit sources if shared"],
  },
];

export default function ForumPageContent({
  trendingMovies,
  popularMovies,
}: ForumPageContentProps) {
  const hotTopicsRef = useRef<HTMLDivElement | null>(null);

  function scrollHotTopics(direction: "left" | "right") {
    if (!hotTopicsRef.current) return;

    hotTopicsRef.current.scrollBy({
      left:
        direction === "right"
          ? hotTopicsRef.current.clientWidth * 0.75
          : -hotTopicsRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
  }

  return (
    <main className={forumStyles.page}>
      <section className={forumStyles.hero}>
        <div className={forumStyles.heroGrid}>
          {trendingMovies.map((movie) => (
            <div key={movie.id} className={forumStyles.heroImage}>
              <Image
                src={getTMDBImageUrl(movie.poster_path, "w500")}
                alt={movie.title || "Movie"}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className={forumStyles.heroOverlay} />

        <div className={forumStyles.heroContent}>
          <h1 className={forumStyles.title}>
            Join The Conversation About Movies & Series
          </h1>

          <p className={forumStyles.subtitle}>
            Explore trending titles, discover popular discussions and stay
            connected with the V Stream community.
          </p>
        </div>
      </section>

      <section className={forumStyles.section}>
        <div className={forumStyles.sectionHeader}>
          <h2 className={forumStyles.sectionTitle}>🔥 Hot Movie Topics</h2>

          <div className={forumStyles.controls}>
            <button
              type="button"
              className={forumStyles.controlButton}
              onClick={() => scrollHotTopics("left")}
              aria-label="Scroll hot topics left"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className={forumStyles.controlButton}
              onClick={() => scrollHotTopics("right")}
              aria-label="Scroll hot topics right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className={forumStyles.hotTopicsWrapper}>
          <div ref={hotTopicsRef} className={forumStyles.hotTopicsGrid}>
            {popularMovies.map((movie) => {
              const title = movie.title || movie.name || "Unknown Title";

              return (
                <Link
                  key={movie.id}
                  href={`/details/movie/${movie.id}`}
                  className={forumStyles.hotTopicItem}
                >
                  <div className={forumStyles.hotTopicPoster}>
                    <Image
                      src={getTMDBImageUrl(movie.poster_path, "w185")}
                      alt={title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className={forumStyles.hotTopicInfo}>
                    <h3 className={forumStyles.hotTopicTitle}>{title}</h3>
                    <p className={forumStyles.hotTopicGenre}>Comedy • Action</p>

                    <p className={forumStyles.hotTopicMeta}>
                      <Star size={13} className="fill-yellow-400 text-yellow-400" />
                      <span className={forumStyles.rating}>
                        {movie.vote_average.toFixed(1)}
                      </span>
                      <span>/ 45 Reviews • 9 Discussion</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={forumStyles.section}>
        <h2 className={forumStyles.sectionTitle}>⭐ Popular Discussions</h2>

        <div className={forumStyles.discussionList}>
          {discussions.map((discussion) => (
            <article key={discussion.title} className={forumStyles.discussionCard}>
              <h3 className={forumStyles.discussionTitle}>{discussion.title}</h3>
              <p className={forumStyles.discussionText}>{discussion.text}</p>
              <p className={forumStyles.discussionMeta}>{discussion.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={forumStyles.section}>
        <h2 className={forumStyles.sectionTitle}>🎬 Movie Premiere Events</h2>

        <div className={forumStyles.eventList}>
          {premiereEvents.map((event) => (
            <article key={event.title} className={forumStyles.eventItem}>
              <span className={forumStyles.eventDay}>{event.day}</span>

              <div className={forumStyles.eventContent}>
                <h3 className={forumStyles.eventTitle}>{event.title}</h3>
                <p className={forumStyles.eventEpisode}>{event.episode}</p>

                <p className={forumStyles.eventLabel}>Start Time</p>
                <p className={forumStyles.eventText}>{event.time}</p>

                <p className={forumStyles.eventLabel}>Info</p>
                <p className={forumStyles.eventText}>{event.info}</p>

                <p className={forumStyles.eventLabel}>Rules</p>
                <ul className={forumStyles.eventRules}>
                  {event.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>

                <button type="button" className={forumStyles.eventLink}>
                  Show detail
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}