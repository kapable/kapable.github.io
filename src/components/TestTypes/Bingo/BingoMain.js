import React, { useState } from 'react';
import { bingo } from '../../../api/BINGO';
import BingoIntro from './BingoIntro';
import BingoView from './BingoView';
import { Helmet } from 'react-helmet-async';

const BingoMain = ({ title }) => {
  const [currentBingo] = useState(bingo.find((elem) => elem.title === title));
  const [mode, setMode] = useState('intro');
  const metaTagRenderer = (title) => {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>이상형 빙고판 - 케이테스트</title>
        <meta name='title' content={'이상형 빙고판 - 케이테스트'} />
        <meta
          name='description'
          content={'나의 이상형을 빙고판에 체크해보자!'}
          data-react-helmet='true'
        />
        <link rel='main-url' href={`https://ktestone.com/${title}/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://ktestone.com/${title}/`} />
        <meta property='og:title' content={'이상형 빙고판 - 케이테스트'} />
        <meta
          property='og:description'
          content={'나의 이상형을 빙고판에 체크해보자!'}
        />
        <meta
          property='og:image'
          content={`https://images.ktestone.com/main-thumbnail/${title}-thumb.png`}
        />
        <meta property='og:image:alt' content={'이상형 빙고판 - 케이테스트'} />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://ktestone.com/${title}/`}
        />
        <meta property='twitter:title' content={'이상형 빙고판 - 케이테스트'} />
        <meta
          property='twitter:description'
          content={'나의 이상형을 빙고판에 체크해보자!'}
        />
        <meta
          property='twitter:image'
          content={`https://images.ktestone.com/main-thumbnail/${title}-thumb.png`}
        />
        <meta
          property='twitter:image:alt'
          content={'이상형 빙고판 - 케이테스트'}
        />
      </Helmet>
    );
  };
  if (mode === 'intro') {
    return (
      <>
        {metaTagRenderer(title)}
        <BingoIntro title={title} setMode={setMode} lang={currentBingo.lang} />
      </>
    );
  } else if (mode === 'start') {
    return <BingoView currentBingo={currentBingo} />;
  }
};

export default BingoMain;
