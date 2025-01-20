import { imgURL } from '../../axios';
import { useNavigate } from 'react-router-dom';
import './Card.css'
import React from 'react';
import useMovie from '../../Contexts/MovieContext';

function Card({movieId,imgUrl,title,overview}){
  const navigate = useNavigate()
  const {handleMovie} = useMovie();
  
   const onHandle = (id,backdrop_path,name,overview)=>{
        handleMovie({id,backdrop_path,name,overview})
        navigate('/movie-display')
   }
    return (
        <>
         <div onClick={()=> onHandle(movieId,imgUrl,title,overview)} className="card" key={movieId}>
            <img src={`${imgURL+imgUrl}`} alt={title} loading='lazy' />
            <div className="card-info">
              <h3>{title}</h3>
              </div>
            </div>
            </>
    )
    }
    export default React.memo(Card)
