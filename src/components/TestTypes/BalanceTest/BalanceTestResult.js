import React, { Fragment, useCallback, useEffect } from 'react';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import './balanceTest.css';
import ShareGroup from '../../Basic/ShareGroup';
import GoToHomeBtn from '../../Sub/GoToHomeBtn';
import CopyToClipboard from 'react-copy-to-clipboard';
import { _eventSenderGA } from '../../../tools/tools';
import OtherTestBannerRenderer from '../../Sub/OtherTestBannerRenderer';
import { useLocation, useNavigate } from 'react-router-dom';

const BalanceTestResult = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state) {
      alert('잘못된 경로로 들어오셨습니다! 게임 첫 페이지로 돌아갑니다!');
      navigate(`/${title}/`);
    }
  }, [navigate, location, title]);

  const _onShareButtonClick = useCallback(() => {
    _eventSenderGA('Sharing', 'Click Copy-link Button', 'result page');
    alert('링크가 복사됐어요!');
  }, []);

  const _onBackToStartButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Re-test Button', 'result page');
    navigate(`/${title}/`);
  }, [navigate, title]);

  const _onBackToMainButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Back-to-main Button', 'result page');
    navigate(`/kapable.github.io/${location?.state?.lang || 'Kor'}`);
  }, [navigate, location.state.lang]);

  return (
    <div className='result-div'>
      <img
        className='result-upper-banner'
        src={`https://images.ktestone.com/meta/balanceTest/${title}-upper-banner.jpg`}
        alt={`${title}-upper-banner`}
      />
      <div className='result-contents-div'>
        {location?.state?.resultArray.map((result, idx) => (
          <div className='result-row-div' key={`${idx}-row-key`}>
            {location.state.questions[idx].options.map((option, optionIdx) => (
              <Fragment key={`${option}-key`}>
                <div className='result-paragraph-div'>
                  <p
                    className='result-paragraph'
                    style={{
                      color: result === optionIdx ? '#db0253' : 'grey',
                      fontWeight: result === optionIdx ? 'bold' : null,
                    }}
                  >
                    {option}
                  </p>
                </div>
                {optionIdx === 0 ? (
                  result === 0 ? (
                    <label className='toggle'>
                      <input
                        role='switch'
                        type='checkbox'
                        className='checked-input checked-input-0'
                      />
                    </label>
                  ) : (
                    <label className='toggle'>
                      <input
                        role='switch'
                        type='checkbox'
                        className='checked-input checked-input-1'
                      />
                    </label>
                  )
                ) : null}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
      <div className='share'>
        <h5
          className='share-title'
          style={{ fontWeight: 'bold', color: '#db0253' }}
        >
          {location?.state?.lang === 'Kor'
            ? '* 위 결과를 캡쳐해서 친구에게 공유해보세요!'
            : '* Capture the above results and share them with your friends!'}
        </h5>
        <ShareGroup
          link={`https://ktestone.com/kapable.github.io/${title}/`}
          testTitle={title}
        />
        <div className='share'>
          <CopyToClipboard
            text={`https://ktestone.com/kapable.github.io/${title}/`}
          >
            <img
              loading='lazy'
              src={COPYBTN}
              onClick={_onShareButtonClick}
              className='share-btn-img'
              alt='링크 복사'
            />
          </CopyToClipboard>
        </div>
        <div className='re-test-btn'>
          <img
            loading='lazy'
            src={AGAINBTN}
            className='re-test-btn-img'
            onClick={_onBackToStartButtonClick}
            alt='테스트 다시하기'
          />
        </div>
      </div>
      <div style={{ marginBottom: '2rem' }} className='back-to-main'>
        <img
          loading='lazy'
          src={TOHOMEBTN}
          onClick={_onBackToMainButtonClick}
          className='back-to-main-btn-img'
          alt='다른 테스트 하러가기'
        />
      </div>
      <GoToHomeBtn page={`${title} answer`} />
      <OtherTestBannerRenderer
        lang={location?.state?.lang || 'Eng'}
        mainUrl={title}
      />
    </div>
  );
};

export default BalanceTestResult;
