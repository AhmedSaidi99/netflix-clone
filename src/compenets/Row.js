import { useEffect, useState } from "react";
import instance from "../axios";
import '../scss/Row.scss'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Details from "./Details";

const baseImgURL = 'https://image.tmdb.org/t/p/original/'


const Row = ({title, fetchURL, isLarge}) => {
  const [movies, setMovies] = useState([])
  const [isDropdown, setIsDropdown] = useState(false)
  const [currentMovie, setCurrentMovie] = useState({})
  const [trailerURL, setTrailerURL] = useState('')
  const [activeMenu, setActiveMenu] = useState(true)


  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchURL)
      setMovies(response.data.results)
    }
    fetchData()
  }, []) 


  
  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    setCurrentMovie(movie)
    if (isDropdown) {
      setIsDropdown(false)
      setTrailerURL('')
    } else {
      setIsDropdown(true)
      movieTrailer(movie.name || movie.title || movie.original_title)
      .then(url => {
        const urlPrams = new URLSearchParams(new URL(url).search)
        setTrailerURL(urlPrams.get('v'))
      })
      .catch(err => console.log(err))
    }
  }
    
  const posters = movies.map(movie => {
    return (
      <img 
        className={`row__poster ${isLarge && 'row__posterLarge'}`}
        key={movie.id} 
        src={`${baseImgURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie?.title || movie?.original_title}
        onClick={() => handleClick(movie)}
      />
    )
  })

  const handleActive = () => {
    setActiveMenu(prevState => !prevState)
  }



  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
          {posters}
      </div>
      {
      isDropdown &&
      <div className="row__dropdown">
        <div className="row__dropdown__btns">
          <div className={`row__dropdown__btn ${activeMenu && 'active'}`} onClick={handleActive}>Details</div>
          <div className={`row__dropdown__btn ${!activeMenu && 'active'}`} onClick={handleActive}>Trailer</div>
        </div>
        {activeMenu && <Details movie={currentMovie}/>}
        {!activeMenu && <Youtube videoId={trailerURL} opts={opts} />}
      </div>
      }
    </div>
  );
}

export default Row;