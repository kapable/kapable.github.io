import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ColorPickerTierTable from './ColorPickerTierTable';
import { tiers } from '../../../api/COLORPICKING';

const ColorPickerResult = () => {
  // TODO: GA event sender
  const location = useLocation();
  const history = useHistory();
  const [currentRange, setCurrentRange] = useState([{},]);
  const [currentTier, setCurrentTier] = useState('아이언');

  useEffect(() => {
    const difficult_range = tiers.find((item) => item.difficulty === location.state.difficulty)?.range;
    setCurrentRange(difficult_range);
    const below_index = difficult_range.findIndex((element) => location.state.totalTime > element.sec);
    if (below_index === -1) {
      setCurrentTier(difficult_range[difficult_range.length - 1].tier);
    } else if (below_index === 0) {
      setCurrentTier(difficult_range[below_index].tier);
    } else {
      setCurrentTier(difficult_range[below_index-1].tier);
    }
  }, [location, setCurrentTier]);
  useEffect(() => {
    if(!location.state.difficulty) {
      alert("잘못된 경로로 접근하셨습니다.");
      history.push('/colorPickerEasy');
    }
  }, [history, location]);
  const onGoToIntroButtonClick = useCallback(() => {
    history.push(`/colorPicker${location.state?.difficulty}`, 'again');
  }, [history, location.state]);
  return (
    <div>
      <img className='result-img' src="https://images.ktestone.com/resultImages/colorPicker/colorPicker-result-banner.jpeg" alt="colorPicker-result-banner" />
      <div className='picker-result-info-div'>
        <p className='picker-result-info-title'>
          <span className='picker-result-info-highlight'>{location.state.difficulty.toUpperCase()}</span>
          &nbsp;모드를<br />
          <span className='picker-result-info-highlight'>{location.state.totalTime.toFixed(1)}초</span>만에 클리어 했습니다&nbsp;!
        </p>
        <ColorPickerTierTable
          currentTier={currentTier}
          totalTime={location.state.totalTime.toFixed(1)}
          tierRange={currentRange.reverse()}
        />
        <button className='picker-result-go-home-button' onClick={onGoToIntroButtonClick} type='button'>다시 처음부터 하기</button>
      </div>
    </div>
  );
};

export default ColorPickerResult;