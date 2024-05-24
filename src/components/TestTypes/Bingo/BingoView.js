import React, { useEffect, useRef } from 'react';
import BingoTable from './BingoTable';
import { shuffleArray } from '../../../tools/tools';
import styles from './bingo.module.css';

const BingoView = ({ currentBingo }) => {
  const mainImgRef = useRef(null);
  useEffect(() => {
    mainImgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  return (
    <div className={styles.viewTopDiv}>
      <img
        ref={mainImgRef}
        src={`https://images.ktestone.com/meta/bingo/${currentBingo.title}-upper-banner.jpg`}
        alt='bingo1-intro'
        className={styles.tableTopDiv}
        style={{ marginBottom: 0 }}
      />
      <BingoTable
        title={currentBingo.title}
        size={currentBingo.size}
        contents={
          currentBingo.shuffle
            ? shuffleArray(currentBingo.contents)
            : currentBingo.contents
        }
      />
    </div>
  );
};

export default BingoView;
