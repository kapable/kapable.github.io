import React, { useEffect, useState } from 'react';
import { ConfigProvider, Divider } from 'antd';
import { LogoutOutlined, ShareAltOutlined } from '@ant-design/icons';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate } from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';

const ProfileButtonGroup = ({
  userid,
  texts,
  //   currentLanguage,
  userDoneTests,
}) => {
  const navigate = useNavigate();
  const [level, setLevel] = useState('newbie');

  useEffect(() => {
    const badgeMapper = {
      5: 'bronze',
      10: 'silver',
      30: 'gold',
      50: 'diamond',
    };
    let result_array = [];
    if (userDoneTests?.length) {
      Object.keys(badgeMapper).forEach((key) => {
        if (userDoneTests?.length >= key) {
          result_array.push(key);
        }
      });

      setLevel(badgeMapper[result_array[result_array.length - 1]] || 'newbie');
    }
  }, [userDoneTests?.length]);

  const onClickSignOut = async () => {
    alert('Successfully signed out!');
    await supabase.auth.signOut();
    return navigate('/');
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorSplit: 'white',
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '5px 15px',
          borderRadius: '50px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '300px',
          margin: '1rem auto',
          fontSize: '0.6rem',
          cursor: 'pointer',
          backgroundColor: '#e62182',
          color: 'white',
        }}
      >
        <div>
          <img
            src={`https://images.ktestone.com/auth/medal/${level}.avif`}
            alt='level'
            style={{ width: '3rem' }}
          />
        </div>
        <Divider type='vertical' />
        <CopyToClipboard text={`https://ktestone.com/auth/mypage/${userid}`}>
          <div onClick={() => alert('프로필 링크가 복사됐어요!')}>
            <ShareAltOutlined
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
              }}
            />
            <div>{texts[8]}</div>
          </div>
        </CopyToClipboard>
        <Divider type='vertical' />
        <div onClick={onClickSignOut}>
          <LogoutOutlined
            style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
            }}
          />
          <div>{texts[5]}</div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ProfileButtonGroup;
