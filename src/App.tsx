import React from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";
import LoginForm from "./components/Login/loginForm";
// import loginButtonNavbar from "./components/NavBar/loginButtonNavbar";
// import navigationBar from "./components/NavBar/navigationBar";

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Milestone-02 Redux-react-typescript Projet</h1>
      </Grid.Row>
      <Grid.Row>{/* <navigationBar /> */}</Grid.Row>{" "}
      <Grid.Row>{/* <loginButtonNavbar /> */}</Grid.Row>
      <Grid.Row>
        <LoginForm />
      </Grid.Row>
    </Grid>
  );
}

export default App;
