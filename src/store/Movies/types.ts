export interface MovieState {
movies: Movie[];  // datatype: movies 
}

// new comment to sway github into believing changes have been made... (heavy sigh)

export interface Movie {
    movieID: number;
    title: string;
    year: number;
    genre: string;
    imdb: string;
    summary: string;
    poster: string;
}
