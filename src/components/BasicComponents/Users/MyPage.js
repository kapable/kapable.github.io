import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router';
import { Cookies } from 'react-cookie';
import { onClickLogin, verifyAccessToken } from '../../../tools/tools';
import { getOrdertList } from '../../../tools/aiImgTools';
import OrderList from './Orders/OrderList';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';
import { Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const cookies = new Cookies();

function MyPage({ onClickLogout }) {
    let history = useHistory();
    const [userInfo, setUserInfo] = useState();
    const [aiOrderList, setAiOrderList] = useState([]);
    const [lang, setLang] = useState('Kor');
    const [langComments, setLangComments] = useState(['마이페이지', 'AI 이용내역', '로그아웃']);

    useEffect(() => {
        // Only logged-In user can access this page
        if(cookies.get('accessToken')) {
            try {
                verifyAccessToken(cookies.get('accessToken'))
                    .then(res => setUserInfo(res))
            } catch (error) {
                if(window.confirm("로그인이 필요합니다.")) {
                    onClickLogin(window.location);
                }
            }
        } else {
            if(window.confirm("로그인이 필요합니다.")) {
                onClickLogin(window.location);
            }
        };
    }, [history]);

    useEffect(() => {
        if(lang === 'Kor') {
            setLangComments(['마이페이지', 'AI 이용내역', '로그아웃']);
        } else if (lang === 'Eng') {
            setLangComments(['My Page', 'AI contents List', 'Logout']);
        } else if (lang === 'JP') {
            setLangComments(['マイページ', 'AI 利用内訳', 'ログアウト']);
        }
    }, [lang]);

    useEffect(() => {
        if(userInfo) {
            getOrdertList(userInfo?.userId, "AIIMAGEGEN")
            .then(res => setAiOrderList(res.data));
        }
    }, [userInfo]);

    const languageIconRenderer = () => {
        return(
            <div>
                <img onClick={() => setLang("Kor")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/kor-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ 한국어 버전으로 하러가기 ]" />
                <img onClick={() => setLang("Eng")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/usa-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ Go to the English version ]" />
                <img onClick={() => setLang("JP")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/japan-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ 日本語バージョンをやりに行く。 ]" />
            </div>
        )
    };

    return (
        <div>
            <div className='mypage-top-navbar'>{langComments[0]}</div>
            <div className='mypage-profile-div'>
                <Avatar size={64} icon={<UserOutlined />} />
                <p>{userInfo?.email}</p>
            </div>
            {languageIconRenderer()}
            <Divider />
            <div>
                <div className='mypage-section-title-div'>{langComments[1]}</div>
                {aiOrderList.length === 0 ? null : (
                        aiOrderList.map((order) => (
                            <OrderList order={order} key={`${order.id}-order-list-key`} lang={lang}/>
                        ))
                    )}
                
            </div>
            <Divider />
            <button className='mypage-section-logout-button' onClick={() => onClickLogout()}>{langComments[2]}</button>
            <GoToHomeBtn page="mypage"/>
        </div>
    )
}

export default withRouter(MyPage);
