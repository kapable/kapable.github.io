import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../tools/supabaseClient';

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // TODO: IF user's info is not exist, create the new one
      if (user && user.email) {
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
