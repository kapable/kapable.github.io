import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate, useParams } from 'react-router';
import UserDoneTestList from '../../components/Auth/UserDoneTestList';
import { Button, Input } from 'antd';
import GoToHomeBtn from '../../components/Sub/GoToHomeBtn';
import { upsertUserNickname } from '../../tools/auth';
import { EditOutlined } from '@ant-design/icons';

const MyPage = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [user, setUser] = useState(null);
  const [isNicknameEditMode, setIsNicknameEditMode] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isMyPage, setIsMyPage] = useState(false);
  const maxNicknameLength = 20; // Define the maximum length
  // alert('로그인을 해주세요!');
  // navigate('/auth/signup');
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getUser();

      // fot checking this user is mine
      if (!data.user) {
        setIsMyPage(false);
      } else {
        setIsMyPage(true);
      }

      // get user's info
      const { data: userInfo, error: userInfoError } = await supabase
        .from('user_info')
        .select('*')
        // .eq('user_id', data.user.id)
        .eq('email', `${userid}@gmail.com`)
        .single();

      if (userInfoError) {
        alert('존재하지 않는 사용자입니다!');
        navigate('/auth/signup');
      } else {
        userInfo.user_metadata = { ...userInfo.user_metadata, ...userInfo };
        setNickname(userInfo.user_metadata?.nickname || '');
      }
      setUser(userInfo);
    };
    fetchData();
  }, [navigate, userid]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const onClickSignOut = async () => {
    alert('Successfully signed out!');
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleUpdateNickname = async () => {
    setIsNicknameEditMode(false);
    const success = await upsertUserNickname(nickname);
    if (success) {
      setNickname(nickname);
    }
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value.slice(0, maxNicknameLength);
    setNickname(newNickname);
  };

  return (
    <div className='my-profile'>
      <h1>My Report</h1>
      <div className='profile-info'>
        <img
          src={user.profile_image_url}
          alt='Profile'
          className='profile-avatar'
          style={{ borderRadius: '100%', width: '3rem' }}
        />
        {isMyPage ? (
          <p>
            {isNicknameEditMode ? (
              <div className='nickname-edit' style={{ display: 'contents' }}>
                <Input
                  showCount
                  type='text'
                  placeholder='닉네임을 입력해주세요.'
                  value={nickname}
                  onChange={handleNicknameChange}
                  maxLength={maxNicknameLength}
                  style={{ maxWidth: '10rem' }}
                />
                <Button type='primary' onClick={handleUpdateNickname}>
                  설정
                </Button>
              </div>
            ) : (
              nickname || '닉네임을 입력해주세요. '
            )}
            {isNicknameEditMode ? null : (
              <div
                style={{ display: 'contents', cursor: 'pointer' }}
                onClick={() => setIsNicknameEditMode((prev) => !prev)}
              >
                {' '}
                <EditOutlined />
              </div>
            )}
          </p>
        ) : (
          nickname
        )}

        <Button danger type='dashed' onClick={onClickSignOut}>
          Sign Out
        </Button>
      </div>
      <UserDoneTestList user={user} />
      <GoToHomeBtn page='mypage' />
    </div>
  );
};

export default MyPage;
