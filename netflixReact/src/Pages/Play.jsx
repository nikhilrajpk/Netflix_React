import React, { useEffect, useState } from 'react'
import useMovie from '../Contexts/MovieContext'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Arrow from '../Components/Arrow/Arrow'
import Nav from '../Components/Nav/Nav'
import './Play.css'
import Loader from '../utils/Loader/Loader'

const opts  = {
    height : "390",
    width : "100%",
    playerVars : {
        autoplay : 1,
    }
}
function Play() {
    const [trailerUrl, setTrailerUrl] = useState('')
    const [loading, setLoading] = useState(false)

    // consuming movie context
    const {movie} = useMovie()
    console.log(movie)
    useEffect(() => {
        if (movie) {
            setLoading(true)
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        const videoId = urlParams.get("v");
                        setTrailerUrl(videoId);
                    } else {
                        console.error("No trailer found for this movie");
                        setTrailerUrl("");
                    }
                })
                .catch((err) => {
                    console.error("Error finding trailer:", err);
                    setTrailerUrl("");
                })
                .finally(()=> setLoading(false))
        }
    }, [movie]);
    

  return (
    <div className='play_div'>
        < Nav />
        < Arrow />
        <div className='nav_back'></div>
        <div className='trailer'>
        {
            loading ? < Loader /> : 
                trailerUrl ? (
                <Youtube videoId={trailerUrl} opts={opts} />
            ) : (
                <div style={styles.noTrailerContainer}>
                    <h2 style={styles.heading}>Oops! No Trailer Found</h2>
                    <p style={styles.message}>
                        We are sorry, but we couldn't find a trailer for this movie or show. Check back later or explore other titles.
                    </p>
                </div>
            )
        }
        </div>
    </div>
  )
}
const styles = {
    noTrailerContainer: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "20px auto",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        marginBottom: "15px",
    },
    heading: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
    },
    message: {
        fontSize: "1rem",
        color: "#666",
    },
};
export default Play