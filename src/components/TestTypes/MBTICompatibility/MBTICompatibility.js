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

  const mainMetaTagRenderer = () => {
    const _metaTag = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>MBTI 연애 궁합 테스트 - 케이테스트</title>
        <meta name='title' content='MBTI 연애 궁합 테스트  - 케이테스트' />
        <meta
          name='description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | 우리의 연애 MBTI 연애 궁합은 어떨까 ?'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com/alcoholGames/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/alcoholGames/' />
        <meta
          property='og:title'
          content='MBTI 연애 궁합 테스트  - 케이테스트'
        />
        <meta
          property='og:description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | 우리의 연애 MBTI 연애 궁합은 어떨까 ?'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/default/alcoholGames-main-header.png'
        />
        <meta
          property='og:image:alt'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | 우리의 연애 MBTI 연애 궁합은 어떨까 ?'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://ktestone.com/alcoholGames/'
        />
        <meta
          property='twitter:title'
          content='MBTI 연애 궁합 테스트  - 케이테스트'
        />
        <meta
          property='twitter:description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | 우리의 연애 MBTI 연애 궁합은 어떨까 ?'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/default/alcoholGames-main-header.png'
        />
        <meta
          property='twitter:image:alt'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | 우리의 연애 MBTI 연애 궁합은 어떨까 ?'
        />
      </Helmet>
    );
    return _metaTag;
  };

  return (
    <div style={{ width: '100%', maxWidth: '25rem', margin: '0 auto' }}>
      {mainMetaTagRenderer()}
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
