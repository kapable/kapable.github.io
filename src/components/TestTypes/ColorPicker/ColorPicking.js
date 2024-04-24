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
        normalColor: "yellow",
        uniqueColor: "red",
      },
      {
        round: 2,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
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
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 2,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
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
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 2,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 3,
        squares: 4,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 4,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 5,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 6,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 7,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 8,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 9,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
      },
      {
        round: 10,
        squares: 8,
        seconds: 3,
        normalColor: "green",
        uniqueColor: "red",
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
    useEffect(() => {
      setCurrentRoundContent(
        contents?.rounds.find((item) => item.round === currentRound)
      )
    }, [contents.rounds, currentRound])
  return (
    <div className='colorpicker-div' style={{padding: isLoading? '15rem 0' : null}}>
      {isLoading || !isReady ? null : (
        <div className='picker-header'>
            <h1>{currentRoundContent.round}단계 </h1>
            <h3>못찾으면 50대 이상</h3>
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

export default ColorPicking