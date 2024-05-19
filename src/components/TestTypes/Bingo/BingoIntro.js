import React, { useCallback, useEffect, useRef } from 'react';
import { _eventSenderGA } from '../../../tools/tools';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';

const BingoIntro = ({ title, setMode }) => {
  const mainImgRef = useRef(null);
  const onStartButtonClick = useCallback(() => {
    _eventSenderGA('Paging', `Click ${title} Start-test Button`, 'intro page');
    setMode('start');
  }, [title, setMode]);
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div>
      <img
        ref={mainImgRef}
        src='https://images.ktestone.com/introImages/bingo1-intro-sample.jpg'
        alt='bingo1-intro'
        className='result-img'
        onClick={onStartButtonClick}
        style={{ cursor: 'pointer' }}
      />
      <GoToHomeBtn page={`${title} intro`} />
    </div>
  );
};

export default BingoIntro;
