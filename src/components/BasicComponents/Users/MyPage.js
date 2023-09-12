import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router';
import { Cookies } from 'react-cookie';
import { verifyAccessToken } from '../../../tools/tools';
import { getOrdertList } from '../../../tools/aiImgTools';
import OrderList from './Orders/OrderList';

const cookies = new Cookies();

function MyPage({ onClickLogout }) {
    let history = useHistory();
    const [userInfo, setUserInfo] = useState();
    const [aiOrderList, setAiOrderList] = useState([]);

    useEffect(() => {
        // Only logged-In user can access this page
        if(cookies.get('accessToken')) {
            verifyAccessToken(cookies.get('accessToken'))
                .then(res => setUserInfo(res))
        } else {
            history.replace("/");
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
            {console.log(aiOrderList)}
            <div className='mypage-top-navbar'>마이페이지</div>
            <div className='mypage-profile-div'>{userInfo?.email}</div>
            <div>
                <div className='mypage-section-title-div'>AI 이용내역</div>
                {aiOrderList.length === 0 ? null : (
                        aiOrderList.map((order) => (
                            <OrderList order={order} key={`${order.id}-order-list-key`}/>
                        ))
                    )}
                
            </div>
            <button className='mypage-section-logout-button' onClick={() => onClickLogout()}>로그아웃</button>
        </div>
    )
}

export default withRouter(MyPage);
