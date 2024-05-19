import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BingoTable from './BingoTable';
import OtherTestBannerRenderer from '../../Sub/OtherTestBannerRenderer';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';

const BingoResult = () => {
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    if (!location?.state) {
      alert('잘못된 경로로 들어오셨습니다!');
      navigation('/');
    }
  }, [location, navigation]);
  let { title, size, contents, selectedNumArray } = location?.state;

  const onGoToIntroButtonClick = () => {
    navigation(`/${title}`);
  };
  return (
    <div>
      <BingoTable
        title={title}
        size={size}
        contents={contents}
        resultSelectedNumArray={selectedNumArray}
      />
      <button
        className='picker-result-go-home-button'
        onClick={onGoToIntroButtonClick}
        type='button'
      >
        처음부터 다시하기
      </button>
      {/* TODO: add snap url */}
      <OtherTestBannerRenderer lang='Kor' mainUrl={title} />
      <GoToHomeBtn page={`${title} result`} />
    </div>
  );
};

export default BingoResult;
