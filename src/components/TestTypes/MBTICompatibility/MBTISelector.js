import React from 'react';
import { Col, Row, Select } from 'antd';

const MBTISelector = ({ mbti_array, setMyType, setYourType }) => {
  return (
    <div style={{ margin: '3rem auto' }}>
      <Row align={'middle'} justify={'center'}>
        <Col span={11}>
          <div style={{ margin: '0.5rem auto' }}>나</div>
          <Select
            style={{
              width: '100%',
            }}
            options={mbti_array}
            defaultValue={mbti_array[0]}
            onChange={(value) => setMyType(value)}
          />
        </Col>
        <Col span={2}>
          <div style={{ margin: '0.5rem auto' }}>&nbsp;</div>+
        </Col>
        <Col span={11}>
          <div style={{ margin: '0.5rem auto' }}>상대방</div>
          <Select
            style={{
              width: '100%',
            }}
            options={mbti_array}
            defaultValue={mbti_array[0]}
            onChange={(value) => setYourType(value)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MBTISelector;
