import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ColorPickerTierTable from './ColorPickerTierTable';

const tiers = [
  {
    difficulty: 'easy',
    range: [
      {
        sec: 50,
        tier: '아이언',
      },
      {
        sec: 40,
        tier: '브론즈',
      },
      {
        sec: 30,
        tier: '실버',
      },
      {
        sec: 20,
        tier: '골드',
      },
      {
        sec: 10,
        tier: '플래티넘',
      },
      {
        sec: 9,
        tier: '에메랄드',
      },
      {
        sec: 8,
        tier: '다이아몬드',
      },
      {
        sec: 7,
        tier: '마스터',
      },
      {
        sec: 6,
        tier: '그랜드 마스터',
      },
      {
        sec: 5,
        tier: '챌린저',
      },
      {
        sec: 0.1,
        tier: '페이커',
      },
    ],
  },
  {
    difficulty: 'medium',
    range: [
      {
        sec: 50,
        tier: '아이언',
      },
      {
        sec: 40,
        tier: '브론즈',
      },
      {
        sec: 30,
        tier: '실버',
      },
      {
        sec: 20,
        tier: '골드',
      },
      {
        sec: 10,
        tier: '플래티넘',
      },
      {
        sec: 9,
        tier: '에메랄드',
      },
      {
        sec: 8,
        tier: '다이아몬드',
      },
      {
        sec: 7,
        tier: '마스터',
      },
      {
        sec: 6,
        tier: '그랜드 마스터',
      },
      {
        sec: 5,
        tier: '챌린저',
      },
      {
        sec: 0.1,
        tier: '페이커',
      },
    ],
  },
  {
    difficulty: 'hard',
    range: [
      {
        sec: 50,
        tier: '아이언',
      },
      {
        sec: 40,
        tier: '브론즈',
      },
      {
        sec: 30,
        tier: '실버',
      },
      {
        sec: 20,
        tier: '골드',
      },
      {
        sec: 10,
        tier: '플래티넘',
      },
      {
        sec: 9,
        tier: '에메랄드',
      },
      {
        sec: 8,
        tier: '다이아몬드',
      },
      {
        sec: 7,
        tier: '마스터',
      },
      {
        sec: 6,
        tier: '그랜드 마스터',
      },
      {
        sec: 5,
        tier: '챌린저',
      },
      {
        sec: 0.1,
        tier: '페이커',
      },
    ],
  },
];

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
      history.push('/colorPicker');
    }
  }, [history, location]);
  const onGoToIntroButtonClick = useCallback(() => {
    history.push('/colorPicker', 'again');
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