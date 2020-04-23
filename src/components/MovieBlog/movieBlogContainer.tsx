import * as React from 'react';
import MovieBlogInput from './movieBlogInput';

export interface IMovieContainerProps {
}

export default class MovieContainer extends React.Component<IMovieContainerProps> {
  public render() {
    return (
      <div>
        stub for movie blog
        <MovieBlogInput />
      </div>
    );
  }
}
