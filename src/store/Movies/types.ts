export interface MoviePoster {
    movieID: number;
    title: string;
    year: number;
    genre: string;
    imdb: string;
    summary: string;
    poster: string;
}

export interface MovieChoices {
    title: string;
    year: number;
}