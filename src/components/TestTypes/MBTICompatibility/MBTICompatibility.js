import React, { useState } from 'react';
import ProgramTItle from './ProgramTItle';
import MBTISelector from './MBTISelector';
import ProgramButtonGroup from './ProgramButtonGroup';
import { Modal } from 'antd';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';

export const mbti_array = [
  { value: 'ESTJ', label: 'ESTJ' },
  { value: 'ESFJ', label: 'ESFJ' },
  { value: 'ISTJ', label: 'ISTJ' },
  { value: 'ISFJ', label: 'ISFJ' },
  { value: 'ESTP', label: 'ESTP' },
  { value: 'ESFP', label: 'ESFP' },
  { value: 'ISTP', label: 'ISTP' },
  { value: 'ISFP', label: 'ISFP' },
  { value: 'ENTJ', label: 'ENTJ' },
  { value: 'ENFJ', label: 'ENFJ' },
  { value: 'INTJ', label: 'INTJ' },
  { value: 'INFJ', label: 'INFJ' },
  { value: 'ENTP', label: 'ENTP' },
  { value: 'ENFP', label: 'ENFP' },
  { value: 'INTP', label: 'INTP' },
  { value: 'INFP', label: 'INFP' },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const MBTICompatibility = () => {
  const [myTypes, setMyType] = useState(mbti_array[0].value);
  const [yourTypes, setYourType] = useState(mbti_array[0].value);
  const [mode, setMode] = useState('intro');

  return (
    <div style={{ width: '100%', maxWidth: '25rem', margin: '0 auto' }}>
      <ProgramTItle />
      <MBTISelector
        mbti_array={mbti_array}
        setMyType={setMyType}
        setYourType={setYourType}
      />
      <ProgramButtonGroup
        myTypes={myTypes}
        yourTypes={yourTypes}
        setMode={setMode}
        mode={mode}
      />
      {mode === 'loading' && (
        <Modal
          title={<Lottie options={defaultOptions} height={120} width={120} />}
          open={mode === 'loading'}
          footer={null}
          closable={false}
        />
      )}
      <GoToHomeBtn page={`compatibility intro`} />
    </div>
  );
};

export default MBTICompatibility;
