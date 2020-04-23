import React from 'react';
import './App.css';
import Body from './components/BodyContent/bodyContent';
import MovieContainer from './components/MovieBlog/movieBlogContainer';
import NavigationBar from './components/NavBar/navigationBar';

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
