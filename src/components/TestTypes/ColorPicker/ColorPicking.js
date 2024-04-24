import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const difficulties = [
  {
    difficulty: "easy",
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
        squares: 4,
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
  return (
    <div>{contents?.difficulty}</div>
  )
}

export default ColorPicking