import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { DatePicker, Divider } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';

const TodayLuck = () => {
    const dateFormat = 'YYYYMMDD';
    const [day, setDay] = useState("");
    const [result, setResult] = useState({});


    const saju_url = 'https://saju.ktestone.com';

    const getToday = useCallback(async () => {
        await axios.get(
            saju_url + '/today/total/' + day
        )
        .then((res) => {
            setResult(res?.data)
        });
    }, [day]);

    const onChange = useCallback((date) => {
        setDay(moment(date).format(dateFormat));
    }, [dateFormat]);


    return (
        <div>
            <h1>태어난 연도와 월을 입력해주세요</h1>
            <DatePicker onChange={onChange} allowClear locale={locale}/>
            <div>---</div>
            <div>
                <button onClick={getToday}>확인하기</button>
            </div>
            <Divider />
            <div>
                <h3>오늘의 총운</h3>
                <p>{result ? result?.total_result : null}</p>
                <Divider />
                <h3>오늘의 애정운</h3>
                <p>{result ? result?.love_result : null}</p>
                <Divider />
                <h3>오늘의 소망운</h3>
                <p>{result ? result?.wish_result : null}</p>
                <Divider />
                <h3>오늘의 사업운</h3>
                <p>{result ? result?.biz_result : null}</p>
                <Divider />
                <h3>오늘의 방위운</h3>
                <p>{result ? result?.direction_result : null}</p>
                <Divider />
                <h3>오늘의 금전운</h3>
                <p>{result ? result?.wealth_result : null}</p>
            </div>
        </div>
    );
};

export default TodayLuck;