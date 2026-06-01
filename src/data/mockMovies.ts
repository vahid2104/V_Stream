import type { Movie } from "@/types/movie";

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
    posterPath:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropPath:
      "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    rating: 9.0,
    year: "2008",
    genre: "Action",
  },
  {
    id: 2,
    title: "Interstellar",
    overview:
      "A group of explorers travel through a wormhole in space in an attempt to save humanity.",
    posterPath:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropPath:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 8.7,
    year: "2014",
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Inception",
    overview:
      "A skilled thief steals secrets through dream-sharing technology and is given one final task.",
    posterPath:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdropPath:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    rating: 8.8,
    year: "2010",
    genre: "Thriller",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    overview:
      "The Avengers assemble once more to reverse the damage caused by Thanos.",
    posterPath:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdropPath:
      "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    rating: 8.4,
    year: "2019",
    genre: "Adventure",
  },
  {
    id: 5,
    title: "Joker",
    overview:
      "A failed comedian descends into madness and becomes Gotham's infamous villain.",
    posterPath:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdropPath:
      "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    rating: 8.4,
    year: "2019",
    genre: "Drama",
  },
];