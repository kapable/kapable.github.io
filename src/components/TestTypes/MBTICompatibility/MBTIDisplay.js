import { Col, Row } from 'antd';
import React from 'react';
import style from './mbtiSelector.module.css';

const MBTIDisplay = ({ myTypes, yourTypes }) => {
  return (
    <div>
      <Row align={'middle'} justify={'center'}>
        <Col
          span={11}
          style={{
            borderRadius: '1rem',
            margin: '2rem auto',
            backgroundColor: '#ffdce5',
          }}
        >
          <div className={style.mbtiTypeDisplayTitle}>나의 MBTI</div>
          <p className={style.mbtiTypeDisplay}>{myTypes}</p>
        </Col>
        <Col
          span={11}
          style={{
            borderRadius: '1rem',
            margin: '2rem auto',
            backgroundColor: '#ffdce5',
          }}
        >
          <div className={style.mbtiTypeDisplayTitle}>상대방 MBTI</div>
          <p className={style.mbtiTypeDisplay}>{yourTypes}</p>
        </Col>
      </Row>
    </div>
  );
};

export default MBTIDisplay;
