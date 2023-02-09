import React from 'react';

const SimilarityList = ({ similarities }) => {
  return (
    <div>
      <h4>List of similarities</h4>
      {similarities.map((property, index) => (
        <p key={index}>{property}</p>
      ))}
    </div>
  );
};

export default SimilarityList;