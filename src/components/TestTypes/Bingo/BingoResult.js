import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BingoTable from './BingoTable';
import OtherTestBannerRenderer from '../../Sub/OtherTestBannerRenderer';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';

const BingoResult = () => {
  const mainImgRef = useRef(null);
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    if (!location?.state) {
      alert('잘못된 경로로 들어오셨습니다!');
      navigation('/');
    }
  }, [location, navigation]);
  let { title, size, contents, selectedNumArray } = location?.state;
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  const onGoToIntroButtonClick = () => {
    navigation(`/${title}/`);
  };
  return (
    <div>
      <img
        ref={mainImgRef}
        src={`https://images.ktestone.com/meta/bingo/${title}-result-upper-banner.jpeg`}
        alt='bingo1-intro'
        className='result-img'
      />
      <BingoTable
        title={title}
        size={size}
        contents={contents}
        resultSelectedNumArray={selectedNumArray}
      />
      <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
        * 위 결과를 캡쳐해서{' '}
        <span style={{ fontSize: '0.9rem', color: '#E62383' }}>
          남친 / 여친 / 남사친 / 여사친
        </span>
        과 같이 나눠보세요!
      </p>
      <button
        className='picker-result-go-home-button'
        onClick={onGoToIntroButtonClick}
        type='button'
      >
        처음부터 다시하기
      </button>
      <OtherTestBannerRenderer lang='Kor' mainUrl={title} />
      <GoToHomeBtn page={`${title} result`} />
    </div>
  );
};

export default BingoResult;
