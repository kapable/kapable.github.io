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
          width: '30px',
          fontWeight: 'bold',
          textAlign: 'right',
          color: leftPercentage >= 50 ? winningColor : losingColor,
        }}
      >
        {left}
      </span>
      <div
        style={{
          flex: 1,
          height: '40px',
          display: 'flex',
          margin: '0 20px',
          position: 'relative',
          alignItems: 'center',
        }}
      >
        {leftPercentage >= 50 && (
          <div
            style={{
              position: 'absolute',
              left: `calc(${leftPercentage / 2}%)`,
              top: 0,
              transform: 'translateX(-50%)',
              fontSize: '12px',
              fontWeight: 'bold',
              color: winningColor,
            }}
          >
            {leftPercentage.toFixed(0)}%
          </div>
        )}
        {leftPercentage < 50 && (
          <div
            style={{
              position: 'absolute',
              left: `calc(${leftPercentage + rightPercentage / 2}%)`,
              top: 0,
              transform: 'translateX(-50%)',
              fontSize: '12px',
              fontWeight: 'bold',
              color: winningColor,
            }}
          >
            {rightPercentage.toFixed(0)}%
          </div>
        )}

        <div
          style={{
            width: `${leftPercentage}%`,
            height: '4px',
            backgroundColor: leftPercentage >= 50 ? winningColor : losingColor,
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        />
        <div
          style={{
            width: `${rightPercentage}%`,
            height: '4px',
            backgroundColor: leftPercentage < 50 ? winningColor : losingColor,
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: `calc(${leftPercentage}% - 6px)`,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: winningColor,
            zIndex: 1,
          }}
        />
      </div>
      <span
        style={{
          width: '30px',
          fontWeight: 'bold',
          color: leftPercentage < 50 ? winningColor : losingColor,
        }}
      >
        {right}
      </span>
    </div>
  );
};

export default RenderProgressBar;
