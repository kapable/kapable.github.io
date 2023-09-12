import React, { useEffect, useState } from 'react'
import { Steps, Divider } from 'antd';
import dayjs from 'dayjs';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const OrderList = ({ order }) => {
    const [status, setStatus] = useState(0);
    const stepItems = [{ title: '사진 업로드' }, { title: '결제 완료' }, { title: '메일 발송 완료' }];
    const statusComments = { 0: "사진 업로드가 완료 되었습니다.\n결제를 해주세요", 1: "결제가 완료 되었습니다.\n2시간 이내 메일이 발송 됩니다.", 2: "메일이 발송 되었습니다.\n메일을 확인해주세요" };
    const [progressCss] = useState(
        window.innerWidth <= 544 ? {width: "100%", margin: '3rem auto', textAlign: "center"} : {width: "100%", margin: '3rem auto'}
    );

    useEffect(() => {
        if(order.sended) {
            setStatus(2);
        };
        if(order.purchased) {
            setStatus(1);
        };
    }, [order]);

    return (
        <div className='mypage-order-list-div'>
            {console.log()}
            <div className='mypage-order-list-top'>
                <div className='mypage-order-list-top-left'>
                    <div><span style={{fontWeight: "bolder"}}>주문번호</span><br />{order.worktableId}</div>
                    <div>
                        <img className='mypage-order-list-top-left-product-thumb' src={`https://images.ktestone.com/aiImgGen/${order.Product.productName}/${order.Product.productName}-product-thumb.jpg`} alt={`${order.Product.productName}-product-thumb`} />
                    </div>
                </div>
                <div className='mypage-order-list-top-right'>
                    <p>{dayjs(order.createdAt).format('YYYY-MM-DD')}</p>
                    <p><span style={{fontWeight: "bolder"}}>상품명:</span> {order.Product.productKoreanName}</p>
                    <p><span style={{fontWeight: "bolder"}}>가격:</span> {order.Product.price} 원</p>
                    <p><span style={{fontWeight: "bolder"}}>발송 메일</span><br />{}</p>
                </div>
            </div>
            <Divider />
            <Steps progressDot style={progressCss} items={stepItems} direction="horizontal" current={status} size="default" />
            <Divider />
            <div className='mypage-order-list-bottom'>
                <p>
                    {statusComments[status]}
                </p>
                {status === 0 ?
                <Link to={{pathname: "/mbtiImgGenT/upload", query: { premode: "email", preWorktableId: order.worktableId }}} >
                        <button
                            className='mypage-order-list-go-to-pay-button'> <RightCircleOutlined style={{fontSize:"1rem", margin: "0.5rem auto"}} /> 결제하러 가기</button></Link> : null}
            </div>
        </div>
    );
};

export default OrderList;