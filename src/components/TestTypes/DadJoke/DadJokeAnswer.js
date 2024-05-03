import React, { Fragment, useCallback, useEffect, useState } from 'react';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import TESTS from '../../../api/TESTS';
import { dadJokes } from '../../../api/DADJOKE';
import { useHistory, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ShareGroup from '../../BasicComponents/ShareGroup';
import CopyToClipboard from 'react-copy-to-clipboard';
import { _eventSenderGA } from '../../../tools/tools';
import { RedoOutlined } from '@ant-design/icons';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';
import { difficulties } from '../../../api/COLORPICKING';
import AdsenseAdvertiser from '../../SubComponents/AdsenseAdvertiser';

const DadJokeAnswer = ({ testTitle }) => {
    const history = useHistory();
    const [currentTest] = useState(dadJokes.find(test => test.title === testTitle));
    const [answerImages, setAnswerImages] = useState(currentTest.answers);
    
    useEffect(() => {
        if(currentTest) {
            return setAnswerImages(currentTest.answers)
        }
        alert('오류가 발생하여 처음으로 돌아갑니다!');
        history.push(currentTest.title);
    }, [currentTest, history]);

    const _onShareButtonClick = useCallback(() => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "answer page");
        alert("링크가 복사됐어요!");
    }, []);

    const _onBackToStartButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Re-test Button", "answer page");
        history.push(`/${currentTest.title}`);
    }, [history, currentTest.title]);

    const _onBackToMainButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "answer page");
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
        <div className="result">
            <div>
                <img src="https://images.ktestone.com/meta/dadJoke/dadJoke-upper-banner.jpeg" alt="dadJoke-upper-banner" className='result-img' />
            </div>
            {answerImages.map((imageLink, idx) => (
                <img className='result-img' src={imageLink} alt={`dadJoke-${idx}`} key={`dadJoke-${idx}`} />
            ))}
            <div className="share">
                <h5 className="share-title">친구에게 공유하기</h5>
                <ShareGroup
                    link={`https://ktestone.com/kapable.github.io/${currentTest.title}/`}
                    testTitle={currentTest.title}/>
                <div className="share">
                    <CopyToClipboard text={`https://ktestone.com/kapable.github.io/${currentTest.title}/`}>
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
            <div className="kakao-plusfriend-btn-container"
                onClick={_onBackToStartButtonClick}
                style={{ cursor: 'pointer', padding: '0.5rem', backgroundColor: 'white', fontSize: '1rem', borderRadius: '1rem', border: '1px solid black', boxShadow: '3px 3px 0px 2px rgba(230,33,130,1)'}} >
                <RedoOutlined style={{color: '#E62182', fontSize: '1.1rem'}} />&nbsp;
                <span style={{ color: 'black', margin: 0, fontWeight:'bold' }}>게임</span><br />
                <p style={{ color: 'black', margin: 0, fontWeight:'bold' }}>다시하기</p>
            </div>
            <GoToHomeBtn page={`${currentTest.title} answer`}/>
            {otherTestBannerRenderer()}
        </div>
    );    
};

export default withRouter(DadJokeAnswer);