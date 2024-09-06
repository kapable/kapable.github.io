import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { useNavigate } from 'react-router';

const MyPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        alert('LogIn Error!');
        navigate('/auth/signup');
      } else {
        setUser(data.user);
      }
    };
    fetchData();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='my-profile'>
      <h1>My Profile</h1>
      <div className='profile-info'>
        <img
          src={user.user_metadata.avatar_url}
          alt='Profile'
          className='profile-avatar'
        />
        <p>
          <strong>Name:</strong> {user.user_metadata.full_name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default MyPage;
