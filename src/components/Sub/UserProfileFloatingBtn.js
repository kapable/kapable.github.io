import React from 'react';
import { useNavigate } from 'react-router';

const UserProfileFloatingBtn = ({ user }) => {
  const navigate = useNavigate();

  const onSignInClick = () => {
    return navigate('/auth/signup/');
  };

  const onMyPageClick = () => {
    return navigate(`/auth/mypage/${user?.email?.split('@')?.[0]}`);
  };
  return (
    <div
      className='kakao-plusfriend-btn-container'
      style={{ cursor: 'pointer' }}
      onClick={user ? onMyPageClick : onSignInClick}
    >
      <img
        src={`https://images.ktestone.com/default/${user ? 'logged' : 'log'}-in-btn.png`}
        alt='LogIn Icons'
      />
    </div>
  );
};

export default UserProfileFloatingBtn;
