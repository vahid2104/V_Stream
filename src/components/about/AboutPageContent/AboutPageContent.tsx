import {
  BadgeCheck,
  Clapperboard,
  Code2,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { aboutPageStyles } from "./AboutPageContent.styles";

const features = [
  {
    title: "Real movie data",
    text: "V Stream uses TMDB API to display trending movies, series, posters, ratings, trailers, cast information and similar titles.",
    icon: Clapperboard,
  },
  {
    title: "Personal watchlist",
    text: "Users will be able to save movies and series to their own watchlist after logging in.",
    icon: Heart,
  },
  {
    title: "Firebase authentication",
    text: "Authentication is powered by Firebase with email/password and Google sign-in support.",
    icon: BadgeCheck,
  },
  {
    title: "User comments",
    text: "The platform is planned to support user comments and reviews through Firestore.",
    icon: MessageCircle,
  },
  {
    title: "Smart recommendations",
    text: "Future recommendation rows can be generated from user favourites, watch history and preferred genres.",
    icon: Sparkles,
  },
  {
    title: "Modern full-stack structure",
    text: "The project is built with Next.js App Router, server-side API handling and reusable component architecture.",
    icon: Code2,
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Firestore",
  "TMDB API",
  "React Icons",
  "Vercel",
];

export default function AboutPageContent() {
  return (
    <main className={aboutPageStyles.page}>
      <div className={aboutPageStyles.container}>
        <section className={aboutPageStyles.hero}>
          <div className={aboutPageStyles.glow} />

          <span className={aboutPageStyles.eyebrow}>About V Stream</span>

          <h1 className={aboutPageStyles.title}>
            A modern streaming platform concept built for movies, series and
            anime lovers.
          </h1>

          <p className={aboutPageStyles.subtitle}>
            V Stream is a portfolio-level streaming web application inspired by
            platforms like Netflix and Disney+. It combines real movie data from
            TMDB with authentication, watchlist features, favourites, trailers,
            reviews and a clean cinematic user interface.
          </p>

          <div className={aboutPageStyles.statsGrid}>
            <div className={aboutPageStyles.statCard}>
              <p className={aboutPageStyles.statNumber}>TMDB</p>
              <p className={aboutPageStyles.statLabel}>Real movie API</p>
            </div>

            <div className={aboutPageStyles.statCard}>
              <p className={aboutPageStyles.statNumber}>Firebase</p>
              <p className={aboutPageStyles.statLabel}>Auth and user data</p>
            </div>

            <div className={aboutPageStyles.statCard}>
              <p className={aboutPageStyles.statNumber}>Next.js</p>
              <p className={aboutPageStyles.statLabel}>Modern app router</p>
            </div>
          </div>
        </section>

        <section className={aboutPageStyles.section}>
          <h2 className={aboutPageStyles.sectionTitle}>What V Stream offers</h2>

          <div className={aboutPageStyles.featureGrid}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article key={feature.title} className={aboutPageStyles.featureCard}>
                  <div className={aboutPageStyles.featureIcon}>
                    <Icon size={23} />
                  </div>

                  <h3 className={aboutPageStyles.featureTitle}>
                    {feature.title}
                  </h3>

                  <p className={aboutPageStyles.featureText}>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={aboutPageStyles.section}>
          <h2 className={aboutPageStyles.sectionTitle}>Technology stack</h2>

          <div className={aboutPageStyles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech} className={aboutPageStyles.techItem}>
                {tech}
              </div>
            ))}
          </div>

          <p className={aboutPageStyles.note}>
            V Stream is designed as a realistic full-stack portfolio project.
            Movie content is fetched from TMDB, user accounts are handled with
            Firebase Authentication, and user-specific features like watchlist,
            favourites and comments are stored in Firestore.
          </p>
        </section>
      </div>
    </main>
  );
}