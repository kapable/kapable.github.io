import React, { Fragment, useCallback, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import COPYBTN from '../../../api/DefaultImg/test-intro-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/test-intro-other-tests-btn.png';
import RESULTCOPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import quotes from '../../../api/QUOTES';
import ShareGroup from '../../BasicComponents/ShareGroup';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation-fortuneCookie.json'
import AdsenseAdvertiser from '../../SubComponents/AdsenseAdvertiser';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const LoadingDiv = styled.div`
        padding: 10rem 0;
    `;

const ResultDiv = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        img {
            position: relatvie;
            width: 100%;
            margin: 0 auto;
        }

        .fortune-cookie-quote-div, .fortune-cookie-person-div {
            font-size: 1.rem;
            line-height: 1.5rem;
            width: 50%;
            position: absolute;
            top: 15rem;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .fortune-cookie-quote-div {
            height: 7.5rem;
            overflow-y: scroll;
        }

        .fortune-cookie-person-div {
            top: 20rem;
        }

        @media (min-width: 768px) {
            img {
                width: 35rem;
            }

            .fortune-cookie-quote-div, .fortune-cookie-person-div {
                top: 22rem;
                width: 17rem;
            }

            .fortune-cookie-person-div {
                top: 30rem;
            }
        }
    `;

const FortuneCookie = () => {
    
    const [mode, setMode] = useState('result');
    const [quote, setQuote] = useState({});

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        });
    };

    const _onShareButtonClick = () => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
        alert("링크가 복사됐어요!");
    };

    const _onPPLBannerClick = () => {
        _eventSenderGA("Outlinking", "Click PPL-Banner Button", "result page");
    };

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max) + min);
    };

    const onFortuneClick = useCallback(() => {
        setMode('loading');
        setTimeout(function(){
            setMode('result')
        }, 3000);
    }, []);

    useEffect(() => {
        let random_int = getRandomInt(0, quotes.length - 1);
        setQuote(quotes[random_int]);
    }, []);

    const otherTestBannerRenderer = () => {
        const rederTestList = ["flowerBTI", "kbmti", "musicNote", "fishShapedBun", "oneSidedLove", "bread2023",];
        return(
            <Fragment>
                {rederTestList.map((test) => (
                    <div key={`${test}-key`}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://ktestone.com/kapable.github.io/${test}/`}
                            className="to-ppl-banner-text"
                            > <img src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={test} onClick={_onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                        <AdsenseAdvertiser
                            client="ca-pub-2382342018701919"
                            slot="5663135072"
                            format="auto"
                            responsive="true"
                        />
                    </div>
                ))}
            </Fragment>
        );
    };

    if(mode === 'intro') {
        return (
            <div>
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까?-케이테스트</title>
                    <meta name="title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta name="description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"} data-react-helmet="true"/>
                    <link rel="main-url" href={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>
                    <meta property="og:title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta property="og:description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"}/>
                    <meta property="og:image" content={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`}/>
                    <meta property="og:image:width" content="800"/>
                    <meta property="og:image:height" content="400"/>
                    <meta property="og:image:alt" content={'오늘의 포춘쿠키-케이테스트'} />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>
                    <meta property="twitter:title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta property="twitter:description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"}/>
                    <meta property="twitter:image" content={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`}/>
                    <meta property="og:image:width" content="800"/>
                    <meta property="og:image:height" content="400"/>
                    <meta property="twitter:image:alt" content={'오늘의 포춘쿠키-케이테스트'} />
                </Helmet>
                <img className="intro-main-img" style={{cursor:'pointer'}} src={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`} alt="FORTUNE-COOKIE" onClick={onFortuneClick} />
                <p><b>*(추천) 사파리, 크롬 네이버 브라우저에서<br />조금 더 쾌적하게 이용 가능합니다!</b></p>
                
                <div className="test-intro-with-friend">
                    <CopyToClipboard text={'https://ktestone.com/kapable.github.io/fortuneCookie/'}>
                        <img
                            src={COPYBTN}
                            className="test-intro-with-friend-img"
                            onClick={_onShareButtonClick}
                            alt="테스트 링크 복사"/>
                    </CopyToClipboard>
                </div>
                <Link to='/' className="main-link-block" key="fortuneCookie-intro">
                    <div className="test-intro-to-main">
                        <img
                            className="test-intro-to-main-img"
                            src={BACKBTN}
                            alt="다른 테스트 하러 뒤로가기"/>
                    </div>
                </Link>
            </div>
        );
    } else if(mode === 'loading') {
        return(
            <LoadingDiv>
                <Lottie options={defaultOptions} height={120} width={120}/>
            </LoadingDiv>
        )
    } else if(mode === 'result') {
        return (
            <div>
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까?-케이테스트</title>
                    <meta name="title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta name="description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"} data-react-helmet="true"/>
                    <link rel="main-url" href={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>
                    <meta property="og:title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta property="og:description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"}/>
                    <meta property="og:image" content={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`}/>
                    <meta property="og:image:width" content="800"/>
                    <meta property="og:image:height" content="400"/>
                    <meta property="og:image:alt" content={'오늘의 포춘쿠키-케이테스트'} />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={"https://ktestone.com/kapable.github.io/fortuneCookie/"}/>
                    <meta property="twitter:title" content={'오늘의 포춘쿠키-케이테스트'}/>
                    <meta property="twitter:description" content={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까? | 오늘의 운세"}/>
                    <meta property="twitter:image" content={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`}/>
                    <meta property="og:image:width" content="800"/>
                    <meta property="og:image:height" content="400"/>
                    <meta property="twitter:image:alt" content={'오늘의 포춘쿠키-케이테스트'} />
                </Helmet>
                <ResultDiv>
                    <img src={`https://images.ktestone.com/meta/fortuneCookie/fortuneCookie-result.png`} className='result-img' alt="" />
                    <div className='fortune-cookie-quote-div'><p>{quote?.quote}</p></div>
                    <div className='fortune-cookie-person-div'>- {quote?.person}</div>
                </ResultDiv>

                <div className="share">
                    <h5 className="share-title">{"친구에게 공유하기"}</h5>
                    <ShareGroup
                        link={"https://ktestone.com/kapable.github.io/fortuneCookie/"}
                        testTitle={"오늘의 포춘쿠키 | 오늘 나는 어떤 운이 있을까?"}/>
                    <div className="share">
                        <CopyToClipboard text={'https://ktestone.com/kapable.github.io/fortuneCookie/'}>
                            <img
                                src={RESULTCOPYBTN}
                                onClick={_onShareButtonClick}
                                className="share-btn-img"
                                alt="링크 복사"
                                />
                        </CopyToClipboard>
                    </div>
                    <div className="re-test-btn">
                        <img
                            src={AGAINBTN}
                            className="re-test-btn-img"
                            onClick={() => window.location.reload(false)}
                            alt="테스트 다시하기"/>
                    </div>
                </div>
                <Link to='/' className="main-link-block" key="fortuneCookie-intro">
                    <div className="back-to-main">
                        <img
                            src={TOHOMEBTN}
                            className="back-to-main-btn-img"
                            alt="다른 테스트 하러가기"
                            />
                    </div>
                </Link>
                {otherTestBannerRenderer()}
            </div>
        );
    };
};

export default withRouter(FortuneCookie);