import React, { Fragment } from 'react';
import AdsenseAdvertiser from '../Sub/AdsenseAdvertiser';
import GoToHomeBtn from '../Sub/GoToHomeBtn';
import { randomGamesRoutes } from '../../api/RANDOMGAME';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AlcoholGames = () => {
  const mainMetaTagRenderer = () => {
    const _metaTag = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>술자리 게임 테스트 - 케이테스트</title>
        <meta name='title' content='술자리 게임 테스트 - 케이테스트' />
        <meta
          name='description'
          content='술자리 게임 테스트 - 케이테스트 | 아재 개그 맞추기 | 노래 제목 맞추기'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com/alcoholGames/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/alcoholGames/' />
        <meta property='og:title' content='술자리 게임 테스트 - 케이테스트' />
        <meta
          property='og:description'
          content='술자리 게임 테스트 - 케이테스트 | 아재 개그 맞추기 | 노래 제목 맞추기'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/default/alcoholGames-main-header.png'
        />
        <meta
          property='og:image:alt'
          content='술자리 게임 테스트 - 케이테스트 | 아재 개그 맞추기 | 노래 제목 맞추기'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://ktestone.com/alcoholGames/'
        />
        <meta
          property='twitter:title'
          content='술자리 게임 테스트 - 케이테스트'
        />
        <meta
          property='twitter:description'
          content='술자리 게임 테스트 - 케이테스트 | 아재 개그 맞추기 | 노래 제목 맞추기'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/default/alcoholGames-main-header.png'
        />
        <meta
          property='twitter:image:alt'
          content='술자리 게임 테스트 - 케이테스트 | 아재 개그 맞추기 | 노래 제목 맞추기'
        />
      </Helmet>
    );
    return _metaTag;
  };
  return (
    <Fragment>
      {mainMetaTagRenderer()}
      <img
        loading='lazy'
        className='test-main-img'
        style={{ cursor: 'default' }}
        src={`https://images.ktestone.com/default/alcoholGames-main-header.png`}
        alt='alcoholGames'
      />
      {randomGamesRoutes.map((route, idx) => (
        <Fragment key={`${route}-thumb-frag`}>
          <Link className='main-link-block' to={`/${route}/`}>
            <img
              style={{ border: '1px solid lightgrey', borderRadius: '2rem' }}
              loading='lazy'
              className='test-main-img'
              src={`https://images.ktestone.com/main-thumbnail/${route}-thumb.png`}
              alt={`${route}-thumb-img`}
            />
          </Link>
          {idx % 2 === 0 ? (
            <AdsenseAdvertiser
              client={`ca-pub-2382342018701919`}
              slot={'9210802615'}
              format='auto'
              responsive='true'
              style={{ display: 'block' }}
            />
          ) : null}
        </Fragment>
      ))}
      <GoToHomeBtn page={`alcoholGames intro`} />
    </Fragment>
  );
};

export default AlcoholGames;
