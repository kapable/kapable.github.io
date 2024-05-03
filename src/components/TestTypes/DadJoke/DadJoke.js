import React, { useCallback, useEffect, useState } from 'react';
import { dadJokes } from '../../../api/DADJOKE';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Loading from '../../BasicComponents/Loading';
import { Helmet } from 'react-helmet';

const DadJoke = ({ testId }) => {
    const history = useHistory();
    const [currentTest] = useState(dadJokes.find((test) => test.id === testId));
    const [isRolling, setIsRolling] = useState(true);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * currentTest.questions.length));
    const [finalQuestion, setFinalQuestion] = useState('');
    const [isLoading, setIsLoding] = useState(false);

    useEffect(() => {
        if(isRolling) {
            setInterval(() => {
                setRandomNumber(
                    Math.floor(Math.random() * currentTest.questions.length)
                );
            }, 50);
        }
    }, [isRolling, currentTest.questions.length]);

    useEffect(() => {
        if(isLoading) {
            setTimeout(() => {
                return history.push(`/${currentTest.title}/answers/${testId}`);
            }, 2200);
        }
    }, [isLoading, currentTest.title, history, testId]);

    const onStopButtonClick = useCallback(() => {
        if(isRolling) {
            setIsRolling(false);
            setFinalQuestion(currentTest.questions[randomNumber]);
        } else {
            setIsRolling(true);
            setFinalQuestion('');
        }
    }, [isRolling, currentTest.questions, randomNumber]);

    const onResultButtonClick = useCallback(() => {
        setIsLoding(true);
    }, []);

    const metaTagRenderer = () => {
        return (
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>아재 개그 맞추기 게임 테스트 - 케이테스트</title>
                <meta name="title" content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}/>
                <meta name="description" content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`} data-react-helmet="true"/>
                <link rel="main-url" href={`https://ktestone.com/${currentTest.title}/`}/>
        
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://ktestone.com/${currentTest.title}/`}/>
                <meta property="og:title" content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}/>
                <meta property="og:description" content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`}/>
                <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/${currentTest.title}-thumb.png`}/>
                <meta property="og:image:alt" content={`아재 개그 맞추기 게임 테스트 - 케이테스트`} />
        
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`https://ktestone.com/${currentTest.title}/`}/>
                <meta property="twitter:title" content={`아재 개그 맞추기 게임 테스트 - 케이테스트`}/>
                <meta property="twitter:description" content={`아재 개그 맞추기 게임 테스트 | 멈춰서 나온 문제 못맞추면 한잔마셔!`}/>
                <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/${currentTest.title}-thumb.png`}/>
                <meta property="twitter:image:alt" content={`아재 개그 맞추기 게임 테스트 - 케이테스트`} />
            </Helmet>
        )
    }

    if(isLoading) {
        return <Loading />
    } else {
        return (
            <div style={{ alignItems: 'center'}}>
                {metaTagRenderer()}
                <div>
                    <img src="https://images.ktestone.com/meta/dadJoke/dadJoke-upper-banner.jpeg" alt="dadJoke-upper-banner" className='result-img' />
                </div>
                <div style={{ margin: '4rem 0', fontSize: '2rem', fontWeight: "bold" }}>
                    {isRolling ? currentTest.questions[randomNumber] : finalQuestion}
                </div>
                <div
                    onClick={onStopButtonClick}
                    style={{ fontWeight: 'bold', color: 'white', cursor:'pointer', alignContent:'center', borderRadius: '2rem', backgroundColor: 'red' , width: '20rem', height: '5rem', margin: '0 auto'}}>
                    {isRolling ? 'STOP' : '다시 돌리기'}
                </div>
                {isRolling ? null : (
                <div
                    onClick={onResultButtonClick}
                    style={{ fontWeight: 'bold', color: 'white', cursor:'pointer', alignContent:'center', borderRadius: '2rem', backgroundColor: 'blue' , width: '20rem', height: '5rem', margin: '0 auto'}}>
                    결과 보러 가기
                </div>
                )}
            </div>
        );
    }
};

export default DadJoke;