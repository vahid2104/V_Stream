import MainLayout from "@/components/layout/MainLayout";
import DetailsPageContent from "@/components/details/DetailsPageContent/DetailsPageContent";

import {
  getMediaCredits,
  getMediaDetails,
  getMediaReviews,
  getMediaTrailer,
  getSimilarMedia,
} from "@/services/tmdbService";

import type { MediaType } from "@/types/tmdb";

type DetailsPageProps = {
  params: Promise<{
    mediaType: MediaType;
    id: string;
  }>;
};

export default async function DetailsPage({ params }: DetailsPageProps) {
  const { mediaType, id } = await params;

  const mediaId = Number(id);

  const [details, cast, similar, reviews, trailer] = await Promise.all([
    getMediaDetails(mediaType, mediaId),
    getMediaCredits(mediaType, mediaId),
    getSimilarMedia(mediaType, mediaId),
    getMediaReviews(mediaType, mediaId),
    getMediaTrailer(mediaType, mediaId),
  ]);

  return (
    <MainLayout>
      <DetailsPageContent
        details={details}
        cast={cast}
        similarItems={similar.results.slice(0, 12)}
        reviews={reviews}
        trailer={trailer}
        mediaType={mediaType}
      />
    </MainLayout>
  );
}