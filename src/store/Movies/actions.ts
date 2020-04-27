import { MovieDropDownList, MovieDetails, GET_MOVIE_FROM_DROPDOWN, DISPLAY_MOVIE_DETAILS } from "./types";


export function movieDropDownList(movieID: number):
MovieDropDownListActionTypes {
    return {
        type: GET_MOVIE_FROM_DROPDOWN,
        payload: movieID
    };

export function movieDetailsL(movieID: number):
MovieDetailsActionTypes {
    return {
        type: DISPLAY_MOVIE_DETAILS,
        payload: movieID
    };
}

