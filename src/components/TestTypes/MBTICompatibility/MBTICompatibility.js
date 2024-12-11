import React, { useState } from 'react';
import MBTISelector from './MBTISelector';
import ProgramButtonGroup from './ProgramButtonGroup';
import { Modal } from 'antd';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import { Helmet } from 'react-helmet-async';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import MBTIDisplay from './MBTIDisplay';

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
  const [myTypes, setMyType] = useState('');
  const [yourTypes, setYourType] = useState('');
  const [mode, setMode] = useState('intro');

  const mainMetaTagRenderer = () => {
    const _metaTag = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>MBTI 연애 궁합 테스트 - 케이테스트</title>
        <meta
          name='title'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
        />
        <meta
          name='description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com/compatibility/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/compatibility/' />
        <meta
          property='og:title'
          content='MBTI 연애 궁합 테스트  - 케이테스트'
        />
        <meta
          property='og:description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/introImages/compatibility-intro.jpg'
        />
        <meta
          property='og:image:alt'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://ktestone.com/compatibility/'
        />
        <meta
          property='twitter:title'
          content='MBTI 연애 궁합 테스트  - 케이테스트'
        />
        <meta
          property='twitter:description'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/introImages/compatibility-intro.jpg'
        />
        <meta
          property='twitter:image:alt'
          content='MBTI 연애 궁합 테스트  - 케이테스트 | MBTI 궁합 연애편 내 mbti와 상대방 mbti 궁합을 알아보세요 | 나와 상대방의 MBTI 연애 궁합은 어떨까?'
        />
      </Helmet>
    );
    return _metaTag;
  };

  return (
    <div style={{ width: '100%', maxWidth: '25rem', margin: '0 auto' }}>
      {mainMetaTagRenderer()}
      <img
        src='https://images.ktestone.com/introImages/compatibility-intro.jpg'
        alt='MBTI 성격유형 궁합'
        style={{ width: '100%', borderRadius: '1rem' }}
      />
      <MBTIDisplay myTypes={myTypes} yourTypes={yourTypes} />
      <MBTISelector
        mbti_array={mbti_array}
        myTypes={myTypes}
        yourTypes={yourTypes}
        setMyType={setMyType}
        setYourType={setYourType}
        mode={mode}
        setMode={setMode}
      />
      <AdsenseAdvertiser
        client={`ca-pub-2382342018701919`}
        slot={'9210802615'}
        format='auto'
        responsive='true'
        style={{ display: 'block' }}
      />
      <ProgramButtonGroup
        myTypes={myTypes}
        yourTypes={yourTypes}
        setMode={setMode}
        mode={mode}
        setMyType={setMyType}
        setYourType={setYourType}
      />
      <h4>MBTI 궁합 연애편</h4>
      <p style={{ fontSize: '0.7rem' }}>
        내 mbti와 상대방 mbti 궁합을 알아보세요
        <br />
        나와 상대방의 MBTI 연애 궁합은 어떨까?
      </p>

      {mode === 'loading' && (
        <Modal
          title={
            <div>
              <h3>분석중..</h3>
              <Lottie options={defaultOptions} height={120} width={120} />
            </div>
          }
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
