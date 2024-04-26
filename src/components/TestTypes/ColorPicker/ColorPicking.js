import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Progress } from 'antd';
import PickerRenderer from './PickerRenderer';
import { reloadPage } from '../../../tools/tools';
import { color_picker_list, difficulties } from '../../../api/COLORPICKING';
import './colorPicker.css';
import { Helmet } from 'react-helmet';

const ColorPicking = ({ difficulty }) => {
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
    const [mode, setMode] = useState('intro');
    const [contents] = useState(difficulties.find((item) => item.difficulty === difficulty));
    const [currentRound, setCurrentRound] = useState(1);
    const [currentRoundContent, setCurrentRoundContent] = useState(contents?.rounds.find((item) => item.round === currentRound))
    const [isLoading, setIsLoading] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
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

    const metaTagRenderer = (difficulty) => {
      return (
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>색감 테스트 {difficulty} | 당신의 티어는? - 케이테스트 | 타임어택</title>
          <meta name="title" content={`색감 테스트 ${difficulty} - 케이테스트 | 타임어택`}/>
          <meta name="description" content={`당신의 티어는? | 타임어택`} data-react-helmet="true"/>
          <link rel="main-url" href={`https://ktestone.com/colorPicker${difficulty}/`}/>

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
          <meta property="og:title" content={`색감 테스트 ${difficulty} - 케이테스트 | 타임어택`}/>
          <meta property="og:description" content={`당신의 티어는? | 타임어택`}/>
          <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
          <meta property="og:image:alt" content={`색감 테스트 ${difficulty} - 케이테스트 | 타임어택`} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={`https://ktestone.com/colorPicker${difficulty}/`}/>
          <meta property="twitter:title" content={`색감 테스트 ${difficulty} - 케이테스트 | 타임어택`}/>
          <meta property="twitter:description" content={`당신의 티어는? | 타임어택`}/>
          <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/colorPicker-${difficulty}-thumb.png`}/>
          <meta property="twitter:image:alt" content={`색감 테스트 ${difficulty} - 케이테스트 | 타임어택`} />
      </Helmet>
      )
    }

    if (mode === 'intro') {
      return (
        <div>
          {metaTagRenderer(difficulty)}
            <img
              className='result-img'
              style={{cursor: 'pointer'}}
              src={`https://images.ktestone.com/introImages/colorPicker-${difficulty}-intro.jpeg`} alt="colorPicker-intro"
              onClick={() => setMode("start")}
            />
            <p>* 시작 버튼을 누른 후 3초 뒤에 시작</p>
            <p>* 중간에 틀리면 다시 처음으로 돌아가요</p>
        </div>
      )
    } else if (mode === 'start') {
      return (
        // TODO: Design
        <div className='colorpicker-div' style={{padding: isLoading? '15rem 0' : null}}>
          {metaTagRenderer(difficulty)}
          {isLoading || !isReady ? null : (
            <div className='picker-header'>
                <h1>{currentRoundContent.round}단계 </h1>
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
          />
          {isLoading || !isReady ? null : (
            <>
              <p className='picker-progress-text'>{`${(currentRound)} / ${contents.rounds.length}`}</p>
              <Progress className='picker-progress' percent={(currentRound-1) / contents.rounds.length * 100} showInfo={false} />
            </>
          )}
        </div>
      )
    }
}

export default ColorPicking;