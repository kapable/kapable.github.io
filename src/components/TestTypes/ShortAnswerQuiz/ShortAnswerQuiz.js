import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shortAnswerQuizes } from '../../../api/SHORTANSWERQUIZ';
import Loading from '../../Basic/Loading';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Helmet } from 'react-helmet-async';
import { _eventSenderGA, shuffleArray } from '../../../tools/tools';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import { Input, Progress } from 'antd';
import STARTBTN from '../../../api/DefaultImg/intro-start-button.png';
import STARTBTNENG from '../../../api/DefaultImg/intro-start-button-Eng.png';
import { UserOutlined } from '@ant-design/icons';

const buttonStyle = {
  backgroundColor: '#E62182',
  color: 'white',
  borderRadius: '0.5rem',
  borderColor: '#E62182',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const ShortAnswerQuiz = ({ title, length }) => {
  const navigate = useNavigate();
  const [currentTest] = useState(
    shortAnswerQuizes.find((test) => test.info.mainUrl === title)
  );
  const [currentTestOptions] = useState(
    shuffleArray(currentTest.questions).slice(0, length)
  );
  const [mode, setMode] = useState('intro');
  const [checkAnswerMode, setCheckAnswerMode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    if (isLoading) {
      let timeout = setTimeout(() => {
        navigate(`/${title}/result/`, {
          state: {
            userScore,
            testInfo: currentTest?.info,
          },
        });
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [
    isLoading,
    navigate,
    title,
    userScore,
    currentTest.info,
    currentTest?.info?.length,
  ]);

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
    if (userAnswer === currentTestOptions[currentQuestionNumber].answer) {
      setUserScore(userScore + 1);
    }
    if (currentTestOptions?.length - 1 === currentQuestionNumber) {
      setIsLoading(true);
    }
    setCheckAnswerMode(true);
  }, [currentQuestionNumber, userAnswer, userScore, currentTestOptions]);

  const _onCheckAnswerButtonClick = useCallback(() => {
    setCheckAnswerMode(false);
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setUserAnswer('');
  }, [currentQuestionNumber]);

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
        <div
          //   ref={this.mainImgRef}
          style={{ lineHeight: '0.6rem', marginTop: '2.5rem' }}
        >
          <h2>{currentTest.info.mainTitle}</h2>
          <h4
            style={{
              color: 'grey',
              whiteSpace: 'pre-line',
              lineHeight: '1.5rem',
            }}
          >
            {currentTest.info.subTitle}
          </h4>
        </div>
        <div>
          <img
            loading='lazy'
            className='intro-main-img'
            src={currentTest.info.mainImage}
            alt={currentTest.info.mainTitle}
          />
        </div>
        <p
          style={{
            whiteSpace: 'pre-line',
            lineHeight: '1.5rem',
            fontWeight: 'bold',
            margin: '2.5rem auto',
            color: 'grey',
          }}
        >
          {currentTest.info?.description
            ? currentTest.info?.description
            : `${currentTest.info?.subTitle}\n${this.state.lang === 'Kor' ? '지금 케이테스트를 통해 살펴보세요✨' : 'Find it NOW with the TEST✨'}`}
        </p>
        <AdsenseAdvertiser
          client={`ca-pub-2382342018701919`}
          slot={'9210802615'}
          format='auto'
          responsive='true'
          style={{ display: 'block' }}
        />
        <img
          style={{ width: '100%', maxWidth: '20rem', cursor: 'pointer' }}
          src={currentTest.info.lang === 'Kor' ? STARTBTN : STARTBTNENG}
          alt={`${currentTest.info.mainTitle}-start-button`}
          onClick={_onStartButtonClick}
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
              src={currentTestOptions[currentQuestionNumber].image}
              alt='퀴즈 이미지'
            />
          </div>
          {checkAnswerMode ? (
            <>
              <div className='quiz-question-input-div'>
                {currentTestOptions[currentQuestionNumber].answer ===
                userAnswer ? (
                  <p style={{ color: 'green' }}>정답</p>
                ) : (
                  <p style={{ color: 'red' }}>오답</p>
                )}
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {currentTestOptions[currentQuestionNumber].answer}
                </p>
              </div>
              <div className='quiz-question-submit-div'>
                <button style={buttonStyle} onClick={_onCheckAnswerButtonClick}>
                  다음
                </button>
              </div>
            </>
          ) : (
            <>
              <div
                className='quiz-question-input-div'
                style={{ width: '20rem', margin: '1rem auto' }}
              >
                <Input
                  onChange={(e) => setUserAnswer(e.target.value)}
                  value={userAnswer}
                  prefix={
                    <UserOutlined
                      style={{
                        color: 'rgba(0,0,0,.25)',
                      }}
                    />
                  }
                />
              </div>
              <div className='quiz-question-submit-div'>
                <button style={buttonStyle} onClick={_onSubmitButtonClick}>
                  제출
                </button>
              </div>
            </>
          )}

          <>
            <p className='picker-progress-text'>{`${currentQuestionNumber + 1} / ${currentTestOptions?.length}`}</p>
            <Progress
              className='picker-progress'
              percent={
                (currentQuestionNumber / currentTestOptions?.length) * 100
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
