import React, { useCallback, useEffect, useState } from 'react';
import { dadJokes } from '../../../api/DADJOKE';
import Loading from '../../Basic/Loading';
import { Helmet } from 'react-helmet-async';
import DadJokeIntro from './DadJokeIntro';
import { useNavigate } from 'react-router-dom';

const DadJoke = ({ testId }) => {
  const navigate = useNavigate();
  const [currentTest] = useState(dadJokes.find((test) => test.id === testId));
  const [isRolling, setIsRolling] = useState(true);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * currentTest.questions.length)
  );
  const [finalQuestion, setFinalQuestion] = useState('');
  const [isLoading, setIsLoding] = useState(false);
  const [mode, setMode] = useState('intro');

  useEffect(() => {
    if (isRolling) {
      setInterval(() => {
        setRandomNumber(
          Math.floor(Math.random() * currentTest.questions.length)
        );
      }, 50);
    }
  }, [isRolling, currentTest.questions.length]);

  useEffect(() => {
    if (isLoading) {
      let timeOut = setTimeout(() => {
        navigate(`/${currentTest.title}/answers/`);
        return () => {
          clearTimeout(timeOut);
        };
      }, 2200);
    }
  }, [isLoading, currentTest.title, navigate, testId]);

  const onStopButtonClick = useCallback(() => {
    if (isRolling) {
      setIsRolling(false);
      setFinalQuestion(currentTest.questions[randomNumber]);
    } else {
      setIsRolling(true);
      setFinalQuestion('');
    }
  }, [isRolling, currentTest.questions, randomNumber]);

  const onResultButtonClick = useCallback(() => {
    setIsLoding(true);
  }, []);

  const metaTagRenderer = () => {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>아재 개그 맞추기 게임 테스트 - 케이테스트</title>
        <meta
          name='title'
          content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}
        />
        <meta
          name='description'
          content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`}
          data-react-helmet='true'
        />
        <link
          rel='main-url'
          href={`https://ktestone.com/${currentTest.title}/`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://ktestone.com/${currentTest.title}/`}
        />
        <meta
          property='og:title'
          content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}
        />
        <meta
          property='og:description'
          content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`}
        />
        <meta
          property='og:image'
          content={`https://images.ktestone.com/main-thumbnail/${currentTest.title}-thumb.png`}
        />
        <meta
          property='og:image:alt'
          content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://ktestone.com/${currentTest.title}/`}
        />
        <meta
          property='twitter:title'
          content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}
        />
        <meta
          property='twitter:description'
          content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`}
        />
        <meta
          property='twitter:image'
          content={`https://images.ktestone.com/main-thumbnail/${currentTest.title}-thumb.png`}
        />
        <meta
          property='twitter:image:alt'
          content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}
        />
      </Helmet>
    );
  };

  if (mode === 'intro') {
    return <DadJokeIntro setMode={setMode} currentTest={currentTest} />;
  } else if (mode === 'quiz') {
    if (isLoading) {
      return (
        <div>
          <img
            src='https://images.ktestone.com/meta/dadJoke/dadJoke-upper-banner.jpeg'
            alt='dadJoke-upper-banner'
            className='result-img'
          />
          <Loading />
        </div>
      );
    } else {
      return (
        <div style={{ alignItems: 'center' }}>
          {metaTagRenderer()}
          <div>
            <img
              src='https://images.ktestone.com/meta/dadJoke/dadJoke-upper-banner.jpeg'
              alt='dadJoke-upper-banner'
              className='result-img'
            />
          </div>
          <div
            style={{
              margin: '4rem 0',
              fontSize: '2rem',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            {isRolling ? currentTest.questions[randomNumber] : finalQuestion}
          </div>
          {isRolling ? (
            <div onClick={onStopButtonClick}>
              <img
                style={{ cursor: 'pointer', width: '15rem' }}
                src='https://images.ktestone.com/meta/dadJoke/dadJoke-stop-button.jpg'
                alt='dadJoke-stop-button'
                className='result-img'
              />
            </div>
          ) : (
            <div onClick={onStopButtonClick}>
              <img
                style={{ cursor: 'pointer', width: '15rem' }}
                src='https://images.ktestone.com/meta/dadJoke/dadJoke-redo-button.jpg'
                alt='dadJoke-redo-button'
                className='result-img'
              />
            </div>
          )}
          {isRolling ? null : (
            <div onClick={onResultButtonClick}>
              <img
                style={{ cursor: 'pointer', margin: '2rem 0', width: '15rem' }}
                src='https://images.ktestone.com/meta/dadJoke/dadJoke-go-to-answer-button.jpg'
                alt='dadJoke-go-to-answer-button'
                className='result-img'
              />
            </div>
          )}
        </div>
      );
    }
  }
};

export default DadJoke;
