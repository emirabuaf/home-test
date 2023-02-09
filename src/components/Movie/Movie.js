import React from 'react';

const Movie = ({ product, handleSelect }) => {

  return (
    <div className='movie' onClick={() => handleSelect(product)}>
      <p>{product.title}</p>
    </div>
  );
};

export default Movie;