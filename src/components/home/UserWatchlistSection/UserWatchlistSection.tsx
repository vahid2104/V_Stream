"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";
import { getTMDBImageUrl } from "@/lib/imageUrl";
import { getUserWatchlist } from "@/services/watchlistService";
import type { WatchlistItem } from "@/types/watchlist";

import { userWatchlistStyles } from "./UserWatchlistSection.styles";

export default function UserWatchlistSection() {
  const { user, isAuthenticated, isLoading } = useAuth();

  const [items, setItems] = useState<WatchlistItem[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function loadWatchlist() {
      if (!user) return;

      setIsFetching(true);

      try {
        const watchlist = await getUserWatchlist(user.uid);
        setItems(watchlist);
      } finally {
        setIsFetching(false);
      }
    }

    loadWatchlist();
  }, [user]);

  if (isLoading || !isAuthenticated) return null;

  if (!isFetching && items.length === 0) return null;

  return (
    <section className={userWatchlistStyles.section}>
      <div className={userWatchlistStyles.header}>
        <h2 className={userWatchlistStyles.title}>My Watchlist</h2>
      </div>

      {isFetching ? (
        <div className={userWatchlistStyles.empty}>
          Loading your watchlist...
        </div>
      ) : (
        <div className={userWatchlistStyles.row}>
          {items.map((item) => {
            const imageUrl = getTMDBImageUrl(item.posterPath, "w500");

            return (
              <Link
                key={`${item.mediaType}-${item.id}`}
                href={`/details/${item.mediaType}/${item.id}`}
                className={userWatchlistStyles.card}
              >
                <article className={userWatchlistStyles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 185px, 215px"
                    className={userWatchlistStyles.image}
                  />

                  <div className={userWatchlistStyles.gradient} />

                  <div className={userWatchlistStyles.content}>
                    <h3 className={userWatchlistStyles.movieTitle}>
                      {item.title}
                    </h3>

                    <p className={userWatchlistStyles.meta}>
                      ⭐ {item.rating.toFixed(1)} •{" "}
                      {item.mediaType === "tv" ? "Series" : "Movie"}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
