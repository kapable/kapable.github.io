import React, { Fragment, useCallback, useState } from 'react';
import { DatePicker, Select, Radio } from 'antd';
import moment from 'moment';
import ReactGA from 'react-ga';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withRouter } from 'react-router';
import crypto from 'crypto-js';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import './TodayLuck.css';
import { Helmet } from 'react-helmet';
import CopyToClipboard from 'react-copy-to-clipboard';
import COPYBTN from '../../../api/DefaultImg/result-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/result-to-home-btn.png';
import NavigationBar from '../../BasicComponents/Navigation/NavigationBar';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const LifeInterpreting = (props) => {
    const dateFormat = 'YYYYMMDD';
    const [day, setDay] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const onSubmitClick = useCallback(async () => {
        if(!day) {
            return alert('날짜를 입력해주세요!');
        };
        _eventSenderGA("Paging", "Click SAJU submit Button", "intro page");
        const crypto_query_date = encodeURIComponent(crypto.AES.encrypt(JSON.stringify(day), 'ktestsaju').toString());
        setIsLoading(true);
        setTimeout(() => {
            props.history.push(`/lifeInterpreting/${crypto_query_date}/`)
        }, "2500");
    }, [day, props]);

    const onChange = useCallback((date) => {
        setDay(moment(date).format(dateFormat));
    }, [dateFormat]);

    const onBacktoHomeButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "intro page");
        props.history.push(`/`);
    }, [props]);

    const onShareButtonClick = useCallback(() => {
        alert("링크가 복사됐습니다!");
        _eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
    }, []);

    if(isLoading) {
        return (
            <Lottie options={defaultOptions} height={120} width={120} style={{ marginTop: "10rem" }} />
        );
    } else {
        return (
            <Fragment>
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트</title>
                    <meta name="title" content="인생 풀이 | 내 인생운은 어떨까? - 케이테스트"/>
                    <meta name="description" content="무료 사주를 케이테스트에서 제공합니다. | 내 인생운은 어떨까? | 인생 풀이 | 케이테스트 | 사주 테스트" data-react-helmet="true"/>
                    <link rel="main-url" href="https://ktestone.com/kapable.github.io/lifeInterpreting/"/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://ktestone.com/kapable.github.io/lifeInterpreting/"/>
                    <meta property="og:title" content="인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트"/>
                    <meta property="og:description" content="무료 사주를 케이테스트에서 제공합니다. | 내 인생운은 어떨까? | 인생 풀이 | 케이테스트 | 사주 테스트"/>
                    <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/lifeInterpreting-thumb.png`}/>
                    <meta property="og:image:alt" content="인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/lifeInterpreting/"/>
                    <meta property="twitter:title" content="인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트"/>
                    <meta property="twitter:description" content="무료 사주를 케이테스트에서 제공합니다. | 내 인생운은 어떨까? | 인생 풀이 | 케이테스트 | 사주 테스트"/>
                    <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/lifeInterpreting-thumb.png`}/>
                    <meta property="twitter:image:alt" content="인생 풀이 | 내 인생운은 어떨까? - 케이테스트 | 사주 테스트" />
                </Helmet>
                <NavigationBar page="SAJU"/>
                <div className='life-interpreting-intro-img-div'>
                    <img className='life-interpreting-intro-bg' src="https://images.ktestone.com/meta/saju/lifeInterpreting-intro-input-bg.jpg" alt="life-interpreting-intro-input"/>
                    <div className='life-interpreting-intro-date-picker-div'>
                        <DatePicker className='life-interpreting-intro-date-picker' onChange={onChange} allowClear locale={locale}/>
                    </div>
                    <div className='life-interpreting-intro-time-picker-div'>
                        <Select className='life-interpreting-intro-time-picker'
                            defaultValue={'시간 모름'}
                            options={["시간 모름", ...Array(25).keys()].map((num) => ({ value: num, label: num }))}
                        />
                    </div>
                    <div className='life-interpreting-intro-gender-picker-div'>
                        <Radio.Group className='life-interpreting-intro-gender-picker' defaultValue="female" buttonStyle='solid'>
                            <Radio.Button style={{width: "4.05rem"}} value={"female"}>여성</Radio.Button>
                            <Radio.Button style={{width: "4.05rem"}} value={"male"}>남성</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className='life-interpreting-intro-btn-div' onClick={onSubmitClick}>
                        <img className='life-interpreting-intro-btn' src="https://images.ktestone.com/meta/saju/lifeInterpreting-intro-submit-btn.jpg" alt="life-interpreting-intro-btn"/>
                    </div>
                </div>
                <div className="test-intro-with-friend">
                    <CopyToClipboard text={'https://ktestone.com/kapable.github.io/lifetimeSaju/'}>
                        <img
                            src={COPYBTN}
                            className="test-intro-with-friend-img"
                            onClick={onShareButtonClick}
                            alt="테스트 링크 복사"/>
                    </CopyToClipboard>
                </div>
                <div className="test-intro-to-main">
                    <img
                        className="test-intro-to-main-img"
                        src={BACKBTN}
                        onClick={onBacktoHomeButtonClick}
                        alt="다른 테스트 하러 뒤로가기"/>
                </div>
            </Fragment>
        );
    };
};

export default withRouter(LifeInterpreting);