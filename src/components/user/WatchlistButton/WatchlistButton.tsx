"use client";

import { useEffect, useState } from "react";
import { Bookmark, Check } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import {
  addToWatchlist,
  checkWatchlistItem,
  removeFromWatchlist,
} from "@/services/watchlistService";
import type { WatchlistItem } from "@/types/watchlist";

import { watchlistButtonStyles } from "./WatchlistButton.styles";

type WatchlistButtonProps = {
  item: WatchlistItem;
};

export default function WatchlistButton({ item }: WatchlistButtonProps) {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadWatchlistState() {
      if (!user) return;

      const exists = await checkWatchlistItem(user.uid, item.mediaType, item.id);
      setIsInWatchlist(exists);
    }

    loadWatchlistState();
  }, [user, item.id, item.mediaType]);

  async function handleToggleWatchlist() {
    if (isLoading) return;

    if (!isAuthenticated || !user) {
      router.push("/login");
      return;
    }

    setIsSubmitting(true);

    try {
      if (isInWatchlist) {
        await removeFromWatchlist(user.uid, item.mediaType, item.id);
        setIsInWatchlist(false);
      } else {
        await addToWatchlist(user.uid, item);
        setIsInWatchlist(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={handleToggleWatchlist}
      disabled={isSubmitting}
      className={isInWatchlist ? watchlistButtonStyles.active : ""}
    >
      {isInWatchlist ? <Check size={16} /> : <Bookmark size={16} />}
      {isInWatchlist ? "In Watchlist" : "Add Watchlist"}
    </Button>
  );
}