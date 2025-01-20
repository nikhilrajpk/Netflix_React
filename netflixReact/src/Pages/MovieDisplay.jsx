import React, {Suspense} from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from '../Components/Nav/Nav'
import './MovieDisplay.css'
import Arrow from '../Components/Arrow/Arrow'
import useMovie from '../Contexts/MovieContext'
import { imgURL } from '../axios'
import Play from './Play'

function MovieDisplay() {
    const navigate = useNavigate()
    // consuming movie context
    const {movie} = useMovie()

    const playTrailer = ()=>{
        navigate('/play')
    }

  return (
    <div className='movie_display'>
        <div className='nav_back'></div>
        < Nav />

        < Arrow />

        <div className='movie_details'>
            <img src={`${imgURL}${movie?.backdrop_path}`} alt={movie?.name || movie?.original_name} className='movie_img' />
            <h1>{movie?.name || movie?.original_name || movie?.title || movie?.original_title}</h1>
            <p>{movie?.overview}</p>
            <button 
            onClick={playTrailer}
            className='play_btn'>Play</button>
        </div>
    </div>
  )
}

export default MovieDisplay