import { Col, Divider, Row } from 'antd';
import React from 'react';

const CompatibilityScores = ({ result }) => {
  const keyDict = {
    expression: '감정 표현 방식',
    intimacy: '의사소통 방식',
    resolution: '갈등 해결 능력',
    contribution: '장기연애 가능성',
    passion: '설렘 점수',
    understanding: '서로에 대한 이해',
    interest: '공통 관심사',
    date: '데이트 만족도',
    reliability: '신뢰 수준',
    marriage: '결혼 가능성 점수',
    discord: '불화 가능성 점수',
    stability: '감정적 안정성',
  };

  return (
    <div>
      <h1>{result?.keywords}</h1>
      <h2>연애 궁합 총점: {result?.total_score}점</h2>
      <Row gutter={16}>
        {Object.keys(result)?.map((key) => {
          if (
            key !== 'no' &&
            key !== 'keywords' &&
            key !== 'desc' &&
            key !== 'MBTI1' &&
            key !== 'MBTI2' &&
            key !== 'total_score'
          ) {
            return (
              <Col key={key} span={8}>
                <div
                  style={{
                    // backgroundColor:

                    border: '1px solid black',
                    borderRadius: '1rem',
                    padding: '0.1rem',
                    height: '7rem',
                    margin: '0.5rem auto',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {keyDict?.[key]}
                  </p>
                  <Divider />
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.3rem',
                      //   color:
                      //     result?.[key] >= 70
                      //       ? 'green'
                      //       : result?.[key] >= 45
                      //         ? 'gold'
                      //         : 'pink',
                    }}
                  >
                    {result?.[key]}점
                  </p>
                </div>
              </Col>
            );
          }
          return null;
        })}
      </Row>
    </div>
  );
};

export default CompatibilityScores;
