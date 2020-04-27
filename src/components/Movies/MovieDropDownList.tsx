import * as React from 'react';
import { createStore } from 'redux'
import {Grid} from 'semantic-ui-react';

import { Fragment } from 'react';
import { moviesReducer } from '../../store/Movies/reducers';
import {MovieState, Movie, } from '../../store/Movies/types';
import { connect } from 'react-redux';

export interface IMoviesProps {
  movies: Movie[]
}

export default class Movies extends React.Component<IMoviesProps> {
  public render() {


    return (
      <Grid>
      <h3>Movies</h3>
      <ul>
        {/* Loop through our REDUX array of movies... */}
        { this.props.movies.map ( movieDDL => (
            <div>
              {movieDDL.title}
            </div>
        ) ) }
      </ul>
    </Grid>

    );
  }
}

//  **FROM REDUCERS: 
// export function moviesReducer(state = initialState) {
//   return state;

// Retrieve 'movies from our global redux state'
const mapStateToProps = ( state: MovieState ) => {
    return {
      movies: state.movies
    }
}













// export default class MovieDropDownList extends React.Component<IMovieDropDownListProps> {
//  public render() {
//    return (
//      <Fragment>
 
 
//    const some map function from movieList to return titles and put into a list of buttons
//    const movieOptions = [
 
//    { this.props.movies.map(eachMovie => (
//        <div>{eachMovie.</div>
//    )
      
//        ) },
//    { key: this.props.movies.movieID, value: 'bs', text: movies.title },

// ]
 
//  const DropdownMovieList = () => (
//  <Dropdown
//      placeholder='Select Movie'
//      fluid
//      search
//      selection
//      options={movieList}
//  />
//  )

//  export default DropdownMovieList
// </Fragment>
// );
// }
// }
