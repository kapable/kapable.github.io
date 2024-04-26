import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ColorPickerTierTable from './ColorPickerTierTable';
import { tiers } from '../../../api/COLORPICKING';
import { _eventSenderGA } from '../../../tools/tools';

const ColorPickerResult = () => {
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
    _eventSenderGA("Paging", "Click Re-test Button", "colorPicker result page");
    history.push(`/colorPicker${location.state?.difficulty}`, 'again');
  }, [history, location.state]);
  return (
    <div>
      <img className='result-img' src="https://images.ktestone.com/resultImages/colorPicker/colorPicker-result-banner.jpeg" alt="colorPicker-result-banner" />
      <div className='picker-result-info-div'>
        <p className='picker-result-info-title'>
            <span style={{color: "#E62383"}}>케이테스트</span>&nbsp;
            <span style={{color: '#e2b0ff', fontSize: '2rem'}}>색</span>
            <span style={{color: '#f0e0b0', fontSize: '2rem'}}>감</span>&nbsp;
            <span style={{color: '#ffa9d0', fontSize: '2rem'}}>테</span>
            <span style={{color: '#94b7e7', fontSize: '2rem'}}>스</span>
            <span style={{color: '#ff8585', fontSize: '2rem'}}>트</span>
        <br />
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