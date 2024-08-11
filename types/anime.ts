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
  }
  
  export interface Anime {
    id: number;
    attributes: AnimeAttributes;
  }
  