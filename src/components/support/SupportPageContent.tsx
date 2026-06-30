import Link from "next/link";
import ContactForm from "./ContactForm";
import PosterCollage from "./PosterCollage";
import SupportFAQ from "./SupportFAQ";
import { serviceStatus } from "./supportMockData";
import { supportStyles } from "./SupportPageContent.styles";

import type { TMDBMovie } from "@/types/tmdb";

type SupportPageContentProps = {
  posters: TMDBMovie[];
};

export default function SupportPageContent({ posters }: SupportPageContentProps) {
  return (
    <main className={supportStyles.page}>
      <section className={supportStyles.container}>
        <div className={supportStyles.heroGrid}>
          <div className={supportStyles.left}>
            <span className={supportStyles.eyebrow}>Support Center</span>

            <h1 className={supportStyles.title}>Need help with V Stream?</h1>

            <p className={supportStyles.subtitle}>
              We are here to help you with your account, watchlist, trailers, movie data and overall V Stream experience.
            </p>

            <div className={supportStyles.statusGrid}>
              {serviceStatus.map((item) => (
                <div key={item.label} className={supportStyles.statusCard}>
                  <div className={supportStyles.statusDot} />
                  <p className={supportStyles.statusLabel}>{item.label}</p>
                  <p className={supportStyles.statusText}>{item.status}</p>
                </div>
              ))}
            </div>

            <div className={supportStyles.collageWrapper}>
              <PosterCollage posters={posters} />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <SupportFAQ />

      <section className={supportStyles.cta}>
        <div className={supportStyles.ctaInner}>
          <div>
            <h2 className={supportStyles.ctaTitle}>Start exploring V Stream today.</h2>
            <p className={supportStyles.ctaText}>
              Discover trending movies, save your watchlist and watch trailers with a modern streaming experience.
            </p>
          </div>

          <Link href="/" className={supportStyles.ctaButton}>
            Explore Movies
          </Link>
        </div>
      </section>
    </main>
  );
}