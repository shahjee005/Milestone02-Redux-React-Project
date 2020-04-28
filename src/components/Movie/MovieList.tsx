import * as React from "react";
import { Grid } from "semantic-ui-react";
import MovieBlogListOutput from "../MovieBlog/movieBlogOutput";
import MovieBlogInput from "../MovieBlog/movieBlogInput";
import MainPage from "../BodyContent/MainPage";

export interface IMovieListProps {}

export default class MovieList extends React.Component<IMovieListProps> {
  public render() {
    return (
      <Grid className="blog" centered>
        <Grid.Row>
          <MovieBlogListOutput />
        </Grid.Row>
        <Grid.Row>
          <MovieBlogInput />
        </Grid.Row>
        <Grid centered>
          <Grid.Row>
            <MainPage />
          </Grid.Row>
        </Grid>
      </Grid>
    );
  }
}
