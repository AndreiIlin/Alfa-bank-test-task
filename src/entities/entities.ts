export interface FilmFull {
  filmId: number;
  nameRu?: string;
  nameEn?: string;
  rating?: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingVoteCount?: number;
  year?: number;
  filmLength?: number;
  countries: string[];
  genres: string[];
}

export interface FilmShort {
  filmId: number;
  nameRu?: string;
  posterUrlPreview: string;
  year?: number;
  liked: boolean;
}
