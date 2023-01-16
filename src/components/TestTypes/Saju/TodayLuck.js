import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodayLuck = () => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [result, setResult] = useState("");
    const saju_url = 'https://saju.ktestone.com';
    useEffect(() => {
        const getToday = async () => {
            await axios.get(
                saju_url + '/today/total' + '/19880711'
            )
            .then((res) => {
                console.log(res);
                setResult(res?.data?.result?.DB_data)
            });
        }
        getToday();
    }, [saju_url]);


    return (
        <div>
            <h1>태어난 연도와 월을 입력해주세요</h1>
            {/* <DatePicker onChange={onChange} /> */}
            <div>{result ? result : null}</div>
        </div>
    );
};

export default TodayLuck;