import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import type { WatchlistItem } from "@/types/watchlist";

function getWatchlistDocId(mediaType: string, id: number) {
  return `${mediaType}_${id}`;
}

export async function addToWatchlist(userId: string, item: WatchlistItem) {
  const docId = getWatchlistDocId(item.mediaType, item.id);

  await setDoc(doc(db, "users", userId, "watchlist", docId), {
    ...item,
    addedAt: serverTimestamp(),
  });
}

export async function removeFromWatchlist(
  userId: string,
  mediaType: string,
  id: number
) {
  const docId = getWatchlistDocId(mediaType, id);

  await deleteDoc(doc(db, "users", userId, "watchlist", docId));
}

export async function checkWatchlistItem(
  userId: string,
  mediaType: string,
  id: number
) {
  const docId = getWatchlistDocId(mediaType, id);
  const snapshot = await getDoc(doc(db, "users", userId, "watchlist", docId));

  return snapshot.exists();
}