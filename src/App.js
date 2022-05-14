import React from 'react';
import './App.css';
import Row from './Row';
import requests  from './Requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl ={requests.fetchTopRated} />
      <Row title="Action" fetchUrl ={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl ={requests.fetchRomanceMovies} />
      <Row title="Western Movies" fetchUrl ={requests.fetchWestern} />
      <Row title="Science Fiction" fetchUrl ={requests.fetchSciFi} />
      <Row title="Animated Movies" fetchUrl ={requests.fetchAnimation} />
      <Row title="Mystery Movies" fetchUrl ={requests.fetchMystery} />
      <Row title="Documentaries" fetchUrl ={requests.fetchDocumentaries} />
      <Row title="Popular Tv Show" fetchUrl ={requests.fetchTV} />
    </div>
  );
}

export default App;
