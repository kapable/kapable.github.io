import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import styles from './bingo.module.css';

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
      <div className={styles.loadingDiv}>
        <Lottie options={defaultOptions} height={120} width={120} />
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.tableTopDiv}>
          <div className={styles.tableRowDiv}>
            {Array.from({ length: size[0] })
              .map((_, i) => i)
              .map((col) => (
                <div
                  className={styles.tableColDiv}
                  style={{ width: `${widthSize}%` }}
                  key={`${col}-col`}
                >
                  {Array.from({ length: size[1] })
                    .map((_, i) => i)
                    .map((row) => {
                      const contents_idx = col * size[1] + row;
                      return (
                        <div
                          className={styles.tableContentsDiv}
                          style={{
                            cursor: resultSelectedNumArray ? null : 'pointer',
                          }}
                          key={`${row}-row`}
                          onClick={() => onCellClick(contents_idx)}
                        >
                          {contents[contents_idx]}
                          {selectedNumArray.includes(contents_idx) ? (
                            <img
                              className={styles.circleImg}
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
