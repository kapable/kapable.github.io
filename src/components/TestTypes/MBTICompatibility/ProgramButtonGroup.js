import { Button } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

const ProgramButtonGroup = ({ myTypes, yourTypes, setMode, mode }) => {
  const navigate = useNavigate();
  const onSubmitClick = useCallback(() => {
    if (!myTypes || !yourTypes) {
      alert('나와 상대방의 MBTI를 선택해주세요!');
      return;
    }
    setMode('loading');
  }, [myTypes, yourTypes, setMode]);
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
