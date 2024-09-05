import React, { useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { _eventSenderGA } from '../../tools/tools';

const SocialSignUp = () => {
  const [loading, setLoading] = useState(false);

  const handleSocialSignUp = async (provider) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: 'https://ktestone.com/',
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

      // Handle successful signup
      //   localStorage.setItem('access_token', session.access_token);
      //   navigate(`/`, {
      //     state: session.access_token,
      //   });
    } catch (error) {
      alert('Social signup failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='social-signup-container'>
      <h2>Sign Up with Social Media</h2>
      <button onClick={() => handleSocialSignUp('google')} disabled={loading}>
        Sign Up with Google
      </button>
      {/* Add more social signup buttons as needed */}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SocialSignUp;
