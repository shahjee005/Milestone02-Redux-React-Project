import * as React from "react";
import { Fragment } from "react";
import NavBar from "./components/navigationBar/NavBar";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
// import LoginButtonNavbar from "./components/SubmitDirect/LoginButtonNavbar";
import MovieList from "./components/Movie/MovieList";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
        {/* <LoginButtonNavbar /> */}
      </Fragment>
    );
  }
}
