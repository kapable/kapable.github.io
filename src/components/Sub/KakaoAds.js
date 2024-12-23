import React, { useEffect, useRef } from 'react';

const KakaoAds = ({ unit }) => {
  const scriptElement = useRef(null);

  // script 태그를 동적으로 추가
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
    script.setAttribute('charset', 'utf-8');

    script.setAttribute('async', 'true');
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <>
      ...
      <div ref={scriptElement}>
        <ins
          className='kakao_ad_area'
          style={{ display: 'none' }}
          data-ad-unit={
            unit === 'banner' ? 'DAN-yOkueBylYJuSA4fb' : 'DAN-6ItjeAExCKSBoequ'
          }
          data-ad-width={unit === 'banner' ? '320' : '300'}
          data-ad-height={unit === 'banner' ? '50' : '250'}
        />
      </div>
    </>
  );
};

export default KakaoAds;
