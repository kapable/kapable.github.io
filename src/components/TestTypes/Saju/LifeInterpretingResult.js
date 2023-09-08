import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Divider } from 'antd';
import { useCookies } from 'react-cookie';
import { _eventSenderGA } from '../../../tools/tools';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import TOHOMEBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import ShareGroup from '../../BasicComponents/ShareGroup';
import CopyToClipboard from 'react-copy-to-clipboard';

axios.defaults.withCredentials = true;

const LifetimeSajuResult = (props) => {
    const saju_url = 'https://saju.ktestone.com';
    const [result, setResult] = useState({});
    const [isOpened, setIsOpened] = useState(false);
    const [coupangCookies, setCoupangCookie] = useCookies(['coupang']);
    const originAdProb = 0.5 < Math.random();
    const coupangLink = originAdProb ? "https://link.coupang.com/a/PqWGr" : "https://link.coupang.com/a/PC8eL" ;
    const [coupangCount, setCoupangCount] = useState(5);
    const [startTimer, setStartTimer] = useState(false);

    const onCoupangButtonClick = useCallback(() => {
        const cookieAges = 60*60*2;
        setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        setIsOpened(true);
        _eventSenderGA("Paging", "Click go-to-Coupang Button(SAJU)", "result page");
    }, [setCoupangCookie]);

    const onCoupangCloseButtonClick = useCallback(() => {
        const cookieAges = 60*60*2;
        setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        setIsOpened(true);
        _eventSenderGA("Closing", "Click Close-Coupang Button(SAJU)", "result page");
    }, [setCoupangCookie]);

    useEffect(() => {
        const getToday = async(source) => {
            try {
                await axios.get(
                    saju_url + '/lifeInterpreting/total/' + source,
                    { withCredentials: true }
                )
                .then((res) => {
                    setResult(res?.data)
                });
            } catch (error) {
                console.error(error);
                return alert('결과를 가져오는 중 에러가 발생했습니다 ㅠㅠ');
            }
        };
        getToday(props?.match?.params?.query);
    }, [props]);

    useEffect(() => {
        setStartTimer(true);
        const interval = setInterval(() => {
        if (coupangCount <= 0) {
            clearInterval(interval);
            setCoupangCount(0)
        } else {
            setCoupangCount(coupangCount-1);
        }
        }, 1000);
        return () => clearInterval(interval);
    }, [coupangCount]);

    const onRestartButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Re-test Button", "result page");
        props.history.push(`/lifeInterpreting/`);
    }, [props]);

    const onBacktoHomeButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "result page");
        props.history.push(`/`);
    }, [props]);

    const onShareButtonClick = useCallback(() => {
        alert("링크가 복사됐습니다!");
        _eventSenderGA("Sharing", "Click Copy-link Button", "result page");
    }, [])

    return (
        <div className='todayLuck-result-main-div'>
            <img loading="lazy" className='todayLuck-top-banner-sample' src="https://images.ktestone.com/meta/saju/lifeInterpreting-top-banner.jpg" alt='todayLuck-top-banner-sample'/>
            {isOpened || coupangCookies?.coupang ? 
                <Fragment>
                    <h3>초년운</h3>
                    <p>{result ? result?.early_luck : null}</p>
                    <Divider />
                    <h3>중년운</h3>
                    <p>{result ? result?.mid_luck : null}</p>
                    <Divider />
                    <h3>말년운</h3>
                    <p>{result ? result?.late_luck : null}</p>
                    <Divider />
                </Fragment> : 
                <Fragment>
                    <h3>초년운</h3>
                    <p>{result ? result?.early_luck?.slice(0, 100) : null}</p>
                    <div className='article-adCover-div-1'>
                        <div className='article-adCover-div-2'>
                            <div className='article-adCover-div-3'>
                                <p><b><span style={{color:"#4185F4"}}>콘텐츠를 보기 전</span> 쿠팡 쇼핑을 해보세요</b></p>
                                <div><p style={{ fontSize: '0.7rem' }}>쿠팡 방문은 케이테스트가 항상 질좋은 콘텐츠를 제공 할 수 있는 힘이 됩니다.<br />항상 케이테스트 콘텐츠를 사랑해주셔서 감사합니다.</p></div>
                                <p style={{ fontSize: "0.7rem", width: "0.7rem", color: "white", backgroundColor: "#83b4de", position:"absolute", right:"4rem", top: "5.2rem" }}>
                                    {startTimer ? (
                                            coupangCount === 0 ? <span style={{color:'white', cursor:'pointer'}} onClick={coupangCount === 0 ? onCoupangCloseButtonClick : null}><b>X</b></span> : coupangCount
                                    ) :null}
                                </p>
                                <a href={coupangLink} target="_blank" rel='noreferrer noopener'>
                                    <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem', height: '3.5rem'}} onClick={onCoupangButtonClick}>
                                        버튼 누르고 결과 보기
                                    </button>
                                </a>
                                <p style={{ fontSize: '10px', color: 'grey', marginTop: "1em" }}>원치 않을 경우 뒤로 가기를 눌러주세요.</p>
                            </div>
                            <p className='result-coupang-comment' style={{marginTop: "1rem"}}>* 이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.</p>
                        </div>
                    </div>
                </Fragment>
            }
            <div className="share">
                <h5 className="share-title share-title-saju">친구에게 공유하기</h5>
                <ShareGroup
                    link={"https://ktestone.com/kapable.github.io/lifeInterpreting/"}
                    testTitle={"인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트"}/>
                <div className="share">
                    <CopyToClipboard text={"https://ktestone.com/kapable.github.io/lifeInterpreting/" + props?.match?.params?.query +'/'}>
                        <img loading="lazy"
                            src={COPYBTN}
                            onClick={onShareButtonClick}
                            className="share-btn-img"
                            alt="링크 복사"
                            />
                    </CopyToClipboard>
                </div>
                <div className="re-test-btn">
                    <img loading="lazy"
                        src={AGAINBTN}
                        className="re-test-btn-img"
                        onClick={onRestartButtonClick}
                        alt="테스트 다시하기"/>
                </div>
            </div>
            <div className="back-to-main" style={{display:"block"}}>
                <img loading="lazy"
                    src={TOHOMEBTN}
                    onClick={onBacktoHomeButtonClick}
                    className="back-to-main-btn-img"
                    alt="다른 테스트 하러가기"
                    />
            </div>
        </div>
    );
};

export default withRouter(LifetimeSajuResult);