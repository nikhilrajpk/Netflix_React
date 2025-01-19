import React, { useEffect, useState } from 'react'
import './Banner.css'
import useMovie from '../../Contexts/MovieContext'
import axios, {imgURL} from '../../axios'
import requests from '../../requests'

function Banner() {
    const [movie, setMovie] = useState('')

    const {handleMovie} = useMovie()
    

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await axios.get(requests.fetchTopRated);
                if (response?.data?.results?.length) {
                    setMovie(
                        response.data.results[
                            Math.floor(Math.random() * response.data.results.length)
                        ]
                    );
                } else {
                    console.error("Results not found in the API response");
                }
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }
        fetchMovie()

        const timerCall = setInterval(fetchMovie, 10000);
        return ()=> clearInterval(timerCall)
    }, []);
    

    function truncate(str, n){
        return str?.length > n ? str.slice(0, n-1) + '...' : str
    }
  return (
    <header className="banner" style={{backgroundImage:`url(${movie ? imgURL+movie.poster_path : ""})`}}>
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_btn">Play</button>
                <button className="banner_btn">My List</button>
            </div>
            <h3 className="banner_description">{truncate(movie?.overview, 150)}</h3>
        </div>
    </header>
  )
}

export default Banner