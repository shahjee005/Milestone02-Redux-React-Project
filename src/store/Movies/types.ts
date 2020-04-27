export interface MovieState {
    movies: Movie[];
}

export interface Movie {
    movieID: number;
    title: string;
    year: number;
    genre: string;
    imdb: string;
    summary: string;
    poster: string;
  }

// Action types/names
// No action types required as we are not adding or deleting from movies

// Define action requirements
// No actions required as we are not adding or deleting from movies

// export type MovieActionTypes = MovieDetails | MovieDropDownList;
