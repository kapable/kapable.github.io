import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate, useParams } from 'react-router';
import UserDoneTestList from '../../components/Auth/UserDoneTestList';
import { Button, Input } from 'antd';
import GoToHomeBtn from '../../components/Sub/GoToHomeBtn';
import { upsertUserNickname } from '../../tools/auth';
import { EditOutlined } from '@ant-design/icons';
import LanguageSettingBtn from '../../components/Auth/LanguageSettingBtn';

const TextsByLanguages = {
  Kor: [
    '내 리포트',
    '나의 그래프 타입',
    '내가 한 테스트',
    '테스트 개봉',
    '테스트 미개봉',
    '로그아웃',
    '다섯 개 이상의 테스트 결과가 필요합니다!',
    '테스트 하러 가기',
    '내 MBTI 성향',
  ],
  Eng: [
    'My Report',
    'My Graph Type',
    'Completed Tests',
    'Tests Opened',
    'Tests Closed',
    'Sign Out',
    "More than 5 tests' results needed!",
    'Go to TESTS',
    'My MBTI',
  ],
  JP: [
    '私のレポート',
    '私のグラフタイプ',
    '私が行ったテスト',
    'テスト公開',
    'テスト未公開',
    'ログアウト',
    '5つ以上のテスト結果が必要です！',
    'テストを受けに行く',
    '私のMBTI性向',
  ],
  CN: [
    '我的报告',
    '我的图表类型',
    '我做过的测试',
    '测试公开',
    '测试未公开',
    '登出',
    '需要超过5个测试结果',
    '去测试',
    '我的MBTI倾向',
  ],
};

const MyPage = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [user, setUser] = useState(null);
  const [isNicknameEditMode, setIsNicknameEditMode] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isMyPage, setIsMyPage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Eng');
  const maxNicknameLength = 20; // Define the maximum length

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getUser();

      // fot checking this user is mine
      if (!data.user || userid !== data?.user.email.split('@')[0]) {
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
        setCurrentLanguage(userInfo.language);
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
      <h1>{TextsByLanguages[currentLanguage][0]}</h1>
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
          <p>{nickname}</p>
        )}
        {isMyPage ? (
          <Button danger type='dashed' onClick={onClickSignOut}>
            {TextsByLanguages[currentLanguage][5]}
          </Button>
        ) : null}
      </div>
      <UserDoneTestList
        user={user}
        isMyPage={isMyPage}
        texts={TextsByLanguages[currentLanguage]}
        currentLanguage={currentLanguage}
      />

      <GoToHomeBtn page='mypage' />
      <LanguageSettingBtn
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        isMyPage={isMyPage}
        userid={userid}
      />
    </div>
  );
};

export default MyPage;
