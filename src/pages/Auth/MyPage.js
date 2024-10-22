import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate } from 'react-router';
import UserDoneTestList from '../../components/Auth/UserDoneTestList';
import { Button, Input } from 'antd';
import GoToHomeBtn from '../../components/Sub/GoToHomeBtn';
import { upsertUserNickname } from '../../tools/auth';
import { EditOutlined } from '@ant-design/icons';

const MyPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isNicknameEditMode, setIsNicknameEditMode] = useState(false);
  const [nickname, setNickname] = useState('');
  const maxNicknameLength = 20; // Define the maximum length

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        alert('로그인을 해주세요!');
        navigate('/auth/signup');
      } else {
        const { data: userInfo, error: userInfoError } = await supabase
          .from('user_info')
          .select('*')
          .eq('user_id', data.user.id)
          .single();

        if (userInfoError) {
          // alert('Failed to fetch user info!');
          // navigate('/auth/signup');
          data.user.user_metadata = { ...data.user.user_metadata, ...userInfo };
        } else {
          data.user.user_metadata = { ...data.user.user_metadata, ...userInfo };
          setNickname(data.user.user_metadata.nickname || '');
        }
        setUser(data.user);
      }
    };
    fetchData();
  }, [navigate]);

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
      // setNewNickname('');
    }
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value.slice(0, maxNicknameLength);
    setNickname(newNickname);
  };

  return (
    <div className='my-profile'>
      <h1>My Profile</h1>
      <div className='profile-info'>
        <img
          src={user.user_metadata.avatar_url}
          alt='Profile'
          className='profile-avatar'
        />
        <p>
          <strong>Nickname:</strong>{' '}
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
            nickname || '닉네임을 입력해주세요.'
          )}
          {isNicknameEditMode ? null : (
            <div
              style={{ display: 'contents', cursor: 'pointer' }}
              onClick={() => setIsNicknameEditMode((prev) => !prev)}
            >
              <EditOutlined />
            </div>
          )}
        </p>

        <Button danger type='dashed' onClick={onClickSignOut}>
          Sign Out
        </Button>
      </div>
      <UserDoneTestList />
      <GoToHomeBtn page='mypage' />
    </div>
  );
};

export default MyPage;
