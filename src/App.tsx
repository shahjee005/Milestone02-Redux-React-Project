import React, { Fragment } from "react";
import "./App.css";
import { RootState } from "./store";
import { addBlogPosts } from "./store/blogPost/actions";
import { connect } from "react-redux";
import NavBar from "./components/navigationBar/NavBar";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import LoginButtonNavbar from "./components/SubmitDirect/LoginButtonNavbar";
import MovieList from "./components/Movie/MovieList";
import AboutUs from "./components/BodyContent/aboutuUs";

export interface IAppProps {}
export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
        <LoginButtonNavbar />
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
