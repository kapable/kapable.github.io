import React, { useEffect, useRef } from 'react';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import STARTBTN from '../../../api/DefaultImg/intro-start-button.png';
import STARTBTNENG from '../../../api/DefaultImg/intro-start-button-Eng.png';

const RandomGameIntro = ({ setMode, currentTest }) => {
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
        src={`https://images.ktestone.com/introImages/${currentTest.title}-intro.jpg`}
        alt='randomGame-upper-banner'
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
        style={{ width: '100%', maxWidth: '20rem', cursor: 'pointer' }}
        src={currentTest.lang === 'Kor' ? STARTBTN : STARTBTNENG}
        alt={`Game-start-button`}
        onClick={() => setMode('quiz')}
      />
      <GoToHomeBtn page={`alcoholGames intro`} />
    </div>
  );
};

export default RandomGameIntro;
