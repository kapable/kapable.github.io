import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { _eventSenderGA } from '../../tools/tools';
import googleLoginButton from '../../api/DefaultImg/android_light_sq_SI.svg';
import kakaoLoginButton from '../../api/DefaultImg/kakao_login_large_narrow_en.png';
import googleLoginButtonGrey from '../../api/DefaultImg/android_neutral_sq_SI.svg';
import styles from './myReport.module.css';

const SocialSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSocialSignUp = async (provider) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo:
            process.env.NODE_ENV === 'production'
              ? 'https://ktestone.com/auth/mypage/'
              : 'http://localhost:3000/auth/mypage/',
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
        window.location.href = `/auth/mypage/${user.nickname}`;
      }
    };

    checkLoginStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
        if (session) {
          window.location.href = `/auth/mypage/${session.nickname}`;
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
      <img
        className={styles.signInLogo}
        src='https://images.ktestone.com/auth/signInPage/signInLogo.avif'
        alt='signInLogo'
      />
      {loading ? (
        <img src={googleLoginButtonGrey} alt='Google Login' />
      ) : (
        <>
          <img
            className={styles.signInButton}
            src={googleLoginButton}
            onClick={() => handleSocialSignUp('google')}
            alt='Google Login'
            style={{ cursor: 'pointer' }}
          />
          <img
            className={styles.signInButton}
            src={kakaoLoginButton}
            onClick={() => handleSocialSignUp('kakao')}
            alt='Kakao Login'
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
      <img
        className={styles.signInBanner}
        src='https://images.ktestone.com/auth/signInPage/signInBanner.avif'
        alt='signInBanner'
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SocialSignUp;
