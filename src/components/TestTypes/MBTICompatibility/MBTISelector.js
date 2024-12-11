import React from 'react';
import { Col, Row } from 'antd';
import style from './mbtiSelector.module.css';

const MBTISelector = ({
  mbti_array,
  myTypes,
  yourTypes,
  setMyType,
  setYourType,
  mode,
  setMode,
}) => {
  const onSelectMyType = (item) => {
    setMyType(item.value);
    setMode('your');
  };

  const onSelectYourType = (item) => {
    setYourType(item.value);
    // setMode('loading');
  };
  return (
    <div style={{ margin: '0 auto 3rem' }}>
      {/* <Row align={'middle'} justify={'center'}>
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
      </Row> */}
      {mode === 'intro' ? (
        <h3 className={style.selectorTitle}>내 MBTI 고르기</h3>
      ) : (
        <h3 className={style.selectorTitle}>상대방 MBTI 고르기</h3>
      )}
      <Row align={'middle'} justify={'center'} gutter={16}>
        {mbti_array?.map((item) => (
          <Col
            key={item.value}
            span={5}
            className={style.mbtiCol}
            style={
              (myTypes === item.value || yourTypes === item.value) && {
                backgroundColor: '#ff5486',
                color: 'white',
              }
            }
            onClick={
              mode === 'intro'
                ? () => onSelectMyType(item)
                : () => onSelectYourType(item)
            }
          >
            {item.value}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MBTISelector;
