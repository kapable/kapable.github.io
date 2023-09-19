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
    }, [history])

    useEffect(() => {
        if(userInfo) {
            getOrdertList(userInfo?.userId, "AIIMAGEGEN")
            .then(res => setAiOrderList(res.data));
        }
    }, [userInfo]);

    return (
        <div>
            <div className='mypage-top-navbar'>마이페이지</div>
            <div className='mypage-profile-div'>
                <Avatar size={64} icon={<UserOutlined />} />
                <p>{userInfo?.email}</p>
            </div>
            <Divider />
            <div>
                <div className='mypage-section-title-div'>AI 이용내역</div>
                {aiOrderList.length === 0 ? null : (
                        aiOrderList.map((order) => (
                            <OrderList order={order} key={`${order.id}-order-list-key`}/>
                        ))
                    )}
                
            </div>
            <Divider />
            <button className='mypage-section-logout-button' onClick={() => onClickLogout()}>로그아웃</button>
            <GoToHomeBtn page="mypage"/>
        </div>
    )
}

export default withRouter(MyPage);
