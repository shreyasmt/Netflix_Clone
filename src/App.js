import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav"
function App() {
  return (
    <div className="App">
      <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Now" fetchURL={requests.fetchTrending} />
     <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
     <Row title="Action" fetchURL={requests.fetchActionMovies} />
     <Row title="Comedies" fetchURL={requests.fetchComedyMovies} />
     <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
     
    </div>
  );
}

export default App;
