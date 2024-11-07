import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate, useParams } from 'react-router';
import UserDoneTestList from '../../components/Auth/UserDoneTestList';
import { Button, Input } from 'antd';
import GoToHomeBtn from '../../components/Sub/GoToHomeBtn';
import { upsertUserNickname } from '../../tools/auth';
import { EditOutlined } from '@ant-design/icons';
import LanguageSettingBtn from '../../components/Auth/LanguageSettingBtn';
import ProfileButtonGroup from '../../components/Auth/ProfileButtonGroup';

const TextsByLanguages = {
  Kor: [
    '내 리포트',
    '나의 그래프 타입',
    '내 MBTI 성향',
    '테스트 개봉',
    '테스트 미개봉',
    '로그아웃',
    '다섯 개 이상의 테스트 결과가 필요합니다!',
    '테스트 하러 가기',
    '공유하기',
    '테스트 진행 상황',
    ' 개의 테스트를 완료했어요!',
    '영어, 숫자, 언더바만 가능합니다.',
  ],
  Eng: [
    'My Report',
    'My Graph Type',
    'My MBTI',
    'Tests Opened',
    'Tests Closed',
    'Sign Out',
    "More than 5 tests' results needed!",
    'Go to TESTS',
    'Share',
    'Test Progress',
    ' Tests Done!',
    'Only English, numbers, and underscores are allowed.',
  ],
  JP: [
    '私のレポート',
    '私のグラフタイプ',
    '私のMBTI性向',
    'テスト公開',
    'テスト未公開',
    'ログアウト',
    '5つ以上のテスト結果が必要です！',
    'テストを受けに行く',
    '共有する',
    'テストの進行状況',
    ' テストが完了しました！',
    '英語、数字、アンダーバーのみ使用可能です。',
  ],
  CN: [
    '我的报告',
    '我的图表类型',
    '我的MBTI倾向',
    '测试公开',
    '测试未公开',
    '登出',
    '需要超过5个测试结果',
    '去测试',
    '分享',
    '测试进度',
    ' 完成的测试！',
    '仅允许使用英文、数字和下划线。',
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
  const maxNicknameLength = 30; // Define the maximum length

  const [userDoneTests, setUserDoneTests] = useState([]);
  const [userNotDoneTests, setUserNotDoneTests] = useState([]);
  const [mbtiScores, setMbtiScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [MBTIType, setMBTIType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getUser();

      // get user's info
      const { data: userInfo, error: userInfoError } = await supabase
        .from('user_info')
        .select('*')
        // .eq('email', `${userid}@gmail.com`)
        // .like('email', `${userid}@%`)
        .eq('nickname', userid)
        .single();

      // fot checking this user is mine
      if (!data.user || userid !== userInfo?.nickname) {
        setIsMyPage(false);
      } else {
        setIsMyPage(true);
      }

      if (userInfoError) {
        alert('존재하지 않는 사용자입니다!');
        await supabase.auth.signOut();
        navigate('/auth/signup');
      } else {
        userInfo.user_metadata = { ...userInfo.user_metadata, ...userInfo };
        setNickname(userInfo.user_metadata?.nickname || '');
        setCurrentLanguage(userInfo.language);
      }
      setUser(userInfo);
    };
    fetchData();
  }, [navigate, userid, setUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // check the nickname only availabel for English and number and one sequential dot and underbar
  const handleUpdateNickname = async () => {
    const nicknamePattern = /^[a-zA-Z0-9._]+$/;
    if (!nicknamePattern.test(nickname) || nickname.includes(' ')) {
      alert(TextsByLanguages[currentLanguage][11]);
      return;
    }
    setIsNicknameEditMode(false);
    const result = await upsertUserNickname(nickname);
    if (result?.[0]?.email === user?.email) {
      setNickname(nickname);
      navigate(`/auth/mypage/${nickname}`);
    } else {
      setNickname(user?.nickname);
    }
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value.slice(0, maxNicknameLength);
    setNickname(newNickname);
  };

  return (
    <div className='my-profile'>
      <h1 style={{ color: '#e62182' }}>
        {TextsByLanguages[currentLanguage][0]}
      </h1>
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
                <p
                  style={{
                    fontSize: '0.7rem',
                    color: '#E71C83',
                    fontWeight: 'bold',
                  }}
                >
                  *{TextsByLanguages[currentLanguage][11]}
                </p>
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
          <ProfileButtonGroup
            userid={userid}
            texts={TextsByLanguages[currentLanguage]}
            currentLanguage={currentLanguage}
            userDoneTests={userDoneTests}
          />
        ) : null}
      </div>
      <div
        style={{
          backgroundColor: '#f2f2f2',
          borderRadius: '1rem',
          padding: '2rem',
        }}
      >
        <UserDoneTestList
          user={user}
          isMyPage={isMyPage}
          texts={TextsByLanguages[currentLanguage]}
          currentLanguage={currentLanguage}
          userDoneTests={userDoneTests}
          setUserDoneTests={setUserDoneTests}
          userNotDoneTests={userNotDoneTests}
          setUserNotDoneTests={setUserNotDoneTests}
          mbtiScores={mbtiScores}
          setMbtiScores={setMbtiScores}
          MBTIType={MBTIType}
          setMBTIType={setMBTIType}
        />

        <GoToHomeBtn page='myReport' />
        <LanguageSettingBtn
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          isMyPage={isMyPage}
          userid={userid}
        />
      </div>
    </div>
  );
};

export default MyPage;
