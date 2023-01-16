import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const TodayLuck = () => {
    const dateFormat = 'YYYYMMDD';
    const [day, setDay] = useState("");
    const [result, setResult] = useState("");
    const saju_url = 'https://saju.ktestone.com';

    const getToday = useCallback(async () => {
        await axios.get(
            saju_url + '/today/total/' + day
        )
        .then((res) => {
            console.log(res);
            setResult(res?.data?.result?.DB_data)
        });
    }, [day]);

    const onChange = useCallback((date) => {
        setDay(moment(date).format(dateFormat));
    }, [dateFormat]);


    return (
        <div>
            <h1>태어난 연도와 월을 입력해주세요</h1>
            <DatePicker onChange={onChange} allowClear/>
            <div>---</div>
            <div>
                <button onClick={getToday}>확인하기</button>
            </div>
            <div>{result ? result : null}</div>
        </div>
    );
};

export default TodayLuck;