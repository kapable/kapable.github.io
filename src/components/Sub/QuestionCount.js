import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const QuestionCount = ({ totalCount, quizCount }) => {
  return (
    <div className='question-progress'>
      <div className='progress-bar'>
        <ProgressBar
          completed={(quizCount / totalCount) * 100 + 10}
          isLabelVisible={false}
          baseBgColor='#fbf7f2'
          bgColor='#E62381'
          height='10px'
          width='100%'
          transitionDuration='.3s'
        />
      </div>
      <div className='question-count'>
        {quizCount + 1} / {totalCount}
      </div>
    </div>
  );
};

export default QuestionCount;
