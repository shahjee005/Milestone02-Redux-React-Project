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

export class Movies extends React.Component<IMoviesProps> {
  render() {
    
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