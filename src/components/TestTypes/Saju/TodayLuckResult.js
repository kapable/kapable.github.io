import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Divider } from 'antd';
import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga';
import AGAINBTN from '../../../api/DefaultImg/result-to-again-btn.png';
import './TodayLuck.css';

const TodayLuckResult = (props) => {
    const saju_url = 'https://saju.ktestone.com';
    const [result, setResult] = useState({});
    const [isOpened, setIsOpened] = useState(false);
    const [coupangCookies, setCoupangCookie] = useCookies(['coupang']);
    const coupangLink = "https://link.coupang.com/a/KgpKa";

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const onCoupangButtonClick = useCallback(() => {
        const cookieAges = 60*60*12;
        setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        _eventSenderGA("Opening", "Click go-to-Coupang Button", "result page");
    }, [setCoupangCookie]);

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
        props.history.push(`/todayLuck/`);
    }, [props]);

    return (
        <div className='todayLuck-result-main-div'>
            <img className='todayLuck-top-banner-sample' src="https://images.ktestone.com/meta/saju/todayLuck-top-banner-sample.png" alt='todayLuck-top-banner-sample'/>
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
            <div className="re-test-btn">
                <img
                    src={AGAINBTN}
                    className="re-test-btn-img"
                    onClick={onRestartButtonClick}
                    alt="테스트 다시하기"/>
            </div>
        </div>
    );
};

export default withRouter(TodayLuckResult);