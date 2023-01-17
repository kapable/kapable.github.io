import React, { useCallback, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withRouter } from 'react-router';
import crypto from 'crypto-js';
import Lottie from 'react-lottie';
import * as loading from '../../../loading-animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const TodayLuck = (props) => {
    const dateFormat = 'YYYYMMDD';
    const [day, setDay] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitClick = useCallback(async () => {
        if(!day) {
            return alert('날짜를 입력해주세요!');
        }
        const today_date = moment().format(dateFormat);
        const query_date = [today_date, day].join('-');
        const crypto_query_date = encodeURIComponent(crypto.AES.encrypt(JSON.stringify(query_date), 'ktestsaju').toString());
        
        setIsLoading(true);
        setTimeout(() => {
            props.history.push(`/todayLuck/${crypto_query_date}`)
        }, "2500");
    }, [day, props]);

    const onChange = useCallback((date) => {
        setDay(moment(date).format(dateFormat));
    }, [dateFormat]);

    if(isLoading) {
        return (
            <Lottie options={defaultOptions} height={120} width={120}/>
        )
    } else {
        return (
            <div>
                <h1>태어난 연도와 월을 입력해주세요</h1>
                <DatePicker onChange={onChange} allowClear locale={locale}/>
                <div>---</div>
                <div>
                    <button onClick={onSubmitClick}>확인하기</button>
                </div>
            </div>
        );
    }
};

export default withRouter(TodayLuck);