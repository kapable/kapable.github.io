import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import { supabase } from '../../../../supabaseClient';

const AuthPage = () => {
  const [mode, setMode] = useState('login');

  const handleSocialLogin = async (provider) => {
    try {
      const { user, session, error } = await supabase.auth.signIn({ provider });
      if (error) throw error;

      // Handle successful login
      localStorage.setItem('access_token', session.access_token);
      // Redirect to PostPage or handle as needed
    } catch (error) {
      alert('Social login failed: ' + error.message);
    }
  };

  return (
    <div>
      {mode === 'register' ? (
        <RegisterPage setMode={setMode} />
      ) : (
        <LoginPage setMode={setMode} />
      )}
      <div className='social-login-buttons'>
        <button onClick={() => handleSocialLogin('google')}>
          Login with Google
        </button>
        <button onClick={() => handleSocialLogin('facebook')}>
          Login with Facebook
        </button>
        {/* Add more social login buttons as needed */}
      </div>
    </div>
  );
};

export default withRouter(AuthPage);
