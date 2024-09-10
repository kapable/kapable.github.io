import React from 'react';

const RenderProgressBar = ({ left, right, mbtiScores }) => {
  const total = mbtiScores[left] + mbtiScores[right];
  const leftPercentage = total > 0 ? (mbtiScores[left] / total) * 100 : 50;
  const rightPercentage = 100 - leftPercentage;

  const winningColor = '#E62182'; // Pink color for winning side
  const losingColor = 'lightgrey'; // Grey color for losing side

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
      }}
    >
      <span
        style={{
          width: '70px',
          fontWeight: 'bold',
          textAlign: 'right',
          color: leftPercentage >= 50 ? winningColor : losingColor,
        }}
      >
        {leftPercentage.toFixed(0)}% {left}
      </span>
      <div
        style={{
          flex: 1,
          height: '20px',
          display: 'flex',
          margin: '0 10px',
        }}
      >
        <div
          style={{
            width: `${leftPercentage}%`,
            height: '100%',
            //   background: getColor(left),
            backgroundColor: leftPercentage >= 50 ? winningColor : losingColor,
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        ></div>
        <div
          style={{
            width: `${rightPercentage}%`,
            height: '100%',
            //   background: getColor(right),
            backgroundColor: leftPercentage < 50 ? winningColor : losingColor,
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        ></div>
      </div>
      <span
        style={{
          width: '70px',
          fontWeight: 'bold',
          color: leftPercentage < 50 ? winningColor : losingColor,
        }}
      >
        {right} {rightPercentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default RenderProgressBar;
