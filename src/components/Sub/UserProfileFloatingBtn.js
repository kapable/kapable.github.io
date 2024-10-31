import React from 'react';
import { useNavigate } from 'react-router';
import { _eventSenderGA } from '../../tools/tools';

const UserProfileFloatingBtn = ({ user }) => {
  const navigate = useNavigate();

  const onSignInClick = () => {
    _eventSenderGA('Paging', `Click go-to-LogIn Button`, 'main page');
    return navigate('/auth/signup/');
  };

  const onMyPageClick = () => {
    _eventSenderGA('Paging', `Click go-to-MyReport Button`, 'main page');
    return navigate(`/auth/mypage/${user?.nickname}`);
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
