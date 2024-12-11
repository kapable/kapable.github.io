import { Col, Row } from 'antd';
import React from 'react';

const MBTITypes = ({ myType, yourType }) => {
  return (
    <div>
      <img
        style={{ width: '100%', borderRadius: '1rem' }}
        src='https://images.ktestone.com/meta/compatibility/compatibility-result-top.jpg'
        alt='result-top'
      />
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
