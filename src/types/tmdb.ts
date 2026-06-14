export type MediaType = "movie" | "tv";

export type TMDBMovie = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  media_type?: MediaType;
  adult?: boolean;
  original_language?: string;
};

export type TMDBResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type TMDBGenre = {
  id: number;
  name: string;
};

export type TMDBDetails = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  number_of_seasons?: number;
  genres: TMDBGenre[];
  tagline?: string;
  status?: string;
};

export type TMDBVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
};

export type TMDBVideosResponse = {
  id: number;
  results: TMDBVideo[];
};

export type TMDBCastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type TMDBCreditsResponse = {
  id: number;
  cast: TMDBCastMember[];
};

export type TMDBWatchProvider = {
  provider_id: number;
  provider_name: string;
  logo_path: string | null;
  display_priority: number;
};

export type TMDBWatchProvidersResponse = {
  results: TMDBWatchProvider[];
};