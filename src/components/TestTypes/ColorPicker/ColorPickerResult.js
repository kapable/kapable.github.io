import React, { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ColorPickerResult = () => {
  const location = useLocation();
  const history = useHistory();
  useState(() => {
    if(!location.state.difficulty) {
      alert("잘못된 경로로 접근하셨습니다.");
      history.push('/colorPicker');
    }
  }, [location]);
  const onGoToIntroButtonClick = useCallback(() => {
    history.push('/colorPicker');
  }, [history]);
  return (
    // TODO: Design
    <div>
      <img className='result-img' src="https://images.ktestone.com/resultImages/colorPicker/colorPicker-result-banner.jpeg" alt="colorPicker-result-banner" />
      <div className='picker-result-info-div'>
        <p className='picker-result-info-title'>
          <span className='picker-result-info-highlight'>{location.state.difficulty.toUpperCase()}</span>
          &nbsp;모드를<br />
          <span className='picker-result-info-highlight'>{location.state.totalTime.toFixed(1)}초</span>만에 클리어 했습니다&nbsp;!
        </p>
        <button className='picker-result-go-home-button' onClick={onGoToIntroButtonClick} type='button'>다시 처음부터 하기</button>
      </div>
    </div>
  );
};

export default ColorPickerResult;