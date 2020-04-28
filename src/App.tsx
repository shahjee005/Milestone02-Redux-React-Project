import React, { Fragment } from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";

import { RootState } from "./store";
import { addBlogPosts } from "./store/blogPost/actions";
import { connect } from "react-redux";
import MovieBlogListOutput from "./components/MovieBlog/movieBlogOutput";
import MovieBlogInput from "./components/MovieBlog/movieBlogInput";
import NavBar from "./components/navigationBar/NavBar";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import LoginButtonNavbar from "./components/SubmitDirect/LoginButtonNavbar";
import MovieList from "./components/Movie/MovieList";
import MainPage from "./components/bodyContent/bodyContent";

// import MovieList from './components/MovieBlog/MovieList/movieList';

export interface IAppProps {}
export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <LoginButtonNavbar />
        </Fragment>
        <Grid centered>
          <Grid.Row>
            <MainPage />
          </Grid.Row>
          <div className="blog">
            <Grid.Row>
              <MovieBlogListOutput />
            </Grid.Row>
            <Grid.Row>
              <MovieBlogInput />
            </Grid.Row>
          </div>
        </Grid>
      </Fragment>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    blogPosts: state.BlogPost.blogPosts,
  };
};

export default connect(mapStateToProps, { addBlogPosts })(App);
