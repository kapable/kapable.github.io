import React, { useCallback, useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Progress } from 'antd';
import { useCookies } from 'react-cookie';
import { _eventSenderGA } from '../../../tools/tools';
import './colorPicker.css';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const gridMatrixs = [
    {
        count: 4,
        rows: 2,
        cols: 2,
    },
    {
        count: 8,
        rows: 4,
        cols: 2,
    },
    {
        count: 9,
        rows: 3,
        cols: 3,
    },
    {
        count: 16,
        rows: 4,
        cols: 4,
    },
    {
        count: 18,
        rows: 6,
        cols: 3,
    },
]

const PickerRenderer = ({data, setCurrentRound, isLoading, setIsLoading, difficulty, isReady, setIsReady, setIsDone, totalRound, totalTime}) => {
    const history = useHistory();
    const [isOpened, setIsOpened] = useState(false);
    const [coupangCount, setCoupangCount] = useState(5);
    const [startCoupangTimer, setStartCoupangTimer] = useState(false);
    const originAdProb = 0.5 < Math.random();
    const coupangLink = originAdProb ? "https://link.coupang.com/a/PqWGr" : "https://link.coupang.com/a/PC8eL" ;

    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    const [gridMatrix, setGridMatrix] = useState(
        gridMatrixs.find((grid) => grid.count === data.squares)
    );
    const [remainingTime, setRemainingTime] = useState(data.seconds);
    const [countdown, setCountdown] = useState(3);
    const [isPicking, setIsPicking] = useState(false);
    const [coupangCookies, setCoupangCookie] = useCookies(['coupang']);
    const [isWrong, setIsWrong] = useState(false);
    const [wrongMessage, setWrongMessage] = useState('');
    const [testDomain] = useState(`/colorPicker${difficulty}`);


    useEffect(() => {
        if(startCoupangTimer) {
            const interval = setInterval(() => {
            if (coupangCount <= 0) {
                clearInterval(interval);
                setCoupangCount(0)
            } else {
                setCoupangCount(coupangCount-1);
            }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [coupangCount, startCoupangTimer]);
    useEffect(() => {
        setRemainingTime(data.seconds);
    }, [data, setRemainingTime]);

    // INTRO Countdown
    useEffect(() => {
        if((data.round === 1) && !isReady) {
            let firstTimeout;
            let firstInterval;
            firstInterval = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            firstTimeout = setTimeout(() => {
                setIsReady(true);
                setIsPicking(true);
                clearTimeout(firstTimeout);
                clearInterval(firstInterval);
            }, 3000);
        }
    }, [data.round, isReady, setIsReady]);
    useEffect(() => {
        setGridMatrix(gridMatrixs.find((grid) => grid.count === data.squares));
        setRandomNum(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    }, [data]);

    // TIME limit
    useEffect(() => {
        if(!isPicking) {
            return;
        }
        let secondInterval;

        secondInterval = setInterval(() => {
            setRemainingTime((prev) => prev - 0.1);
        }, 100);

        if(-0.15 >= remainingTime && data.round !== totalRound) { // for progress-bar
            setIsDone(true);
            clearInterval(secondInterval);
            setStartCoupangTimer(true);
            if(isWrong) {
                setWrongMessage('색감이 틀렸어요!');
            } else {
                setWrongMessage('시간이 다됐어요!');
            }
        } else {
            return () => clearInterval(secondInterval);
        }
    }, [data, isReady, isPicking, remainingTime, history, totalRound, wrongMessage, isWrong, setIsReady, setIsDone]);

    const onCoupangButtonClick = useCallback(() => {
        const cookieAges = 60*60*2;
        setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true });
        setIsOpened(true);
        _eventSenderGA("Paging", `Click go-to-Coupang Button(ColorPicker${difficulty})`, "quiz page");
        return history.push(testDomain);
    }, [difficulty, history, setCoupangCookie, testDomain]);

    const onCoupangCloseButtonClick = useCallback(() => {
        const cookieAges = 60*60*2;
        setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true });
        setIsOpened(true);
        alert('다시 처음으로 돌아갑니다.');
        _eventSenderGA("Closing", `Click Close-Coupang Button(ColorPicker${difficulty})`, "quiz page");
        return history.push(testDomain);
    }, [setCoupangCookie, difficulty, history, testDomain]);

    const coupangButtonRenderer = useCallback(() => {
        return (
            <div className='article-adCover-div-1'>
                <div className='article-adCover-div-2'>
                    <div className='article-adCover-div-3'>
                        <p style={{color:"#4185F4"}}><b>{wrongMessage}</b></p>
                        <p><b><span style={{color:"#4185F4"}}>콘텐츠를 보기 전</span> 쿠팡 쇼핑을 해보세요</b></p>
                        <div><p style={{ fontSize: '0.7rem' }}>쿠팡 방문은 케이테스트가 항상 질좋은 콘텐츠를 제공할 수 있는 힘이 됩니다.<br />항상 케이테스트 콘텐츠를 사랑해주셔서 감사합니다.</p></div>
                        <p style={{ fontSize: "0.6rem", width: "0.8rem", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)", position:"absolute", right:"0rem", top: "0" }}>
                            {startCoupangTimer ? (
                                    coupangCount === 0 ? <span style={{color:'white', cursor:'pointer'}} onClick={coupangCount === 0 ? onCoupangCloseButtonClick : null}><b>x</b></span> : coupangCount
                            ) :null}
                        </p>
                        <a href={coupangLink} target="_blank" rel='noreferrer noopener'>
                            <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem', height: '3.5rem'}} onClick={onCoupangButtonClick}>
                                버튼 누르고 다시하기
                            </button>
                        </a>
                        <p style={{ fontSize: '10px', color: 'grey', marginTop: "0.5rem" }}>원치 않을 경우 뒤로 가기를 눌러주세요.</p>
                    </div>
                    <p className='result-coupang-comment' style={{marginTop: "1rem"}}>* 이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.</p>
                </div>
            </div>
        )
    }, [coupangCount, coupangLink, onCoupangButtonClick, onCoupangCloseButtonClick, startCoupangTimer, wrongMessage]);

    const onButtonClick = useCallback((number) => {
        if(number === randomNum) {
            if(data.round === totalRound) {
                setIsDone(true);
                setIsLoading(true);
                setTimeout(() => {
                    history.push(`${testDomain}/result/`, {difficulty, totalTime})
                }, 2500);
            } else {
                setCurrentRound(data.round + 1);
            }
        } else {
            setIsDone(true);
            if(isOpened || coupangCookies?.coupang) {
                alert('틀렸어요. 처음부터 다시 시작합니다.');
                return history.push(testDomain);
            } else {
                setRemainingTime(0);
                setStartCoupangTimer(true);
                setWrongMessage('색감이 틀렸어요!');
                setIsWrong(true);
            }
        }
    }, [coupangCookies.coupang, data.round, difficulty, history, isOpened, randomNum, setCurrentRound, setIsDone, setIsLoading, testDomain, totalRound, totalTime]);

    if(isReady) {
        if(isLoading) {
            return (
                <div style={{padding: '13rem auto'}}>
                    <Lottie options={defaultOptions} height={120} width={120} />
                </div>
            )
        } else {
            return(
                <div className='picker-background'>
                    <Progress className='picker-progress' percent={(remainingTime) / data.seconds * 100} showInfo={false} />
                    {/* TODO: width / height with number of squares */}
                    {[...Array(parseInt(gridMatrix.rows))].map((_, row_num) => (
                        <div className='picker-row' key={`${row_num}-div`}>
                            {[...Array(parseInt(gridMatrix.cols))].map((_, col_num) => (
                                <button
                                    onClick={
                                        startCoupangTimer ? null : 
                                        () => onButtonClick(((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1)))
                                    }
                                    className='picker-col'
                                    style={{ backgroundColor: ((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1)) === randomNum ? data.uniqueColor : data.normalColor }}
                                    key={`${((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1))}-square`}
                                />
                            ))}
                        </div>
                    ))}
                    {startCoupangTimer ? (
                        isOpened || coupangCookies?.coupang ? null :
                        coupangButtonRenderer()
                    ) : null}
                </div>
            )
        }
    } else {
        return (
            <div className='start-countdown-div'>
                <p className='start-countdown-p'>{countdown}</p>
            </div>
        )
    }
}

export default PickerRenderer;