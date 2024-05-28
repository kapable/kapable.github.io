import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';

const DadJokeIntro = ({ setMode, currentTest }) => {
  const mainImgRef = useRef(null);
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div className='loveCharacter-intro-images-container' ref={mainImgRef}>
      <div style={{ lineHeight: '0.6rem', marginTop: '2.5rem' }}>
        <h1>{currentTest.metaTitle}</h1>
        <h4 style={{ color: 'grey' }}>케이테스트 x 술자리 게임</h4>
      </div>
      <img
        src={`https://images.ktestone.com/meta/randomGames/${currentTest.category}/${currentTest.title}-intro-upper-banner.jpg`}
        alt='dadJoke-upper-banner'
        style={{ width: '100%', maxWidth: '456px', margin: '0 auto' }}
      />
      <AdsenseAdvertiser
        client={`ca-pub-2382342018701919`}
        slot={'1017740958'}
        format='auto'
        responsive='true'
        style={{ display: 'block' }}
      />
      <p
        style={{
          whiteSpace: 'pre-line',
          lineHeight: '1.rem',
          fontWeight: 'bold',
          margin: '2.5rem auto',
          color: 'grey',
        }}
      >
        {currentTest.metaDesc}
      </p>
      <img
        onClick={() => setMode('quiz')}
        loading='lazy'
        className='loveCharacter-intro-left-img'
        src={`https://images.ktestone.com/meta/randomGames/game-start-button.jpg`}
        alt={`left`}
      />
      <Link to={`/${currentTest.title}/answers/`}>
        <img
          loading='lazy'
          className='loveCharacter-intro-right-img'
          src={`https://images.ktestone.com/meta/randomGames/goto-answer-button.jpg`}
          alt={`right`}
        />
      </Link>
      <GoToHomeBtn page={`alcoholGames intro`} />
    </div>
  );
};

export default DadJokeIntro;
