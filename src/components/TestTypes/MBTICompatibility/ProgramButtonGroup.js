import { Button } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

const ProgramButtonGroup = ({
  myTypes,
  yourTypes,
  setMode,
  mode,
  setMyType,
  setYourType,
}) => {
  const navigate = useNavigate();
  const onSubmitClick = useCallback(() => {
    if (!myTypes || !yourTypes) {
      alert('나와 상대방의 MBTI를 선택해주세요!');
      return;
    }
    setMode('loading');
  }, [myTypes, yourTypes, setMode]);
  const onRedoClick = useCallback(() => {
    setMyType('');
    setYourType('');
    setMode('intro');
  }, [setMyType, setYourType, setMode]);

  useEffect(() => {
    let setTimeoutId;
    if (mode === 'loading') {
      setTimeoutId = setTimeout(() => {
        navigate(`/compatibility/${myTypes}-${yourTypes}`, {
          state: { myTypes, yourTypes },
        });
        // navigate(`/${title}/result/`, {
        //   state: {
        //     title,
        //     contents,
        //     selectedNumArray,
        //     size,
        //   },
        // });
        return () => {
          clearTimeout(setTimeoutId);
        };
      }, 3000);
    }
  }, [mode, myTypes, yourTypes, navigate]);

  return (
    <div>
      {mode !== 'intro' && (
        <Button
          color='primary'
          variant='filled'
          style={{ width: '100%', height: '3rem', marginBottom: '1rem' }}
          onClick={onRedoClick}
        >
          다시 고르기
        </Button>
      )}
      <Button
        type='primary'
        style={{ width: '100%', height: '3rem' }}
        onClick={onSubmitClick}
      >
        결과보기
      </Button>
    </div>
  );
};

export default ProgramButtonGroup;
