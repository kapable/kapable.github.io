import React, { Fragment } from 'react';
import AdsenseAdvertiser from './AdsenseAdvertiser';
import { TESTS } from '../../api/TESTS';
import { difficulties } from '../../api/COLORPICKING';
import { _eventSenderGA } from '../../tools/tools';
import { balanceTests } from '../../api/BALANCEGAME';
import { bingo } from '../../api/BINGO';

const OtherTestBannerRenderer = ({ lang, mainUrl }) => {
  const current_lang = lang;
  const bingoListArray = bingo.filter(
    (item) => item.lang === lang && item.title !== mainUrl
  );
  const bottom_test_list = TESTS.filter(
    (item) => item.info.lang === current_lang && item.info.mainUrl !== mainUrl
  );
  // const bottom_test_name_list = bottom_test_list.map((li) => li.info.mainUrl);
  const colorPickerArray = difficulties.filter(
    (item) =>
      item.lang === current_lang && `colorPicker${item.difficulty}` !== mainUrl
  );
  const balanceTestArray = balanceTests
    .filter((item) => item.info.lang === lang && item.info.mainUrl !== mainUrl)
    .reverse();
  return (
    <Fragment>
      {mainUrl.includes('Bingo') ? (
        <>
          {bingoListArray.map((test) => {
            return (
              <Fragment key={test.title + '-test-key'}>
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
                  key={test.title + '-adsense'}
                  client={`ca-pub-2382342018701919`} //5142864985628271
                  slot={'9210802615'} //7281907187
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              </Fragment>
            );
          })}
          {bottom_test_list.map((test) => {
            return (
              <Fragment key={test?.info?.mainUrl + '-test-key'}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://ktestone.com/kapable.github.io/${test?.info?.mainUrl}/`}
                  className='to-ppl-banner-text'
                >
                  {' '}
                  <img
                    loading='lazy'
                    src={`https://images.ktestone.com/main-thumbnail/${test?.info?.thumbImage}`}
                    className='ppl-banner-img'
                    alt={`${test?.info?.mainTitle}-thumb`}
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
                  key={test?.info?.mainUrl + '-adsense'}
                  client={`ca-pub-2382342018701919`} //5142864985628271
                  slot={'9210802615'} //7281907187
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              </Fragment>
            );
          })}
        </>
      ) : (
        <>
          {bottom_test_list.map((test) => {
            return (
              <Fragment key={test?.info?.mainUrl + '-test-key'}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://ktestone.com/kapable.github.io/${test?.info?.mainUrl}/`}
                  className='to-ppl-banner-text'
                >
                  {' '}
                  <img
                    loading='lazy'
                    src={`https://images.ktestone.com/main-thumbnail/${test?.info?.thumbImage}`}
                    className='ppl-banner-img'
                    alt={`${test?.info?.mainTitle}-thumb`}
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
                  key={test?.info?.mainUrl + '-adsense'}
                  client={`ca-pub-2382342018701919`} //5142864985628271
                  slot={'9210802615'} //7281907187
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              </Fragment>
            );
          })}
          {bingoListArray.map((test) => {
            return (
              <Fragment key={test.title + '-test-key'}>
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
                  key={test.title + '-adsense'}
                  client={`ca-pub-2382342018701919`} //5142864985628271
                  slot={'9210802615'} //7281907187
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              </Fragment>
            );
          })}
        </>
      )}
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
      <>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`https://ktestone.com/kapable.github.io/maleFemaleChar${lang === 'Kor' ? '' : lang}/`}
          className='to-ppl-banner-text'
        >
          {' '}
          <img
            loading='lazy'
            src={`https://images.ktestone.com/main-thumbnail/maleFemaleChar${lang === 'Kor' ? '' : lang}-thumb.png`}
            className='ppl-banner-img'
            alt={'maleFemaleChar'}
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
      </>
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
    </Fragment>
  );
};

export default OtherTestBannerRenderer;
