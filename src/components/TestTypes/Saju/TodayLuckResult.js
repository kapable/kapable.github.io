import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Divider } from 'antd';

const TodayLuckResult = (props) => {
    const saju_url = 'https://saju.ktestone.com';
    const [result, setResult] = useState({});

    useEffect(() => {
        const getToday = async(source) => {
            try {
                await axios.get(
                    saju_url + '/today/total/' + source
                )
                .then((res) => {
                    setResult(res?.data)
                });
            } catch (error) {
                console.error(error);
                return alert('결과를 가져오는 중 에러가 발생했습니다 ㅠㅠ');
            }
        };
        getToday(props?.match?.params?.query);
    }, [props]);

    const onRestartButtonClick = useCallback(() => {
        props.history.push(`/todayLuck/`)
    }, [props]);

    return (
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
            <Divider />
            <button onClick={onRestartButtonClick}>다시 보러 가기</button>
        </div>
    );
};

export default withRouter(TodayLuckResult);