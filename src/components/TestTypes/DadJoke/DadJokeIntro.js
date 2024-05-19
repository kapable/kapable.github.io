import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DadJokeIntro = ({ setMode, currentTest }) => {
  const mainImgRef = useRef(null);
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div className='loveCharacter-intro-images-container' ref={mainImgRef}>
      <img
        src='https://images.ktestone.com/meta/dadJoke/dadJoke-intro-upper-banner.jpg'
        alt='dadJoke-upper-banner'
        style={{ width: '100%', maxWidth: '456px', margin: '0 auto' }}
      />
      <img
        onClick={() => setMode('quiz')}
        loading='lazy'
        className='loveCharacter-intro-left-img'
        src={`https://images.ktestone.com/meta/dadJoke/dadJoke-game-start-button.jpg`}
        alt={`left`}
      />
      <Link to={`/${currentTest.title}/answers/`}>
        <img
          loading='lazy'
          className='loveCharacter-intro-right-img'
          src={`https://images.ktestone.com/meta/dadJoke/dadJoke-goto-answer-button.jpg`}
          alt={`right`}
        />
      </Link>
    </div>
  );
};

export default DadJokeIntro;
