import { useState, useEffect } from 'react';
import SimilarityCheck from '../ComparisonComponent/SimilarityCheck';
import SelectedMovie from './SelectedMovie';

const SelectedMovies = ({ setSelectedMovies, selectedMovies }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (selectedMovies.length === 2) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [selectedMovies]);

  return (
    <>
      {
        show &&
        <div className='selected-movies'>
          <SelectedMovie title={selectedMovies[0].title} />
          <SimilarityCheck selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} setShow={setShow} />
          <SelectedMovie title={selectedMovies[1].title} />
        </div >
      }
    </>

  )
};

export default SelectedMovies;