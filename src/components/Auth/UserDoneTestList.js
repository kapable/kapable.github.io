import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { USER_DONE_TEST_TABLE } from '../../tools/auth';
import { TESTS } from '../../api/TESTS';

const UserDoneTestList = () => {
  const [userDoneTests, setUserDoneTests] = useState([]);
  const [user, setUser] = useState(null);
  const [mbtiScores, setMbtiScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);
  useEffect(() => {
    if (user) {
      const fetchUserDoneTests = async () => {
        const { data, error } = await supabase
          .from(USER_DONE_TEST_TABLE)
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching user done tests:', error);
        } else {
          const testsWithDetails = data.map((test) => {
            const testDetails = TESTS.find(
              (t) => t.info.mainUrl === test.test_query
            );
            return {
              ...test,
              testName: testDetails
                ? testDetails.info.mainTitle
                : 'Unknown Test',
              resultName: testDetails
                ? testDetails.results.find((r) => r.query === test.result_query)
                    ?.type
                : 'Unknown Result',
              thumbImage: testDetails
                ? testDetails.info.thumbImage
                : 'Unknown Image',
            };
          });
          // Calculate MBTI scores
          const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
          testsWithDetails.forEach((test) => {
            if (test.result_query && test.result_query.length === 4) {
              test.result_query.split('').forEach((letter) => {
                scores[letter]++;
              });
            }
          });
          setMbtiScores(scores);

          setUserDoneTests(testsWithDetails);
        }
      };
      fetchUserDoneTests();
    }
  }, [user]);

  const renderProgressBar = (left, right) => {
    const total = mbtiScores[left] + mbtiScores[right];
    const leftPercentage = total > 0 ? (mbtiScores[left] / total) * 100 : 50;
    const rightPercentage = 100 - leftPercentage;

    const getColor = (letter) => {
      const colors = {
        E: '#FF6B6B',
        I: '#4ECDC4',
        S: '#45B7D1',
        N: '#FFA07A',
        T: '#98D8C8',
        F: '#F06292',
        J: '#AED581',
        P: '#FFD54F',
      };
      return colors[letter];
    };

    const winningColor =
      leftPercentage >= 50 ? getColor(left) : getColor(right);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <span
          style={{
            width: '70px',
            fontWeight: 'bold',
            textAlign: 'right',
          }}
        >
          {leftPercentage.toFixed(0)}% {left}
        </span>
        <div
          style={{
            flex: 1,
            height: '20px',
            background: '#e0e0e0',
            borderRadius: '10px',
            overflow: 'hidden',
            margin: '0 10px',
          }}
        >
          <div
            style={{
              width: `${leftPercentage}%`,
              height: '100%',
              background: leftPercentage >= 50 ? winningColor : '#CCCCCC',
            }}
          ></div>
        </div>
        <span
          style={{
            width: '70px',
            fontWeight: 'bold',
          }}
        >
          {right} {rightPercentage.toFixed(0)}%
        </span>
      </div>
    );
  };

  return (
    <div>
      <h2>내 MBTI 성향</h2>
      <div style={{ maxWidth: '400px', margin: '20px auto' }}>
        {renderProgressBar('E', 'I')}
        {renderProgressBar('S', 'N')}
        {renderProgressBar('T', 'F')}
        {renderProgressBar('J', 'P')}
      </div>
      <ul>
        {userDoneTests.map((test) => (
          <li key={test.id}>
            <a href={`/kapable.github.io/${test.test_query}`}>
              <img
                style={{ width: '20rem' }}
                src={test.thumbImage}
                alt={test.testName}
              />
            </a>{' '}
            - {test.result_query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDoneTestList;
