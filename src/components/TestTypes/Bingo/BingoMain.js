import React, { useState } from 'react';
import { bingo } from '../../../api/BINGO';
import BingoIntro from './BingoIntro';
import BingoView from './BingoView';

const BingoMain = ({ title }) => {
  const [currentBingo] = useState(bingo.find((elem) => elem.title === title));
  const [mode, setMode] = useState('intro');

  if (mode === 'intro') {
    return <BingoIntro title={title} setMode={setMode} />;
  } else if (mode === 'start') {
    return <BingoView currentBingo={currentBingo} />;
  }
};

export default BingoMain;
