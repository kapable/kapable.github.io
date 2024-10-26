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
          .select('id')
          .eq('email', user.email.split('@')[0]);

        if (data?.length === 0) {
          const upsertData = {
            user_id: user.id,
            nickname:
              faker.food.adjective() +
              '_' +
              faker.location.city() +
              '_' +
              faker.music.artist(),
            email: user.email,
            profile_image_url: faker.image.avatar(),
          };
          await supabase.from(USER_INFO_TABLE).upsert(upsertData);
        }
        navigate(`/auth/mypage/${user.email.split('@')[0]}`);
      } else {
        navigate('/auth/signup');
      }
    };
    checkLoginStatus();
  }, [navigate]);
  return <div />;
};

export default AuthCallback;
