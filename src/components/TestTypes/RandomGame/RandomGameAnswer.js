import React, { useCallback, useEffect, useState } from 'react';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import { randomGames } from '../../../api/RANDOMGAME';
import ShareGroup from '../../Basic/ShareGroup';
import CopyToClipboard from 'react-copy-to-clipboard';
import { _eventSenderGA } from '../../../tools/tools';
import { RedoOutlined } from '@ant-design/icons';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import OtherTestBannerRenderer from '../../Sub/OtherTestBannerRenderer';
import { useNavigate } from 'react-router-dom';

const RandomGameAnswer = ({ testTitle }) => {
  const navigate = useNavigate();
  const [currentTest] = useState(
    randomGames.find((test) => test.title === testTitle)
  );
  const [answerImages, setAnswerImages] = useState(currentTest.answers);

  useEffect(() => {
    if (currentTest) {
      return setAnswerImages(currentTest.answers);
    }
    alert('오류가 발생하여 처음으로 돌아갑니다!');
    navigate(currentTest.title);
  }, [currentTest, navigate]);

  const _onShareButtonClick = useCallback(() => {
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'answer page');
    alert('링크가 복사됐어요!');
  }, []);

  const _onBackToStartButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Re-test Button', 'answer page');
    navigate(`/${currentTest.title}/`);
  }, [navigate, currentTest.title]);

  const _onBackToMainButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Back-to-main Button', 'answer page');
    navigate('/');
  }, [navigate]);

  return (
    <div className='result'>
      <div>
        <img
          src={`https://images.ktestone.com/meta/randomGames/${currentTest.category}/${currentTest.title}-upper-banner.jpg`}
          alt='randomGame-upper-banner'
          className='result-img'
        />
      </div>
      {answerImages.map((imageLink, idx) => (
        <img
          className='result-img'
          src={imageLink}
          alt={`randomGame-${idx}`}
          key={`randomGame-${idx}`}
        />
      ))}
      <div className='share'>
        <h5 className='share-title'>친구에게 공유하기</h5>
        <ShareGroup
          link={`https://ktestone.com/kapable.github.io/${currentTest.title}/`}
          testTitle={currentTest.title}
        />
        <div className='share'>
          <CopyToClipboard
            text={`https://ktestone.com/kapable.github.io/${currentTest.title}/`}
          >
            <img
              loading='lazy'
              src={COPYBTN}
              onClick={_onShareButtonClick}
              className='share-btn-img'
              alt='링크 복사'
            />
          </CopyToClipboard>
        </div>
        <div className='re-test-btn'>
          <img
            loading='lazy'
            src={AGAINBTN}
            className='re-test-btn-img'
            onClick={_onBackToStartButtonClick}
            alt='테스트 다시하기'
          />
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }} className='back-to-main'>
        <img
          loading='lazy'
          src={TOHOMEBTN}
          onClick={_onBackToMainButtonClick}
          className='back-to-main-btn-img'
          alt='다른 테스트 하러가기'
        />
      </div>
      <div
        className='kakao-plusfriend-btn-container'
        onClick={_onBackToStartButtonClick}
        style={{
          cursor: 'pointer',
          padding: '0.5rem',
          backgroundColor: 'white',
          fontSize: '1rem',
          borderRadius: '1rem',
          border: '1px solid black',
          boxShadow: '3px 3px 0px 2px rgba(230,33,130,1)',
        }}
      >
        <RedoOutlined style={{ color: '#E62182', fontSize: '1.1rem' }} />
        &nbsp;
        <span style={{ color: 'black', margin: 0, fontWeight: 'bold' }}>
          게임
        </span>
        <br />
        <p style={{ color: 'black', margin: 0, fontWeight: 'bold' }}>
          다시하기
        </p>
      </div>
      <GoToHomeBtn page={`${currentTest.title} answer`} />
      <OtherTestBannerRenderer lang='Kor' mainUrl={testTitle} />
    </div>
  );
};

export default RandomGameAnswer;
