import { useEffect, useState } from "react";
import requests from "../requests";
import instance from "../axios";
import '../scss/Header.scss'

const Header = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchNetflixOriginals)
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
      setTimeout(fetchData, 30000)
    }
    fetchData()
  }, [])

  const headerStyles = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
    backgroundPosition: 'center'
  }

  return (
    <header className="header" style={headerStyles}>
      <div className="header__content">
        <h1 className="header__title">{movie?.name || movie?.original_name}</h1>
        <div className="header__btns">
          <button className="header__btn">Play</button>
          <button className="header__btn">My List</button>
        </div>
        <p className="header__desc">{movie.overview}</p>
      </div>
      <div className="header__gradiant"></div>
    </header>
  );
}

export default Header;