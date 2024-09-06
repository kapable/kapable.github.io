import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { _eventSenderGA } from '../../tools/tools';
import googleLoginButton from '../../api/DefaultImg/android_light_sq_SI.svg';
import googleLoginButtonGrey from '../../api/DefaultImg/android_neutral_sq_SI.svg';

const SocialSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSocialSignUp = async (provider) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          // redirectTo: 'https://ktestone.com/auth/mypage/',
          redirectTo: 'http://localhost:3000/auth/mypage/',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) throw error;

      _eventSenderGA(
        'Submitting',
        'Click Social Sign-up Button',
        'signup page'
      );
      console.log('error', error);
    } catch (error) {
      alert('Social signup failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // check login status
  useEffect(() => {
    const checkLoginStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
      if (user) {
        window.location.href = '/auth/mypage';
      }
    };

    checkLoginStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
        if (session) {
          window.location.href = '/auth/mypage';
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (isLoggedIn) {
    return <div>Logged In</div>;
  }

  return (
    <div className='social-signup-container'>
      <h2>Sign In</h2>
      {loading ? (
        <img src={googleLoginButtonGrey} alt='Google Login' />
      ) : (
        <img
          src={googleLoginButton}
          onClick={() => handleSocialSignUp('google')}
          alt='Google Login'
          style={{ cursor: 'pointer' }}
        />
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SocialSignUp;
