import React, { useEffect, useMemo, useState } from 'react';
import {
  checkAdminUser,
  getAllUserNumber,
  getAllUsers,
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
        label: 'My First Dataset',
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
      <h1>KTEST DASHBOARD</h1>
      <h2>All User Count</h2>
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
    </div>
  );
};

export default Admin;
