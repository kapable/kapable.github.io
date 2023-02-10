import React, { Fragment, useCallback, useState } from 'react';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withRouter } from 'react-router';
import crypto from 'crypto-js';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';
import './TodayLuck.css';
import { Helmet } from 'react-helmet';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const LifetimeSaju = (props) => {
    const dateFormat = 'YYYYMMDD';
    const timeFormat = 'HH';
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitClick = useCallback(async () => {
        if(!day) {
            return alert('날짜를 입력해주세요!');
        };
        if(!time) {
            return alert('시간을 입력해주세요!');
        };
        const today_date = moment().format(dateFormat);
        const query_date = [today_date, day].join('-');
        const crypto_query_date = encodeURIComponent(crypto.AES.encrypt(JSON.stringify(query_date), 'ktestsaju').toString());
        
        setIsLoading(true);
        setTimeout(() => {
            props.history.push(`/lifetimeSaju/${crypto_query_date}/`)
        }, "2500");
    }, [day, time, props]);

    const onChange = useCallback((date) => {
        setDay(moment(date).format(dateFormat));
    }, [dateFormat]);

    const onTimeChange = useCallback((time) => {
        setTime(moment(time, timeFormat));
    }, [timeFormat]);

    if(isLoading) {
        return (
            <Lottie options={defaultOptions} height={120} width={120} style={{ marginTop: "10rem" }} />
        );
    } else {
        return (
            <Fragment>
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>평생 총운 - 케이테스트 | 사주 테스트</title>
                    <meta name="title" content="평생 총운 - 케이테스트"/>
                    <meta name="description" content="나의 평생 총운은? - 자평명리학 | 평생 총운 | 케이테스트 | 사주 테스트" data-react-helmet="true"/>
                    <link rel="main-url" href="https://ktestone.com/kapable.github.io/todayLuck/"/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://ktestone.com/kapable.github.io/todayLuck/"/>
                    <meta property="og:title" content="평생 총운 - 케이테스트 | 사주 테스트"/>
                    <meta property="og:description" content="나의 평생 총운은? - 자평명리학 | 평생 총운 | 케이테스트 | 사주 테스트"/>
                    <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/todayLuck-thumb.png`}/>
                    <meta property="og:image:alt" content="평생 총운 - 케이테스트 | 사주 테스트" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/todayLuck/"/>
                    <meta property="twitter:title" content="평생 총운 - 케이테스트 | 사주 테스트"/>
                    <meta property="twitter:description" content="나의 평생 총운은? - 자평명리학 | 평생 총운 | 케이테스트 | 사주 테스트"/>
                    <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/todayLuck-thumb.png`}/>
                    <meta property="twitter:image:alt" content="평생 총운 - 케이테스트 | 사주 테스트" />
                </Helmet>
                <div className='lifetime-saju-intro-img-div'>
                    {/* <img className='lifetime-saju-intro-bg' src="https://images.ktestone.com/meta/saju/lifetime-saju-intro-bg.jpg" alt="lifetime-saju-intro-input"/> */}
                    <div className='lifetime-saju-intro-date-picker-div'>
                        <DatePicker className='lifetime-saju-intro-date-picker' onChange={onChange} allowClear locale={locale}/>
                    </div>
                    <TimePicker format={timeFormat} onChange={onTimeChange} />
                    {/* <div className='lifetime-saju-intro-btn-div' onClick={onSubmitClick}>
                        <img className='lifetime-saju-intro-btn' src="https://images.ktestone.com/meta/saju/lifetime-saju-intro-submit-btn.jpg" alt="lifetime-saju-intro-btn"/>
                    </div> */}
                    <button onClick={onSubmitClick}>결과 보기</button>
                </div>
            </Fragment>
        );
    };
};

export default withRouter(LifetimeSaju);