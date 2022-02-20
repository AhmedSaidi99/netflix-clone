import './scss/App.scss'
import requests from './requests';
import Row from './compenets/Row';
import Header from './compenets/Header'
import Navbar from './compenets/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLarge />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies} isLarge />
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} isLarge />
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <Row title='Documantaries' fetchURL={requests.fetchDocumentaries} isLarge />
      <Row title='Popular TV' fetchURL={requests.fetchPopularTV} />
      <Row title='Airing Today TV' fetchURL={requests.fetchAiringTodayTV} />
      <Row title='Top Rated TV' fetchURL={requests.fetchTopRatedTV} isLarge />
      <footer>Made with ❤️ by <a href="https://twitter.com/Ahmed99Saidi">Ahmed Saidi</a> </footer>
    </div>
  );
}

export default App;
