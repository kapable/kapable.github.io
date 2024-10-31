import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../tools/supabaseClient';
import { USER_INFO_TABLE } from '../../tools/auth';
import { faker } from '@faker-js/faker';

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && user.email) {
        const { data } = await supabase
          .from(USER_INFO_TABLE)
          .select('id, nickname')
          .eq('email', user.email);

        if (data?.length === 0) {
          const random_nickname =
            faker.food.adjective().replace(/\s/g, '') +
            '_' +
            faker.location.city().replace(/\s/g, '') +
            '_' +
            faker.music.artist().replace(/\s/g, '');

          const upsertData = {
            user_id: user.id,
            nickname: random_nickname,
            email: user.email,
            profile_image_url: `https://images.ktestone.com/auth/profile/${Math.floor(Math.random() * 8) + 1}.avif`,
            language: 'Kor',
          };

          await supabase.from(USER_INFO_TABLE).upsert(upsertData);
          return navigate(`/auth/mypage/${random_nickname}`);
        }
        navigate(`/auth/mypage/${data?.[0]?.nickname}`);
      } else {
        navigate('/auth/signup');
      }
    };
    checkLoginStatus();
  }, [navigate]);
  return <div />;
};

export default AuthCallback;
