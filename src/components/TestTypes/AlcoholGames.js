import React, { Fragment } from 'react';
import { bingo } from '../../api/BINGO';
import { _eventSenderGA } from '../../tools/tools';
import AdsenseAdvertiser from '../Sub/AdsenseAdvertiser';
import { balanceTests } from '../../api/BALANCEGAME';
import { difficulties } from '../../api/COLORPICKING';
import GoToHomeBtn from '../Sub/GoToHomeBtn';

const AlcoholGames = () => {
  const bingoListArray = bingo.filter((item) => item.lang === 'Kor');
  const balanceTestArray = balanceTests
    .filter((item) => item.info.lang === 'Kor')
    .reverse();
  const colorPickerArray = difficulties.filter((item) => item.lang === 'Kor');
  return (
    <Fragment>
      {/* TODO: ADD METATAG */}
      {bingoListArray.map((test) => {
        return (
          <Fragment key={test + '-test-key'}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://ktestone.com/${test.title}/`}
              className='to-ppl-banner-text'
            >
              {' '}
              <img
                loading='lazy'
                src={`https://images.ktestone.com/main-thumbnail/${test.title}-thumb.png`}
                className='ppl-banner-img'
                alt={`${test.title}-thumb`}
                onClick={() =>
                  _eventSenderGA(
                    'Paging',
                    'Click Go-another-Test-Banner Button',
                    'result page'
                  )
                }
              />{' '}
            </a>
            <AdsenseAdvertiser
              key={test + '-adsense'}
              client={`ca-pub-2382342018701919`} //5142864985628271
              slot={'9210802615'} //7281907187
              format='auto'
              responsive='true'
              style={{ display: 'block' }}
            />
          </Fragment>
        );
      })}
      {balanceTestArray.map((elem) => (
        <Fragment key={`${elem.info.mainUrl}-fragKey`}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`https://ktestone.com/kapable.github.io/${elem.info.mainUrl}/`}
            className='to-ppl-banner-text'
          >
            {' '}
            <img
              loading='lazy'
              src={`https://images.ktestone.com/main-thumbnail/${elem.info.mainUrl}-thumb.png`}
              className='ppl-banner-img'
              alt={'balanceTest'}
              onClick={() =>
                _eventSenderGA(
                  'Paging',
                  'Click Go-another-Test-Banner Button',
                  'result page'
                )
              }
            />{' '}
          </a>
          <AdsenseAdvertiser
            client={`ca-pub-2382342018701919`} //5142864985628271
            slot={'9210802615'} //7281907187
            format='auto'
            responsive='true'
            style={{ display: 'block' }}
          />
        </Fragment>
      ))}
      {colorPickerArray.map((elem) => (
        <Fragment key={`${elem.difficulty}-fragKey`}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`https://ktestone.com/kapable.github.io/colorPicker${elem.difficulty}/`}
            className='to-ppl-banner-text'
          >
            {' '}
            <img
              loading='lazy'
              src={`https://images.ktestone.com/main-thumbnail/colorPicker-${elem.difficulty}-thumb.png`}
              className='ppl-banner-img'
              alt={'colorPicker'}
              onClick={() =>
                _eventSenderGA(
                  'Paging',
                  'Click Go-another-Test-Banner Button',
                  'result page'
                )
              }
            />{' '}
          </a>
          <AdsenseAdvertiser
            client={`ca-pub-2382342018701919`} //5142864985628271
            slot={'9210802615'} //7281907187
            format='auto'
            responsive='true'
            style={{ display: 'block' }}
          />
        </Fragment>
      ))}
      <GoToHomeBtn page={`alcoholGames intro`} />
    </Fragment>
  );
};

export default AlcoholGames;