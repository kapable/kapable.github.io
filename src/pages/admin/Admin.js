import React, { useEffect, useState } from 'react';
import { checkAdminUser, getAllUserNumber } from '../../tools/auth';
import { useNavigate } from 'react-router';

const Admin = () => {
  const navigate = useNavigate();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [allUserCount, setAllUserCount] = useState(0);

  useEffect(() => {
    checkAdminUser().then((isAdmin) => {
      if (!isAdmin) {
        alert('어드민 유저만 접근할 수 있습니다.');
        navigate('/');
      } else {
        setIsAdminUser(true);
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (isAdminUser) {
      getAllUserNumber().then((count) => {
        setAllUserCount(count);
      });
    }
  }, [isAdminUser]);

  return (
    <div>
      <h1>KTEST DASHBOARD</h1>
      <h2>All User Count</h2>
      <h3>{allUserCount}</h3>
    </div>
  );
};

export default Admin;
