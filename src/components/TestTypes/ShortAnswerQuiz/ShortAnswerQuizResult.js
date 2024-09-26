import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ShareGroup from '../../Basic/ShareGroup';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import { _eventSenderGA } from '../../../tools/tools';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import './shortAnswerQuiz.css';

const ShortAnswerQuizResult = () => {
  const [otherRenderTests] = useState([
    'pingLove',
    'pingChar',
    'catchTeeniepingQuiz',
    'catchTeeniepingQuiz2',
    'catchTeeniepingQuiz3',
    'catchTeeniepingQuiz4',
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state) {
      alert('잘못된 경로로 들어오셨습니다!');
      navigate('/');
    }
  }, [location, navigate]);

  const { userScore, testInfo } = location?.state || {};

  const _onShareButtonClick = useCallback(() => {
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'intro page');
    alert('링크가 복사됐어요!');
  }, []);
  const _onBackToStartButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Re-test Button', 'result page');
    navigate(`/${testInfo?.mainUrl}/`);
  }, [navigate, testInfo?.mainUrl]);

  const _onBackToMainButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Back-to-main Button', 'result page');
    navigate(`/kapable.github.io/${testInfo?.lang || 'Kor'}`);
  }, [navigate, testInfo?.lang]);
  return (
    <div>
      <div style={{ margin: '5rem' }}>
        <p style={{ fontSize: '1rem' }}>당신의 티니핑 이름 맞추기 점수는</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          <span style={{ color: '#db0253', fontSize: '2rem' }}>
            {userScore}
          </span>
          /{testInfo?.length} 점 입니다.
        </p>
      </div>
      <div className='share'>
        <ShareGroup
          link={`https://ktestone.com/kapable.github.io/${testInfo?.mainUrl}/`}
          testTitle={testInfo?.mainUrl}
        />
        <div className='share'>
          <CopyToClipboard
            text={`https://ktestone.com/kapable.github.io/${testInfo?.mainUrl}/`}
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
      <GoToHomeBtn page={`${testInfo?.mainUrl} result`} />
      {testInfo?.mainUrl.includes('ping') ? (
        <p
          style={{
            color: '#db0253',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            margin: '3rem auto 0',
          }}
        >
          당신의 핑도감은 어떤 핑인가요?
        </p>
      ) : null}

      {otherRenderTests
        ?.filter((item) => item !== testInfo?.mainUrl)
        ?.map((otherTitle) => (
          <a
            key={`${otherTitle}-link`}
            target='_blank'
            rel='noopener noreferrer'
            href={`https://ktestone.com/${otherTitle}/`}
            className='to-ppl-banner-text'
          >
            {' '}
            <img
              loading='lazy'
              src={`https://images.ktestone.com/main-thumbnail/${otherTitle}-thumb.png`}
              className='ppl-banner-img'
              alt={`${otherTitle}-thumb`}
              onClick={() =>
                _eventSenderGA(
                  'Paging',
                  'Click Go-another-Test-Banner Button',
                  'result page'
                )
              }
            />{' '}
          </a>
        ))}
    </div>
  );
};

export default ShortAnswerQuizResult;
