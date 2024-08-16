export interface AnimeImageFormats {
  thumbnail: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  };
}

export interface AnimeImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: AnimeImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AnimeImage {
  data: {
    id: number;
    attributes: AnimeImageAttributes;
  };
}
interface ReviewAttributes {
  title: string;
  body: string;
  rating: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Review {
  id: number;
  attributes: ReviewAttributes;
}

interface ReviewsData {
  data: Review[];
}

export interface CreateReview {
  title: string;
  rating: number;
  body: string;
  author: string;
}

export interface CreateReviewAction extends CreateReview {
  anime: number;
}

export interface AnimeAttributes {
  title: string;
  season: string;
  genre: string;
  alt: string;
  episodes: number;
  synopsis: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: AnimeImage;
  reviews?: ReviewsData;
}

export interface Anime {
  id: number;
  attributes: AnimeAttributes;
}
