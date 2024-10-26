import React, { useEffect, useState } from 'react';
import { supabase } from '../../tools/supabaseClient';
import { USER_DONE_TEST_TABLE } from '../../tools/auth';
import { TESTS } from '../../api/TESTS';
import RenderProgressBar from './RenderProgressBar';
import { Segmented } from 'antd';
import UserDoneTestRenderer from './UserDoneTestRenderer';

const UserDoneTestList = ({ user, isMyPage }) => {
  const [userDoneTests, setUserDoneTests] = useState([]);
  const [userNotDoneTests, setUserNotDoneTests] = useState([]);
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

  const [testListMode, setTestListMode] = useState('테스트 미개봉');

  useEffect(() => {
    if (user) {
      const fetchUserDoneTests = async () => {
        const { data, error } = await supabase
          .from(USER_DONE_TEST_TABLE)
          .select('*')
          .eq('user_id', user.user_id);

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
          // Filter out tests that are not done by the user
          const notDoneTestsWithDetails = TESTS.filter(
            (test) =>
              !data.some(
                (doneTest) => doneTest.test_query === test.info.mainUrl
              )
          ).map((test) => ({
            testName: test.info.mainTitle,
            test_query: test.info.mainUrl,
            thumbImage: test.info.thumbImage,
          }));

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
          setUserNotDoneTests(notDoneTestsWithDetails);
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

      {isMyPage ? (
        <div>
          <h2>내가 한 테스트</h2>
          <div style={{ width: '15rem', margin: '0 auto' }}>
            <Segmented
              block
              value={testListMode}
              options={['테스트 개봉', '테스트 미개봉']}
              onChange={(value) => {
                setTestListMode(value);
              }}
            />
          </div>
          <UserDoneTestRenderer
            testList={
              testListMode === '테스트 개봉' ? userDoneTests : userNotDoneTests
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default UserDoneTestList;
