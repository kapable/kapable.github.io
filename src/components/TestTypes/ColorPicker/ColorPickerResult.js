import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ColorPickerTierTable from './ColorPickerTierTable';
import { difficulties, tiers } from '../../../api/COLORPICKING';
import { _eventSenderGA } from '../../../tools/tools';
import TESTS from '../../../api/TESTS';
import AdsenseAdvertiser from '../../SubComponents/AdsenseAdvertiser';
import { Helmet } from 'react-helmet';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';

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

  const otherTestBannerRenderer = (lang) => {
    const current_lang = lang;
    const bottom_test_list = TESTS.filter((item) => (item.info.lang === current_lang));
    const bottom_test_name_list =bottom_test_list.map((li) => li.info.mainUrl);
    const renderingArray = difficulties.filter((item) => item.lang === current_lang);
    return(
        <Fragment>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://ktestone.com/kapable.github.io/maleFemaleChar/`}
                  className="to-ppl-banner-text"
              > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/maleFemaleChar-thumb.png`} className='ppl-banner-img' alt={'maleFemaleChar'} onClick={this._onPPLBannerClick}/> </a>
              <AdsenseAdvertiser
                  client={`ca-pub-2382342018701919`} //5142864985628271
                  slot={"9210802615"} //7281907187
                  format="auto"
                  responsive="true"
                  style={{display:"block"}}
              />
              {renderingArray.map((elem) => {
                if(elem.difficulty !== location.state.difficulty) {
                  return (
                    <Fragment key={`${elem.difficulty}-fragKey`}>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://ktestone.com/kapable.github.io/colorPicker${elem.difficulty}/`}
                          className="to-ppl-banner-text"
                      > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/colorPicker-${elem.difficulty}-thumb.png`} className='ppl-banner-img' alt={'colorPicker'} onClick={() => _eventSenderGA("Paging", "Click Go-another-Test-Banner Button", "result page")}/> </a>
                      <AdsenseAdvertiser
                          client={`ca-pub-2382342018701919`} //5142864985628271
                          slot={"9210802615"} //7281907187
                          format="auto"
                          responsive="true"
                          style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                      />
                  </Fragment>
                  )
                }
                return null;
              })}
              {bottom_test_name_list.map((test) => {
                  return (
                      <Fragment key={test + '-test-key'}>
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://ktestone.com/kapable.github.io/${test}/`}
                              className="to-ppl-banner-text"
                              > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={'another-Test'} onClick={() => _eventSenderGA("Paging", "Click Go-another-Test-Banner Button", "result page")}/> </a>
                              <AdsenseAdvertiser
                                  key={test+'-adsense'}
                                  client={`ca-pub-2382342018701919`} //5142864985628271
                                  slot={"9210802615"} //7281907187
                                  format="auto"
                                  responsive="true"
                                  style={{display:"block"}}
                              />
                      </Fragment>
                  )
              })}
          </Fragment>
      )
  };

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
      {otherTestBannerRenderer(currentLang)}
      <GoToHomeBtn page="colorPicker result"/>
    </div>
  );
};

export default ColorPickerResult;