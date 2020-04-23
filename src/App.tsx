import React from 'react';
import './App.css';
import Body from './components/BodyContent/bodyContent';
import MovieContainer from './components/MovieBlog/movieBlogContainer';
import NavigationBar from './components/NavBar/navigationBar';

// consider this for state > this is taken from "react-in-class-demo"
// interface IState {
//   menuItems: IMenuItem[];
//   isButtonPressed: boolean;
//   userName: string;
//   password: string | number;
// }



function App() {
  return (
    <div className="App">
     <h1>Milestone-02 Redux-react-typescript Projet  </h1>
     <NavigationBar />
     <Body />
     <MovieContainer />
    </div>
  );
}

export default App;
