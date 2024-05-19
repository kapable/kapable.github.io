import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const BingoTable = ({ title, size, contents, resultSelectedNumArray }) => {
  const navigate = useNavigate();
  const widthSize = 100 / size[1];
  const [checkedArray, setCheckedArray] = useState(
    Array.from({ length: contents.length }).map((_, i) => false)
  );
  const [selectedNumArray, setSelectedNumArray] = useState(
    resultSelectedNumArray ? resultSelectedNumArray : []
  );
  const [isLoading, setIsLoading] = useState(false);

  const onCellClick = useCallback(
    (contents_idx) => {
      if (resultSelectedNumArray) {
        return null;
      }
      if (selectedNumArray.includes(contents_idx)) {
        let temp_array = selectedNumArray;
        temp_array = temp_array.filter((el) => el !== contents_idx);
        setSelectedNumArray(temp_array);
      } else {
        setSelectedNumArray((prev) => [...prev, contents_idx]);
      }
    },
    [resultSelectedNumArray, selectedNumArray, setSelectedNumArray]
  );
  const onCompleteButtonClick = () => {
    setIsLoading(true);
  };
  useEffect(() => {
    setCheckedArray(checkedArray);
  }, [checkedArray]);
  useEffect(() => {
    let setTimeoutId;
    if (isLoading) {
      setTimeoutId = setTimeout(() => {
        navigate(`/${title}/result/`, {
          state: {
            title,
            contents,
            selectedNumArray,
            size,
          },
        });
        return () => {
          clearTimeout(setTimeoutId);
        };
      }, 3000);
    }
  }, [navigate, title, isLoading, contents, selectedNumArray, size]);
  if (isLoading) {
    return (
      <div style={{ margin: '13rem auto' }}>
        <Lottie options={defaultOptions} height={120} width={120} />
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            width: '100%',
            margin: '5rem auto',
            maxWidth: '45rem',
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              margin: '0 auto',
            }}
          >
            {Array.from({ length: size[0] })
              .map((_, i) => i)
              .map((col) => (
                <div
                  style={{
                    textAlign: 'center',
                    border: '1px solid #E82383',
                    width: `${widthSize}%`,
                  }}
                  key={`${col}-col`}
                >
                  {Array.from({ length: size[1] })
                    .map((_, i) => i)
                    .map((row) => {
                      const contents_idx = col * size[1] + row;
                      return (
                        <div
                          style={{
                            position: 'relative',
                            cursor: resultSelectedNumArray ? null : 'pointer',
                            alignContent: 'center',
                            height: '5rem',
                            wordBreak: 'keep-all',
                            margin: '0 auto',
                            border: '0.5px solid #E82383',
                            borderLeft: '0.025px',
                            borderRight: '0.025px',
                            padding: '0.2rem',
                            color: 'black',
                          }}
                          key={`${row}-row`}
                          onClick={() => onCellClick(contents_idx)}
                        >
                          {contents[contents_idx]}
                          {selectedNumArray.includes(contents_idx) ? (
                            <img
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                alignContent: 'center',
                                mixBlendMode: 'multiply',
                              }}
                              src='https://thumbs.dreamstime.com/z/circle-pen-draw-concept-d-illustration-isolated-circle-pen-draw-concept-d-illustration-isolated-white-background-138765708.jpg?w=768'
                              alt='asdfasdf'
                            />
                          ) : null}
                        </div>
                      );
                    })}
                </div>
              ))}
          </div>
        </div>
        {resultSelectedNumArray ? null : (
          <>
            <button onClick={onCompleteButtonClick}>빙고 완성하기</button>
            <p>* 버튼 클릭 후 결과가 보이지 않을 경우 새로고침을 눌러주세요!</p>
          </>
        )}
      </div>
    );
  }
};

export default BingoTable;
