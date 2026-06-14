const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

type FetchFromTMDBOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

export async function fetchFromTMDB<T>(
  endpoint: string,
  options?: FetchFromTMDBOptions
): Promise<T> {
  if (!TMDB_BASE_URL) {
    throw new Error("TMDB_BASE_URL is missing in .env.local");
  }

  if (!TMDB_ACCESS_TOKEN) {
    throw new Error("TMDB_ACCESS_TOKEN is missing in .env.local");
  }

  const separator = endpoint.includes("?") ? "&" : "?";
  const url = `${TMDB_BASE_URL}${endpoint}${separator}language=en-US`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: options?.cache,
    next: options?.next,
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}