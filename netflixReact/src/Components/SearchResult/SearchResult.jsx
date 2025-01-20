import React, { useEffect, useState,Suspense } from 'react';
import './SearchResult.css';
import SkeletonCard from '../../utils/PreLoad/SkeletonCard';

 const Card = React.lazy(()=>import('../../utils/Card/Card'))

const SearchResult = ({ results }) => {
  const [filterMovie,setFilterMovie] = useState([]);


  useEffect(() => {
    setFilterMovie(results.filter((val) => val.backdrop_path != null && val.title != null));
  }, [results]);
  
  return (
    <div className="results-grid">
      {filterMovie.length > 0 ? (
        filterMovie.map((movie) => (
          <Suspense fallback={<SkeletonCard/>} key={movie.id}>

            <Card  imgUrl={movie.backdrop_path} itemId={movie.id} title={movie.title} overview={movie.overview} />
          </Suspense>
        ))
      ) : (
        <div className='result-not-found'>
          <p className='error-msg'>No results found. Try searching for something else ...</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
