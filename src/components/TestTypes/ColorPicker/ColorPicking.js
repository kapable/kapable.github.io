import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Progress } from 'antd';
import PickerRenderer from './PickerRenderer';
import { _eventSenderGA, reloadPage } from '../../../tools/tools';
import { color_picker_list, difficulties } from '../../../api/COLORPICKING';
import './colorPicker.css';
import { Helmet } from 'react-helmet';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';

const ColorPicking = ({ difficulty, lang }) => {
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
      if(location.state === 'again') {
        reloadPage();
      };
    }, [location])
    useEffect(() => {
      if(!color_picker_list.includes(difficulty)) {
        return history.push('/');
      }
    }, [difficulty, history]);
    const [currentLang] = useState(lang);
    const [langComments, setLangComments] = useState(['* 시작 버튼을 누른 후 3초 뒤에 시작', '* 중간에 틀리면 다시 처음으로 돌아가요', '', '단계']);
    const [mode, setMode] = useState('intro');
    const [contents] = useState(difficulties.find((item) => item.difficulty === difficulty));
    const [currentRound, setCurrentRound] = useState(1);
    const [currentRoundContent, setCurrentRoundContent] = useState(contents?.rounds.find((item) => item.round === currentRound))
    const [isLoading, setIsLoading] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
      if(lang === 'Eng')  {
        setLangComments(['* Press the Start button, start 3 seconds later', '* If you get it wrong in the middle, you go back to the beginning', 'Stage', '']);
      }
    }, [lang]);

    useEffect(() => {
      setCurrentRoundContent(
        contents?.rounds.find((item) => item.round === currentRound)
      )
    }, [contents.rounds, currentRound]);
    
    useEffect(() => { // for totalCount to test result
      let totalInterval;
      if(isReady) {
        totalInterval = setInterval(() => {
          if(isDone) {
            return () => clearInterval(totalInterval);
          } else {
            setTotalTime((prev) => prev + 0.1);
          }
        }, 100);
      }
      return () => clearInterval(totalInterval);
    }, [isReady, isDone, setTotalTime]);

    const metaTagRenderer = (lang, difficulty) => {
      if(lang === 'Kor') {
        return (
          <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>색감 테스트 게임 {difficulty} | 당신의 티어는? - 케이테스트 | 타임어택</title>
            <meta name="title" content={`색감 테스트 게임 ${difficulty} - 케이테스트 | 타임어택`}/>
            <meta name="description" content={`당신의 티어는? | 타임어택`} data-react-helmet="true"/>
            <link rel="main-url" href={`https://ktestone.com/colorPicker${difficulty}/`}/>
  
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
            <meta property="og:title" content={`색감 테스트 게임 ${difficulty} - 케이테스트 | 타임어택`}/>
            <meta property="og:description" content={`당신의 티어는? | 타임어택`}/>
            <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
            <meta property="og:image:alt" content={`색감 테스트 게임 ${difficulty} - 케이테스트 | 타임어택`} />
  
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
            <meta property="twitter:title" content={`색감 테스트 게임 ${difficulty} - 케이테스트 | 타임어택`}/>
            <meta property="twitter:description" content={`당신의 티어는? | 타임어택`}/>
            <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
            <meta property="twitter:image:alt" content={`색감 테스트 게임 ${difficulty} - 케이테스트 | 타임어택`} />
        </Helmet>
        )
      } else if (lang === 'Eng') {
        return (
          <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Color Sensory Test Game {difficulty} | What is your Tier? - KTEST | Time Attack</title>
            <meta name="title" content={`Color Sensory Test Game ${difficulty} - KTEST | Time Attack`}/>
            <meta name="description" content={`What is your Tier? | Time Attack`} data-react-helmet="true"/>
            <link rel="main-url" href={`https://ktestone.com/colorPicker${difficulty}/`}/>
  
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
            <meta property="og:title" content={`Color Sensory Test Game ${difficulty} -  KTEST | Time Attack`}/>
            <meta property="og:description" content={`What is your Tier? | Time Attack`}/>
            <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
            <meta property="og:image:alt" content={`Color Sensory Test Game ${difficulty} -  KTEST | Time Attack`} />
  
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
            <meta property="twitter:title" content={`Color Sensory Test Game ${difficulty} - KTEST | Time Attack`}/>
            <meta property="twitter:description" content={`What is your Tier? | Time Attack`}/>
            <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
            <meta property="twitter:image:alt" content={`Color Sensory Test Game ${difficulty} - KTEST | Time Attack`} />
        </Helmet>
        )
      }
    }

    const onStartButtonClick = () => {
      _eventSenderGA("Paging", `Click colorPicker${difficulty}Start-test Button`, "intro page");
      setMode("start");
    }

    if (mode === 'intro') {
      return (
        <div>
          {metaTagRenderer(currentLang, difficulty)}
            <img
              className='result-img'
              style={{cursor: 'pointer'}}
              src={`https://images.ktestone.com/introImages/colorPicker-${difficulty}-intro.jpeg`} alt="colorPicker-intro"
              onClick={onStartButtonClick}
            />
            <p>{langComments[0]}</p>
            <p>{langComments[1]}</p>
            <GoToHomeBtn page="colorPicker intro"/>
        </div>
      )
    } else if (mode === 'start') {
      return (
        <div className='colorpicker-div' style={{padding: isLoading? '15rem 0' : null}}>
          {metaTagRenderer(currentLang, difficulty)}
          {isLoading || !isReady ? null : (
            <div className='picker-header'>
                <h1>{langComments[2]} {currentRoundContent.round} {langComments[3]} </h1>
            </div>
          )}
          <PickerRenderer
            data={currentRoundContent}
            setCurrentRound={setCurrentRound}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            difficulty={contents.difficulty}
            isReady={isReady}
            setIsReady={setIsReady}
            isDone={isDone}
            setIsDone={setIsDone}
            totalRound={contents.rounds.length}
            totalTime={totalTime}
            lang={lang}
          />
          {isLoading || !isReady ? null : (
            <>
              <p className='picker-progress-text'>{`${(currentRound)} / ${contents.rounds.length}`}</p>
              <Progress className='picker-progress' percent={(currentRound-1) / contents.rounds.length * 100} showInfo={false} />
            </>
          )}
          <GoToHomeBtn page="colorPicker playing"/>
        </div>
      )
    }
}

export default ColorPicking;