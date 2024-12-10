import { Col, Row } from 'antd';
import React from 'react';

const MBTITypes = ({ myType, yourType }) => {
  return (
    <div>
      <h1>MBTI 연애 궁합 테스트 결과</h1>
      <h3 style={{ color: '#E71C83' }}>by 케이테스트</h3>
      <Row
        style={{
          border: '1px solid black',
          borderRadius: '1rem',
          margin: '1.5rem auto',
          padding: '1rem',
        }}
      >
        <Col span={11}>
          <div>나의 MBTI</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{myType}</div>
        </Col>
        <Col span={2}>
          <div>&nbsp;</div>+
        </Col>
        <Col span={11}>
          <div>상대 MBTI</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {yourType}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MBTITypes;
