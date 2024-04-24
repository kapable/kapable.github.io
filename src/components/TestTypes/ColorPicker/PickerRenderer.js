import React, { useCallback, useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './colorPicker.css';
import { Progress } from 'antd';
import { useCookies } from 'react-cookie';

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

const PickerRenderer = ({data, setCurrentRound, isLoading, setIsLoading, difficulty, isReady, setIsReady, totalRound}) => {
    const history = useHistory();
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    const [gridMatrix, setGridMatrix] = useState(
        gridMatrixs.find((grid) => grid.count === data.squares)
    );
    const [remainingTime, setRemainingTime] = useState(data.seconds);
    const [countdown, setCountdown] = useState(3);
    const [isPicking, setIsPicking] = useState(false);
    const [coupangCookies, setCoupangCookie] = useCookies(['coupang']);

    // INTRO Countdown
    useEffect(() => {
        setRemainingTime(data.seconds);
    }, [data, setRemainingTime])
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
            alert('시간이 다 지났다요');
            clearInterval(secondInterval);
            return history.push('/colorPicker');
        } else {
            return () => clearInterval(secondInterval);
        }
    }, [data, isReady, isPicking, remainingTime, history, totalRound]);

    const onCoupangButtonClick = () => {
        const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        // _eventSenderGA("Paging", "Click go-to-Coupang Button", "post page");
        return setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true });
    }

    const onButtonClick = useCallback((number) => {
        if(number === randomNum) {
            if(data.round === totalRound) {
                setIsLoading(true);
                setTimeout(() => {
                    history.push(`/colorPicker/result/`, difficulty)
                }, 2500);
            } else {
                setCurrentRound(data.round + 1);
            }
        } else {
            // TODO: coupang cookie and go to start
            if(coupangCookies?.coupang) {
                alert('틀렸어요. 처음부터 다시');
                // TODO: onCoupangButtonClick to button onClick
                return history.push('/colorPicker');
            } else {
                // TODO: coupang view banner
                alert('쿠팡 보고 다시하기');
                return history.push('/colorPicker');
            }
        }
    }, [coupangCookies.coupang, data.round, difficulty, history, randomNum, setCurrentRound, setIsLoading, totalRound]);

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
                    {[...Array(parseInt(gridMatrix.rows))].map((_, row_num) => (
                        <div className='picker-row' key={`${row_num}-div`}>
                            {[...Array(parseInt(gridMatrix.cols))].map((_, col_num) => (
                                <button
                                    onClick={() => onButtonClick(((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1)))}
                                    className='picker-col'
                                    style={{ backgroundColor: ((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1)) === randomNum ? data.uniqueColor : data.normalColor }}
                                    key={`${((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1))}-square`}
                                >
                                    {((row_num+1) * gridMatrix.cols) - (gridMatrix.cols - (col_num+1))}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            )
        }
    } else {
        return (
            <div className='start-countdown-div'>
                {countdown}
            </div>
        )
    }
}

export default PickerRenderer