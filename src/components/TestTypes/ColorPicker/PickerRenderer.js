import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './colorPicker.css';
import { Progress } from 'antd';

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

const PickerRenderer = ({data, setCurrentRound, isLoading, setIsLoading, difficulty, isReady, setIsReady}) => {
    const history = useHistory();
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    const [gridMatrix, setGridMatrix] = useState(
        gridMatrixs.find((grid) => grid.count === data.squares)
    );
    const [remainingTime, setRemainingTime] = useState(data.seconds);
    const [countdown, setCountdown] = useState(3);
    const [isPicking, setIsPicking] = useState(false);


    const [isButtonClick, setIsButtonClick] = useState(false);

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

    // TODO: TIME limit
    useEffect(() => {
        if(!isPicking) {
            return;
        }
        let secondInterval;

        secondInterval = setInterval(() => {
            setRemainingTime((prev) => prev - 0.1);
        }, 100);

        return () => clearInterval(secondInterval);



        // let secondTimeout;
        // if(isButtonClick) {
        //     clearTimeout(secondTimeout);
        //     clearInterval(secondInterval);
        // }
        // if(isReady && data) {
        //     secondInterval = setInterval(() => {
        //         setRemainingTime((prev) => prev -0.1);
        //     }, 100);
        //     secondTimeout = setTimeout(() => {
        //         clearTimeout(secondTimeout);
        //         clearInterval(secondInterval);
        //         setRemainingTime(data.seconds)
        //     }, 3000);
        // }
        // if(isReady) {
            // let startTimeMS = 0;
            // let timerId;
            // let intervalId;
            // let timerStep = 3000;
            // let intervalStep = 100;
            // startTimeMS =(new Date()).getTime();
    
            // intervalId = setInterval(() => {
            //     if(timerStep - ((new Date()).getTime() - startTimeMS) <= 0 || isButtonClick) {
            //         clearInterval(intervalId)
            //     }
            //     setRemainingTime(timerStep - ((new Date()).getTime() - startTimeMS));
            //     // console.log(timerStep - ((new Date()).getTime() - startTimeMS));
            // }, intervalStep);
    
            // timerId = setTimeout(() => {
            //     clearTimeout(timerId);
            //     clearInterval(intervalId)
            //     return alert('시간 다됐다!');
            // }, timerStep);
            // if(isButtonClick) {
            //     clearTimeout(timerId);
            // }
        // }
    }, [data, isReady, isButtonClick, isPicking]);


    const onButtonClick = (number) => {
        setIsButtonClick(true);
        if(number === randomNum) {
            if(data.round === 10) {
                setIsLoading(true);
                setTimeout(() => {
                    history.push(`/colorPicker/result/`, difficulty)
                }, 2500);
            } else {
                setCurrentRound(data.round + 1);
                setRemainingTime(data.seconds);
            }
        } else {
            // TODO: coupang cookie and go to start
            return alert('틀렸다 너')
        }
    }
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
                    <Progress className='picker-progress' percent={remainingTime / data.seconds * 100} showInfo={false} />
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
            <div className='start-countdown-div'>{countdown}</div>
        )
    }
}

export default PickerRenderer