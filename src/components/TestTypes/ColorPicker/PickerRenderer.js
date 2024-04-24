import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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

const PickerRenderer = ({data, setCurrentRound, isLoading, setIsLoading, difficulty}) => {
    const history = useHistory();
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    const [gridMatrix, setGridMatrix] = useState(
        gridMatrixs.find((grid) => grid.count === data.squares)
    );
    useEffect(() => {
        setGridMatrix(gridMatrixs.find((grid) => grid.count === data.squares));
        setRandomNum(Math.floor(Math.random() * (data.squares+1 - 1) + 1));
    }, [data]);
    const onButtonClick = (number) => {
        if(number === randomNum) {
            if(data.round === 10) {
                setIsLoading(true);
                setTimeout(() => {
                    history.push(`/colorPicker/result/`, difficulty)
                }, "2500");
            } else {
                setCurrentRound(data.round + 1)
            }
        } else {
            return alert('틀렸다 너')
        }
    }
    if(isLoading) {
        return (
            <div style={{padding: '13rem auto'}}>
                <Lottie options={defaultOptions} height={120} width={120} />
            </div>
        )
    } else {
        return(
            <div className='picker-background'>
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
}

export default PickerRenderer