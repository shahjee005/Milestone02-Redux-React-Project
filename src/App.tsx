import React, { Fragment } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import MainPage from './components/BodyContent/bodyContent';
import { RootState } from './store';
import { addBlogPosts } from './store/blogPost/actions';
import { connect } from 'react-redux';
import MovieBlogListOutput from './components/MovieBlog/movieBlogOutput';
import MovieBlogInput from './components/MovieBlog/movieBlogInput';

export interface IAppProps {
}
export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Grid centered >
          <Grid.Row>
            <MainPage />
          </Grid.Row>
          <Grid.Row>
            <MovieBlogListOutput />
          </Grid.Row>
          <Grid.Row>
            <MovieBlogInput />
          </Grid.Row>
          
        </Grid>
      </Fragment>
    );

  }
}
const mapStateToProps = (state: RootState) => {
  return {
    blogPosts: state.BlogPost.blogPosts,
  };
}

export default connect(
  mapStateToProps,
  { addBlogPosts }
)(App);