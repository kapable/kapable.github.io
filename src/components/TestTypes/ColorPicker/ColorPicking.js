import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Progress } from 'antd';
import './colorPicker.css';
import PickerRenderer from './PickerRenderer';

const difficulties = [
  {
    difficulty: "easy",
    rounds: [
      {
        round: 1,
        squares: 4,
        seconds: 3,
        normalColor: "#ff6ba8",
        uniqueColor: "#ff84b7",
      },
      {
        round: 2,
        squares: 8,
        seconds: 6,
        normalColor: "#ff6ba8",
        uniqueColor: "#ff84b7",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "#ff6ba8",
        uniqueColor: "#ff84b7",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "#ff84b7",
        uniqueColor: "#ff9ec6",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "#ff84b7",
        uniqueColor: "#ff9ec6",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "#ff84b7",
        uniqueColor: "#ff9ec6",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "#ff9ec6",
        uniqueColor: "#ffb7d5",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "#ff9ec6",
        uniqueColor: "#ffb7d5",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "#ff9ec6",
        uniqueColor: "#ffb7d5",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "#ffb7d5",
        uniqueColor: "#ffd1e4",
      },
    ]
  },
  {
    difficulty: "medium",
    rounds: [
      {
        round: 1,
        squares: 4,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 2,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
    ]
  },
  {
    difficulty: "hard",
    rounds: [
      {
        round: 1,
        squares: 4,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 2,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "#FF71BC",
        uniqueColor: "#E62383",
      },
    ]
  },
];

const ColorPicking = () => {
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
      const diffs = ['easy', 'medium', 'hard'];
      if(!diffs.includes(location.state)) {
        return history.push('/');
      }
    }, [location.state, history]);
    const [contents] = useState(difficulties.find((item) => item.difficulty === location.state));
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

  return (
    // TODO: Design
    <div className='colorpicker-div' style={{padding: isLoading? '15rem 0' : null}}>
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

export default ColorPicking;