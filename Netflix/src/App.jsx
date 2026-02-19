import React from 'react';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import Row from './components/Row';
import { requests } from './services/api';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroBanner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="New Releases" fetchUrl="2024" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
