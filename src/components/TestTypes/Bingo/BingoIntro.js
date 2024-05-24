import React, { useCallback, useEffect, useRef } from 'react';
import { _eventSenderGA } from '../../../tools/tools';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import CopyToClipboard from 'react-copy-to-clipboard';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import STARTBTN from '../../../api/DefaultImg/intro-start-button.png';
import STARTBTNENG from '../../../api/DefaultImg/intro-start-button-Eng.png';
import { useNavigate } from 'react-router';

const BingoIntro = ({
  title,
  setMode,
  lang,
  displayTitle,
  displaySubtitle,
}) => {
  const navigator = useNavigate();
  const mainImgRef = useRef(null);
  const onStartButtonClick = useCallback(() => {
    _eventSenderGA('Paging', `Click ${title} Start-test Button`, 'intro page');
    setMode('start');
  }, [title, setMode]);
  const _onMainButtonClick = () => {
    _eventSenderGA('Paging', 'Click Back-to-main Button', 'intro page');
    navigator(`/${lang}`);
  };

  const _onShareButtonClick = () => {
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'intro page');
    alert('링크가 복사됐어요!');
  };
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div>
      <div style={{ lineHeight: '0.6rem', marginTop: '2.5rem' }}>
        <h1>{displayTitle}</h1>
        <h4 style={{ color: 'grey' }}>{displaySubtitle}</h4>
      </div>
      <img
        ref={mainImgRef}
        src={`https://images.ktestone.com/introImages/${title}-intro.jpg`}
        alt='bingo1-intro'
        className='result-img'
      />
      <AdsenseAdvertiser
        client={`ca-pub-2382342018701919`}
        slot={'9210802615'}
        format='auto'
        responsive='true'
        style={{ display: 'block' }}
      />
      <div>
        <p
          style={{
            whiteSpace: 'pre-line',
            lineHeight: '1.rem',
            fontWeight: 'bold',
            margin: '2.5rem auto',
            color: 'grey',
          }}
        >
          여러분의 이상형은 어떻게 되나요 ? <br />
          <br />
          이상형을 체크 후 빙고판을 완성하고
          <br />
          <br />
          친구들과 함께 공유해보아요 ✨
        </p>
      </div>
      <img
        style={{ width: '100%', maxWidth: '20rem', cursor: 'pointer' }}
        src={lang === 'Kor' ? STARTBTN : STARTBTNENG}
        alt={`${title}-start-button`}
        onClick={onStartButtonClick}
      />
      <div className='test-intro-with-friend'>
        <CopyToClipboard text={`https://ktestone.com/${title}/`}>
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
      <GoToHomeBtn page={`${title} intro`} />
    </div>
  );
};

export default BingoIntro;
