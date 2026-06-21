import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
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
  id: number,
) {
  const docId = getWatchlistDocId(mediaType, id);

  await deleteDoc(doc(db, "users", userId, "watchlist", docId));
}

export async function checkWatchlistItem(
  userId: string,
  mediaType: string,
  id: number,
) {
  const docId = getWatchlistDocId(mediaType, id);
  const snapshot = await getDoc(doc(db, "users", userId, "watchlist", docId));

  return snapshot.exists();
}

export async function getUserWatchlist(userId: string) {
  const watchlistQuery = query(
    collection(db, "users", userId, "watchlist"),
    orderBy("addedAt", "desc"),
  );

  const snapshot = await getDocs(watchlistQuery);

  return snapshot.docs.map((doc) => doc.data() as WatchlistItem);
}
