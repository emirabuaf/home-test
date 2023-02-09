import React from 'react';

const SelectedMovie = ({ title }) => {
  return <img src={`https://via.placeholder.com/240x320.png?text=${title}`} alt="Image description" />
};

export default SelectedMovie;