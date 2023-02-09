import React from 'react';
import Movie from './Movie';

const MovieList = ({ data, setSelectedMovies, selectedMovies }) => {

  const handleSelect = (movie) => {
    if (selectedMovies.length === 2) {
      return;
    }
    setSelectedMovies([...selectedMovies, movie]);
  };

  return (
    <div className='movie-list'>
      {data[0]?.products.map((product) => (
        <Movie key={product.guid} product={product} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default MovieList;