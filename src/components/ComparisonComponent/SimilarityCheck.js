import React, { useState, useEffect } from 'react';
import Button from '../Button';
import SimilarityList from './SimilarityList';

const SimilarityCheck = ({ setSelectedMovies, selectedMovies, setShow }) => {
  const [similarities, setSimilarities] = useState([]);
  const [verdict, setVerdict] = useState(false)

  const resetMovies = () => {
    setSelectedMovies([]);
    setSimilarities([]);
    setShow(false)
    setVerdict(false)
  }


  useEffect(() => {
    const item1 = selectedMovies[0];
    const item2 = selectedMovies[1];

    if (selectedMovies.length === 2) {
      if (item1.parentalRating === item2?.parentalRating && item1.production?.year === item2.production?.year) {
        setVerdict(true)
      } else {
        setVerdict(false)
      }
    }
  }, [selectedMovies])

  const convertToHours = (duration) => duration?.milliseconds / 3600000;

  useEffect(() => {
    const item1 = selectedMovies[0];
    const item2 = selectedMovies[1];

    let similarValues = [];

    if (selectedMovies.length === 2) {
      if (item1.production?.year === item2.production?.year) {
        similarValues.push('Production year')
      }

      if (item1.parentalRating === item2.parentalRating) {
        similarValues.push('Parental Rating')
      }

      if (Math.round(item1.imdb?.rating) === Math.round(item2.imdb?.rating)) {
        similarValues.push('imdb Rating')
      }

      if (item1.people?.actors?.some(item => item2.people?.actors?.includes(item))) {
        similarValues.push('Actors')
      }

      if (convertToHours(item1.duration) < 1 && convertToHours(item2.duration) < 1) {
        similarValues.push('Duration < 1hr')
      } else if (
        (convertToHours(item1.duration) >= 1 && convertToHours(item1.duration) < 2) &&
        (convertToHours(item2.duration) >= 1 && convertToHours(item2.duration) < 2)
      ) {
        similarValues.push('Duration is between 1-2 hours')
      } else if (convertToHours(item1.duration) >= 2 && convertToHours(item2.duration) >= 2) {
        similarValues.push('Duration >= 2hrs')
      }

      setSimilarities(similarValues)
    }

  }, [selectedMovies])

  return (
    <div className='similarity-check'>
      <div>{verdict ? 'YES' : 'NO'}</div>
      <Button text='Clear Selection' handleClick={resetMovies} />
      {verdict && similarities.length > 2 && <SimilarityList similarities={similarities} />}
    </div>
  );
};

export default SimilarityCheck;