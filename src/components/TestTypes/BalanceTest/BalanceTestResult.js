import React, { Fragment, useCallback, useEffect } from 'react';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './balanceTest.css';
import ShareGroup from '../../BasicComponents/ShareGroup';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';
import CopyToClipboard from 'react-copy-to-clipboard';
import { _eventSenderGA } from '../../../tools/tools';
import AdsenseAdvertiser from '../../SubComponents/AdsenseAdvertiser';
import TESTS from '../../../api/TESTS';
import { difficulties } from '../../../api/COLORPICKING';

const BalanceTestResult = ({ title }) => {

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if(!location?.state) {
            alert('잘못된 경로로 들어오셨습니다! 게임 첫 페이지로 돌아갑니다!');
            history.push(`/${title}/`);
        }
    }, [history, location, title]);

    const _onShareButtonClick = useCallback(() => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "result page");
        alert("링크가 복사됐어요!");
    }, []);

    const _onBackToStartButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Re-test Button", "result page");
        history.push(`/${title}/`);
    }, [history, title]);

    const _onBackToMainButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "result page");
        history.push('/');
    }, [history]);

    const otherTestBannerRenderer = (lang) => {
        const current_lang = 'Kor';
        const bottom_test_list = TESTS.filter((item) => (item.info.lang === current_lang));
        const bottom_test_name_list =bottom_test_list.map((li) => li.info.mainUrl);
        const renderingArray = difficulties.filter((item) => item.lang === current_lang);
        return(
            <Fragment>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://ktestone.com/kapable.github.io/maleFemaleChar/`}
                    className="to-ppl-banner-text"
                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/maleFemaleChar-thumb.png`} className='ppl-banner-img' alt={'maleFemaleChar'} onClick={() => _eventSenderGA("Paging", "Click Go-another-Test-Banner Button", "result page")}/> </a>
                <AdsenseAdvertiser
                    client={`ca-pub-2382342018701919`} //5142864985628271
                    slot={"9210802615"} //7281907187
                    format="auto"
                    responsive="true"
                    style={{display:"block"}}
                />
                {renderingArray.map((elem) => (
                    <Fragment key={`${elem.difficulty}-fragKey`}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://ktestone.com/kapable.github.io/colorPicker${elem.difficulty}/`}
                            className="to-ppl-banner-text"
                        > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/colorPicker-${elem.difficulty}-thumb.png`} className='ppl-banner-img' alt={'colorPicker'} onClick={() => _eventSenderGA("Paging", "Click Go-another-Test-Banner Button", "result page")}/> </a>
                        <AdsenseAdvertiser
                            client={`ca-pub-2382342018701919`} //5142864985628271
                            slot={"9210802615"} //7281907187
                            format="auto"
                            responsive="true"
                            style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                        />
                    </Fragment>
                ))}
                {bottom_test_name_list.map((test) => (
                    <Fragment key={test + '-test-key'}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://ktestone.com/kapable.github.io/${test}/`}
                            className="to-ppl-banner-text"
                            > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={'another-Test'} onClick={() => _eventSenderGA("Paging", "Click Go-another-Test-Banner Button", "result page")}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client={`ca-pub-2382342018701919`} //5142864985628271
                                slot={"9210802615"} //7281907187
                                format="auto"
                                responsive="true"
                                style={{display:"block"}}
                            />
                    </Fragment>
                ))}
                </Fragment>
            )
        };


    return (
        <div className='result-div'>
            <div className='result-contents-div'>
                {location?.state?.resultArray.map((result, idx) => (
                    <div className='result-row-div' key={`${idx}-row-key`}>
                        {location.state.questions[idx].options.map((option, optionIdx) => (
                            <Fragment key={`${option}-key`}>
                                <div className='result-paragraph-div'>
                                    <p className='result-paragraph' style={{ color: result === optionIdx ? '#db0253' : 'grey', fontWeight: result === optionIdx ? 'bold' : null }}>{option}</p>
                                </div>
                                {optionIdx === 0 ?  (
                                    result === 0 ? (
                                        <label className='toggle'>
                                            <input role="switch" type="checkbox" className='checked-input checked-input-0' />
                                        </label>
                                    ) : <label className='toggle'>
                                            <input role="switch" type="checkbox" className='checked-input checked-input-1' />
                                        </label>
                                ) : null}
                            </Fragment>
                        ))}
                    </div>
                ))}
            </div>
            <div className="share">
                <h5 className="share-title" style={{ fontWeight: "bold", color: "#db0253" }}>* 위 결과를 캡쳐해서 친구에게 공유해보세요!</h5>
                <ShareGroup
                    link={`https://ktestone.com/kapable.github.io/${title}/`}
                    testTitle={title}/>
                <div className="share">
                    <CopyToClipboard text={`https://ktestone.com/kapable.github.io/${title}/`}>
                        <img loading="lazy"
                            src={COPYBTN}
                            onClick={_onShareButtonClick}
                            className="share-btn-img"
                            alt="링크 복사"
                            />
                    </CopyToClipboard>
                </div>
                <div className="re-test-btn">
                    <img loading="lazy"
                        src={AGAINBTN}
                        className="re-test-btn-img"
                        onClick={_onBackToStartButtonClick}
                        alt="테스트 다시하기"/>
                </div>
            </div>
            <div style={{ marginBottom: '2rem' }} className="back-to-main">
                <img loading="lazy"
                    src={TOHOMEBTN}
                    onClick={_onBackToMainButtonClick}
                    className="back-to-main-btn-img"
                    alt="다른 테스트 하러가기"
                    />
            </div>
            <GoToHomeBtn page={`${title} answer`}/>
            {otherTestBannerRenderer()}
        </div>
    );
};

export default BalanceTestResult;