import { fetchFromTMDB } from "@/lib/tmdb";
import type {
  MediaType,
  TMDBCastMember,
  TMDBCreditsResponse,
  TMDBDetails,
  TMDBMovie,
  TMDBResponse,
  TMDBVideo,
  TMDBVideosResponse,
  TMDBWatchProvider,
TMDBWatchProvidersResponse,
} from "@/types/tmdb";

export async function getTrendingMovies() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/trending/movie/week", {
    next: { revalidate: 60 * 60 },
  });
}

export async function getPopularMovies() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/movie/popular", {
    next: { revalidate: 60 * 60 },
  });
}

export async function getTopRatedMovies() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/movie/top_rated", {
    next: { revalidate: 60 * 60 },
  });
}

export async function getUpcomingMovies() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/movie/upcoming", {
    next: { revalidate: 60 * 60 },
  });
}

export async function getNowPlayingMovies() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/movie/now_playing", {
    next: { revalidate: 60 * 30 },
  });
}

export async function getPopularTvShows() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/tv/popular", {
    next: { revalidate: 60 * 60 },
  });
}

export async function getAiringTodayTvShows() {
  return fetchFromTMDB<TMDBResponse<TMDBMovie>>("/tv/airing_today", {
    next: { revalidate: 60 * 60 },
  });
}

export async function searchMulti(query: string) {
  const encodedQuery = encodeURIComponent(query);

  return fetchFromTMDB<TMDBResponse<TMDBMovie>>(
    `/search/multi?query=${encodedQuery}`,
    {
      cache: "no-store",
    }
  );
}

export async function getMediaDetails(mediaType: MediaType, id: number) {
  return fetchFromTMDB<TMDBDetails>(`/${mediaType}/${id}`, {
    next: { revalidate: 60 * 60 },
  });
}

export async function getMediaVideos(mediaType: MediaType, id: number) {
  const data = await fetchFromTMDB<TMDBVideosResponse>(
    `/${mediaType}/${id}/videos`,
    {
      next: { revalidate: 60 * 60 },
    }
  );

  return data.results;
}

export async function getMediaTrailer(mediaType: MediaType, id: number) {
  const videos = await getMediaVideos(mediaType, id);

  return (
    videos.find(
      (video: TMDBVideo) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official
    ) ||
    videos.find(
      (video: TMDBVideo) =>
        video.site === "YouTube" && video.type === "Trailer"
    ) ||
    null
  );
}

export async function getMediaCredits(mediaType: MediaType, id: number) {
  const data = await fetchFromTMDB<TMDBCreditsResponse>(
    `/${mediaType}/${id}/credits`,
    {
      next: { revalidate: 60 * 60 },
    }
  );

  return data.cast.slice(0, 12) as TMDBCastMember[];
}

export async function getMovieWatchProviders(region = "US") {
  const data = await fetchFromTMDB<TMDBWatchProvidersResponse>(
    `/watch/providers/movie?watch_region=${region}`,
    {
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  return data.results
    .filter((provider: TMDBWatchProvider) => provider.logo_path)
    .sort(
      (a: TMDBWatchProvider, b: TMDBWatchProvider) =>
        a.display_priority - b.display_priority
    )
    .slice(0, 16);
}