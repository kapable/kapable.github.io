import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shortAnswerQuizes } from '../../../api/SHORTANSWERQUIZ';
import Loading from '../../Basic/Loading';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Helmet } from 'react-helmet-async';
import { _eventSenderGA } from '../../../tools/tools';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import { Progress } from 'antd';

const ShortAnswerQuiz = ({ title }) => {
  const navigate = useNavigate();
  const [currentTest] = useState(
    shortAnswerQuizes.find((test) => test.info.mainUrl === title)
  );
  const [mode, setMode] = useState('intro');
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    if (isLoading) {
      let timeout = setTimeout(() => {
        navigate(`/${title}/result/`, {
          state: {
            true: true,
          },
        });
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, navigate, title]);

  const _onStartButtonClick = useCallback(() => {
    setMode('quiz');
  }, []);

  const _onShareButtonClick = useCallback(() => {
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'intro page');
    alert('링크가 복사됐어요!');
  }, []);

  const _onMainButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Back-to-main Button', 'intro page');
    navigate(`/kapable.github.io/${currentTest.info.lang || 'Kor'}`);
  }, [currentTest.info.lang, navigate]);

  const _onSubmitButtonClick = useCallback(() => {
    if (userAnswer === currentTest.questions[currentQuestionNumber].answer) {
      setUserScore(userScore + 1);
      alert('정답입니다!');
    } else {
      alert('오답입니다!');
    }
    if (currentTest.questions?.length - 1 === currentQuestionNumber) {
      setIsLoading(true);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setUserAnswer('');
  }, [currentQuestionNumber, userAnswer, userScore, currentTest.questions]);

  if (mode === 'intro') {
    return (
      <div className='intro container'>
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>{currentTest.info.mainTitle}-케이테스트</title>
          <meta
            name='title'
            content={
              currentTest.info.mainTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
          />
          <meta
            name='description'
            content={
              currentTest.info.subTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
            data-react-helmet='true'
          />
          <link
            rel='main-url'
            href={`https://ktestone.com/${currentTest.info.mainUrl}/`}
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content={`https://ktestone.com/${currentTest.info.mainUrl}/`}
          />
          <meta
            property='og:title'
            content={
              currentTest.info.mainTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
          />
          <meta
            property='og:description'
            content={
              currentTest.info.subTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
          />
          <meta property='og:image' content={currentTest.info.thumbImage} />
          <meta property='og:image:alt' content={currentTest.info.mainTitle} />

          {/* <!-- Twitter --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content={`https://ktestone.com/${currentTest.info.mainUrl}/`}
          />
          <meta
            property='twitter:title'
            content={
              currentTest.info.mainTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
          />
          <meta
            property='twitter:description'
            content={
              currentTest.info.subTitle + '- 케이테스트 | MBTI 테스트 검사'
            }
          />
          <meta
            property='twitter:image'
            content={currentTest.info.thumbImage}
          />
          <meta
            property='twitter:image:alt'
            content={currentTest.info.mainTitle}
          />
        </Helmet>
        <div style={{ cursor: 'pointer' }}>
          <img
            loading='lazy'
            className='intro-main-img'
            onClick={_onStartButtonClick}
            src={currentTest.info.mainImage}
            alt={currentTest.info.mainTitle}
          />
        </div>
        <AdsenseAdvertiser
          client={`ca-pub-2382342018701919`}
          slot={'9210802615'}
          format='auto'
          responsive='true'
          style={{ display: 'block' }}
        />
        <div className='test-intro-with-friend'>
          <CopyToClipboard
            text={`https://ktestone.com/${currentTest.info.mainUrl}/`}
          >
            <img
              loading='lazy'
              src={COPYBTN}
              className='test-intro-with-friend-img'
              onClick={_onShareButtonClick}
              alt='테스트 링크 복사'
            />
          </CopyToClipboard>
        </div>
        <div className='test-intro-to-main'>
          <img
            loading='lazy'
            className='test-intro-to-main-img'
            src={BACKBTN}
            onClick={_onMainButtonClick}
            alt='다른 테스트 하러 뒤로가기'
          />
        </div>
      </div>
    );
  } else if (mode === 'quiz') {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className='option-btn-div' style={{ marginTop: '3rem' }}>
          <div className='quiz-question-div'>
            <img
              src={currentTest.questions[currentQuestionNumber].image}
              alt='퀴즈 이미지'
            />
          </div>
          <div className='quiz-question-input-div'>
            <input
              type='text'
              onChange={(e) => setUserAnswer(e.target.value)}
              value={userAnswer}
            />
          </div>
          <div className='quiz-question-submit-div'>
            <button onClick={_onSubmitButtonClick}>제출</button>
          </div>
          <>
            <p className='picker-progress-text'>{`${currentQuestionNumber + 1} / ${currentTest.questions?.length}`}</p>
            <Progress
              className='picker-progress'
              percent={
                (currentQuestionNumber / currentTest.questions?.length) * 100
              }
              showInfo={false}
            />
          </>
        </div>
      );
    }
  }
};

export default ShortAnswerQuiz;
