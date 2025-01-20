import React, { useEffect, useState } from 'react'
import './Row.css'
import axios,{imgURL} from '../../axios'
import useMovie from '../../Contexts/MovieContext'
import { useNavigate } from 'react-router-dom'

function Row({title, fetchUrl, isHighPoster}) {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    // consuming the movie context
    const {handleMovie} = useMovie()

    useEffect(()=>{
        async function fetchMovies(){
            try{
            const response = await axios.get(fetchUrl)
            setMovies(response.data.results)
            return response
            }catch(err){
                console.log(err)
            }
        }
        fetchMovies()
    },[fetchUrl]);

    const movieDetails = (movie)=>{
        handleMovie(movie)
        navigate('/movie-display')
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {
                movies.map((movie)=>(
                    <img 
                    onClick={()=>movieDetails(movie)}
                    key={movie.id} 
                    src={`${imgURL}${isHighPoster? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name || movie.original_name} 
                    className={`row_poster ${isHighPoster && 'big_row_poster'}`} />
                ))
            }
        </div>
    </div>
  )
}

export default Row