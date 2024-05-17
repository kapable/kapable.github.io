import React from 'react';
import BingoTable from './BingoTable';
import { shuffleArray } from '../../../tools/tools';

const BingoView = ({ currentBingo }) => {
  return (
    <div>
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
