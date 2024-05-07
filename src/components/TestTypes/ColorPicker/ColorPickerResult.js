import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ColorPickerTierTable from './ColorPickerTierTable';
import { tiers } from '../../../api/COLORPICKING';
import { _eventSenderGA } from '../../../tools/tools';
import { Helmet } from 'react-helmet';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';
import OtherTestBannerRenderer from '../../SubComponents/OtherTestBannerRenderer';

const ColorPickerResult = () => {
  const location = useLocation();
  const history = useHistory();
  const [currentRange, setCurrentRange] = useState([{},]);
  const [currentTier, setCurrentTier] = useState('아이언');
  const [currentLang] = useState(location.state?.lang);
  const [langComments, setLangComments] = useState(['* 아래 기록을 캡쳐해서 공유해보세요!','케이테스트', '색', '감', '테', '스', '트', '', '모드를', '초', '만에 클리어했습니다!', '다시 처음부터 하기']);

  useEffect(() => {
    const difficult_range = tiers.find((item) => item.difficulty === location.state.difficulty)?.range;
    setCurrentRange(difficult_range);
    const below_index = difficult_range.findIndex((element) => location.state.totalTime > element.sec);
    if (below_index === -1) {
      setCurrentTier(difficult_range[difficult_range.length - 1].tier);
    } else if (below_index === 0) {
      setCurrentTier(difficult_range[below_index].tier);
    } else {
      setCurrentTier(difficult_range[below_index-1].tier);
    }
  }, [location, setCurrentTier]);
  useEffect(() => {
    if(!location.state.difficulty) {
      alert("잘못된 경로로 접근하셨습니다.");
      history.push('/colorPickerEasy');
    }
  }, [history, location]);
  useEffect(() => {
    if(currentLang === 'Eng') {
      setLangComments(['* Capture the record below and share it!', 'KTEST', '', 'Color', 'Sensory', 'Test', '', 'You cleared the','mode in','','seconds!', 'Start Again']);
    }
  }, [currentLang]);

  const onGoToIntroButtonClick = useCallback(() => {
    _eventSenderGA("Paging", "Click Re-test Button", "colorPicker result page");
    history.push(`/colorPicker${location.state?.difficulty}`, 'again');
  }, [history, location.state]);

  const metaTagRenderer = (lang) => {
    if(lang === 'Kor') {
      return (
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>색감 테스트 게임 | 당신의 티어는? - 케이테스트 | 타임어택</title>
          <meta name="title" content={`색감 테스트 게임 - 케이테스트 | 타임어택`}/>
          <meta name="description" content={`당신의 티어는? | 타임어택`} data-react-helmet="true"/>
          <link rel="main-url" href={`https://ktestone.com/colorPickerEasy/`}/>
  
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`https://ktestone.com/colorPickerEasy/`}/>
          <meta property="og:title" content={`색감 테스트 게임 - 케이테스트 | 타임어택`}/>
          <meta property="og:description" content={`당신의 티어는? | 타임어택`}/>
          <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-Easy-thumb.png`}/>
          <meta property="og:image:alt" content={`색감 테스트 게임 - 케이테스트 | 타임어택`} />
  
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={`https://ktestone.com/colorPickerEasy/`}/>
          <meta property="twitter:title" content={`색감 테스트 게임 - 케이테스트 | 타임어택`}/>
          <meta property="twitter:description" content={`당신의 티어는? | 타임어택`}/>
          <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-Easy-thumb.png`}/>
          <meta property="twitter:image:alt" content={`색감 테스트 게임 - 케이테스트 | 타임어택`} />
      </Helmet>
      )
    } else if (lang === 'Eng') {
      return (
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Color Sensory Test Game | What is your Tier? - KTEST | Time Attack</title>
            <meta name="title" content={`Color Sensory Test Game  - KTEST | Time Attack`}/>
            <meta name="description" content={`What is your Tier? | Time Attack`} data-react-helmet="true"/>
            <link rel="main-url" href={`https://ktestone.com/colorPickerEasyEng/`}/>
  
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://ktestone.com/colorPickerEasyEng/`}/>
            <meta property="og:title" content={`Color Sensory Test Game  -  KTEST | Time Attack`}/>
            <meta property="og:description" content={`What is your Tier? | Time Attack`}/>
            <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-EasyEng-thumb.png`}/>
            <meta property="og:image:alt" content={`Color Sensory Test Game  -  KTEST | Time Attack`} />
  
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://ktestone.com/colorPickerEasyEng/`}/>
            <meta property="twitter:title" content={`Color Sensory Test Game  - KTEST | Time Attack`}/>
            <meta property="twitter:description" content={`What is your Tier? | Time Attack`}/>
            <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-EasyEng-thumb.png`}/>
            <meta property="twitter:image:alt" content={`Color Sensory Test Game  - KTEST | Time Attack`} />
        </Helmet>
      )
    }
  }

  return (
    <div>
      {metaTagRenderer(currentLang)}
      <p style={{color:"#E62383", fontWeight: 'bold', fontStyle: 'italic'}}>{langComments[0]}</p>
      <img className='result-img' src={`https://images.ktestone.com/resultImages/colorPicker/colorPicker-${location.state.difficulty}-result-banner.jpeg`} alt="colorPicker-result-banner" />
      <div className='picker-result-info-div'>
        <p className='picker-result-info-title'>
            <span style={{color: "#E62383"}}>{langComments[1]}</span>&nbsp;
            <span style={{color: '#e52443', fontSize: '2rem'}}>{langComments[2]}</span>&nbsp;
            <span style={{color: '#e59a23', fontSize: '2rem'}}>{langComments[3]}</span>&nbsp;
            <span style={{color: '#27c6e3', fontSize: '2rem'}}>{langComments[4]}</span>&nbsp;
            <span style={{color: '#6F24E5', fontSize: '2rem'}}>{langComments[5]}</span>&nbsp;
            <span style={{color: '#E62383', fontSize: '2rem'}}>{langComments[6]}</span>&nbsp;
        <br />
          {langComments[7]}&nbsp;
          <span className='picker-result-info-highlight'>{location.state.difficulty.replace(currentLang,'').toUpperCase()}</span>
          &nbsp;{langComments[8]}<br />
          <span className='picker-result-info-highlight'>{location.state.totalTime.toFixed(1)}{langComments[9]}</span>{langComments[10]}
        </p>
        <ColorPickerTierTable
          currentTier={currentTier}
          totalTime={location.state.totalTime.toFixed(1)}
          tierRange={currentRange.reverse()}
          lang={currentLang}
        />
        <button className='picker-result-go-home-button' onClick={onGoToIntroButtonClick} type='button'>{langComments[11]}</button>
      </div>
      <OtherTestBannerRenderer lang='Kor' mainUrl={`colorPicker${location.state.difficulty}`} />
      <GoToHomeBtn page="colorPicker result"/>
    </div>
  );
};

export default ColorPickerResult;