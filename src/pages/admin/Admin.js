import React, { useEffect, useMemo, useState } from 'react';
import {
  checkAdminUser,
  getAllUserNumber,
  getAllUsers,
  overNcountUsers,
} from '../../tools/auth';
import { useNavigate } from 'react-router';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Admin = () => {
  const navigate = useNavigate();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [allUserCount, setAllUserCount] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [allUserDoneCount, setAllUserDoneCount] = useState([]);

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
      getAllUsers().then((data) => {
        setAllUsers(data);
      });
      overNcountUsers().then((data) => setAllUserDoneCount(data));
    }
  }, [isAdminUser]);

  const dailyCounts = useMemo(() => {
    // Group data by date
    const counts = allUsers.reduce((acc, item) => {
      // Convert UTC string to date string (YYYY-MM-DD)
      const date = new Date(item.created_at).toISOString().split('T')[0];

      // Increment count for this date
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    // Convert to array and sort by date
    return Object.entries(counts)
      .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
      .map(([date, count]) => ({ date, count }));
  }, [allUsers]);

  const data = {
    labels: dailyCounts?.map((data) => data?.date),
    datasets: [
      {
        label: '일별 가입자수',
        data: dailyCounts?.map((data) => data?.count),
        fill: false,
        borderColor: '#e62182',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>KTEST 대시보드</h1>
      <h2>총 가입자수</h2>
      <h3>{allUserCount}</h3>
      <Line
        style={{
          width: '100%',
          maxWidth: '25rem',
          height: '100%',
          margin: '0 auto',
        }}
        data={data}
        options={options}
      />
      <h2>5개 이상 테스트 유저 비율</h2>
      <h3>테스트 했던 유저 中</h3>
      {allUserDoneCount?.filter((data) => data.count >= 5)?.length}/
      {allUserDoneCount?.length}
      <br />
      {(allUserDoneCount?.filter((data) => data.count >= 5)?.length /
        allUserDoneCount?.length) *
        100}{' '}
      %<h3>총 유저 中</h3>
      {allUserDoneCount?.filter((data) => data.count >= 5)?.length}/
      {allUserCount}
      <br />
      {(allUserDoneCount?.filter((data) => data.count >= 5)?.length /
        allUserCount) *
        100}{' '}
      %
    </div>
  );
};

export default Admin;
