import React, { useEffect, useRef } from 'react';
import BingoTable from './BingoTable';
import { shuffleArray } from '../../../tools/tools';

const BingoView = ({ currentBingo }) => {
  const mainImgRef = useRef(null);
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div>
      <img
        ref={mainImgRef}
        src={`https://images.ktestone.com/meta/bingo/${currentBingo.title}-upper-banner.jpg`}
        alt='bingo1-intro'
        className='result-img'
      />
      <BingoTable
        title={currentBingo.title}
        size={currentBingo.size}
        contents={
          currentBingo.shuffle
            ? shuffleArray(currentBingo.contents)
            : currentBingo.contents
        }
      />
    </div>
  );
};

export default BingoView;
