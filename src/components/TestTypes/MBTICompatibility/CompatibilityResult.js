import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { supabase } from '../../../tools/supabaseClient';
import { MBTI_COMP } from '../../../tools/auth';
import MBTITypes from './MBTITypes';
import CompatibilityScores from './CompatibilityScores';
import CompatibilityDesc from './CompatibilityDesc';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import { LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AdsenseAdvertiser from '../../Sub/AdsenseAdvertiser';
import OtherTestBannerRenderer from '../../Sub/OtherTestBannerRenderer';

const CompatibilityResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [myType] = useState(location.pathname.split('/')?.[2].split('-')[0]);
  const [yourType] = useState(location.pathname.split('/')?.[2].split('-')[1]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchCompatibility = async () => {
      try {
        const { data } = await supabase
          .from(MBTI_COMP)
          .select('*')
          .eq('MBTI1', myType)
          .eq('MBTI2', yourType)
          .single();

        if (!data) {
          const { data } = await supabase
            .from(MBTI_COMP)
            .select('*')
            .eq('MBTI2', myType)
            .eq('MBTI1', yourType)
            .single();
          return setResult(data);
        }
        return setResult(data);
      } catch (error) {
        return alert('에러가 발생했어요!');
      }
    };
    fetchCompatibility();
  }, [myType, yourType]);

  return (
    <div style={{ width: '100%', maxWidth: '40rem', margin: '0 auto' }}>
      <MBTITypes myType={myType} yourType={yourType} />
      {result ? (
        <>
          <CompatibilityScores result={result} />
          <img
            style={{
              width: '100%',
              margin: '3rem auto 0',
              borderRadius: '1rem',
            }}
            src='https://images.ktestone.com/meta/compatibility/compatibility-result-banner.jpg'
            alt='result-desc-banner'
          />
          <CompatibilityDesc result={result} />
          <AdsenseAdvertiser
            client={`ca-pub-2382342018701919`}
            slot={'9210802615'}
            format='auto'
            responsive='true'
            style={{ display: 'block' }}
          />
          <Button
            style={{ width: '100%', height: '3rem' }}
            type='primary'
            onClick={() => navigate('/compatibility/')}
          >
            다시하기
          </Button>
        </>
      ) : (
        <LoadingOutlined style={{ fontSize: '7rem', margin: '2rem auto' }} />
      )}
      <GoToHomeBtn page={`compatibility result`} />
      <OtherTestBannerRenderer lang='Kor' mainUrl={'compatibility'} />
    </div>
  );
};

export default CompatibilityResult;
