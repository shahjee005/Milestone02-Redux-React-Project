export interface MovieDropDownListState {
  movieDropDownList: MovieDropDownList[]; // datatype: movies
}

export interface MovieDropDownList {
  movieID: number;
  title: string;
}

export interface MovieDetailsState {
    movieDetails: MovieDetails[];
}

export interface MovieDetails {
    movieID: number;
    title: string;
    year: number;
    genre: string;
    imdb: string;
    summary: string;
    poster: string;
  }

// Action types/names
export const GET_MOVIE_FROM_DROPDOWN = "GET_MOVIE_FROM_DROPDOWN";
export const DISPLAY_MOVIE_DETAILS = "DISPLAY_MOVIE_DETAILS";

export interface MovieDropDownList {
type: typeof GET_MOVIE_FROM_DROPDOWN;
payload: number;  // This will match our movieID
}

export interface displayMovieDetails {
    type: typeof DISPLAY_MOVIE_DETAILS;
    payload: number; //
}

export type MovieActionTypes = MovieDetails | MovieDropDownList;
