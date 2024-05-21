import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HomeOutlined } from '@ant-design/icons';

const Page404 = () => {
  const legacyRoute = '/kapable.github.io';
  const navigation = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes(legacyRoute)) {
      navigation(location.pathname.replace(legacyRoute, ''));
    }
  }, [location, navigation]);
  const onGoToIntroButtonClick = () => {
    navigation(`/`);
  };
  return (
    <div style={{ margin: '5rem auto' }}>
      <h3>잘못된 경로 또는 없는 페이지로 들어오셨습니다.</h3>
      <h3>Wrong Path of Page.</h3>
      <button
        className='picker-result-go-home-button'
        onClick={onGoToIntroButtonClick}
        type='button'
      >
        <HomeOutlined />
        &nbsp; Go Back to Home
      </button>
    </div>
  );
};

export default Page404;
