import { supabase } from '../../tools/supabaseClient';
import React, { useEffect, useState } from 'react';
import { USER_DONE_TEST_TABLE } from '../../tools/auth';
import { TESTS } from '../../api/TESTS';
import RenderProgressBar from './RenderProgressBar';
import { Button, Segmented } from 'antd';
import UserDoneTestRenderer from './UserDoneTestRenderer';
import RadarChartRenderer from './RadarChartRenderer';
import { HomeFilled, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const UserDoneTestList = ({ user, isMyPage, texts, currentLanguage }) => {
  const navigate = useNavigate();
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

  const [testListMode, setTestListMode] = useState(texts[4]);

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
              (t) => t.info.mainUrl === test.test_query // not apply language options for DONE TESTS to show all done tests of the user
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
              ) && test.info.lang === currentLanguage // apply only for the selected language of the user
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
  }, [user, currentLanguage]);

  return (
    <div>
      <h2>{texts[1]}</h2>
      {userDoneTests?.length >= 5 ? (
        <>
          <RadarChartRenderer mbtiScores={mbtiScores} />
          <div style={{ maxWidth: '400px', margin: '20px auto 80px' }}>
            <RenderProgressBar left='E' right='I' mbtiScores={mbtiScores} />
            <RenderProgressBar left='S' right='N' mbtiScores={mbtiScores} />
            <RenderProgressBar left='T' right='F' mbtiScores={mbtiScores} />
            <RenderProgressBar left='J' right='P' mbtiScores={mbtiScores} />
          </div>
        </>
      ) : (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              color: 'black',
              fontSize: '1.5rem',
              textAlign: 'center',
              lineHeight: '2rem',
              width: '70%',
            }}
          >
            {texts[6]}
            <br />
            <br />
            <LockOutlined />
            <br />
            <br />
            <Button
              style={{
                backgroundColor: '#E62182',
                color: 'white',
                fontSize: '1.1rem',
                height: '2.5rem',
              }}
              onClick={() => navigate('/')}
            >
              {texts[7]}
              <HomeFilled />
            </Button>
          </div>
          <div style={{ filter: 'blur(15px)' }}>
            <RadarChartRenderer mbtiScores={mbtiScores} />
            <div style={{ maxWidth: '400px', margin: '20px auto 80px' }}>
              <RenderProgressBar left='E' right='I' mbtiScores={mbtiScores} />
              <RenderProgressBar left='S' right='N' mbtiScores={mbtiScores} />
              <RenderProgressBar left='T' right='F' mbtiScores={mbtiScores} />
              <RenderProgressBar left='J' right='P' mbtiScores={mbtiScores} />
            </div>
          </div>
        </div>
      )}

      {isMyPage ? (
        <div>
          <h2>{texts[2]}</h2>
          <div style={{ width: '15rem', margin: '0 auto' }}>
            <Segmented
              block
              value={testListMode}
              options={[texts[3], texts[4]]}
              onChange={(value) => {
                setTestListMode(value);
              }}
            />
          </div>
          <UserDoneTestRenderer
            testList={
              testListMode === texts[3] ? userDoneTests : userNotDoneTests
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default UserDoneTestList;
