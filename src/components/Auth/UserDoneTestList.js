import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { USER_DONE_TEST_TABLE } from '../../tools/auth';
import { TESTS } from '../../api/TESTS';
import RenderProgressBar from './RenderProgressBar';

const UserDoneTestList = ({ user }) => {
  const [userDoneTests, setUserDoneTests] = useState([]);
  // const [user, setUser] = useState(null);
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
  // useEffect(() => {
  //   const checkUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     setUser(user);
  //   };
  //   checkUser();
  // }, []);
  useEffect(() => {
    if (user) {
      const fetchUserDoneTests = async () => {
        const { data, error } = await supabase
          .from(USER_DONE_TEST_TABLE)
          .select('*')
          // .eq('user_id', user.user_id);
          .eq('user_id', 'bba4a301-b829-4d4c-a5a1-c0ae4861c6a3');

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

  return (
    <div>
      <h2>내 MBTI 성향</h2>
      <div style={{ maxWidth: '400px', margin: '20px auto 80px' }}>
        <RenderProgressBar left='E' right='I' mbtiScores={mbtiScores} />
        <RenderProgressBar left='S' right='N' mbtiScores={mbtiScores} />
        <RenderProgressBar left='T' right='F' mbtiScores={mbtiScores} />
        <RenderProgressBar left='J' right='P' mbtiScores={mbtiScores} />
      </div>

      <h2>내가 한 테스트</h2>
      {userDoneTests
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((test) => (
          <div key={test.id}>
            <a href={`/kapable.github.io/${test.test_query}`}>
              <img
                style={{ width: '20rem' }}
                src={test.thumbImage}
                alt={test.testName}
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default UserDoneTestList;
