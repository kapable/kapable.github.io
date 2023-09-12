import React, { useEffect, useState } from 'react'
import { Steps, Divider } from 'antd';
import dayjs from 'dayjs';

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
                    <div>주문번호<br />{order.worktableId}</div>
                    <div>
                        <img className='mypage-order-list-top-left-product-thumb' src={`https://images.ktestone.com/aiImgGen/${order.Product.productName}/${order.Product.productName}-product-thumb.jpg`} alt={`${order.Product.productName}-product-thumb`} />
                    </div>
                </div>
                <div className='mypage-order-list-top-right'>
                    <p>{dayjs(order.createdAt).format('YYYY-MM-DD')}</p>
                    <p>상품명: {order.Product.productKoreanName}</p>
                    <p>가격: {order.Product.price}</p>
                    <p>발송 메일<br />{}</p>
                </div>
            </div>
            <Divider />
            <Steps progressDot style={progressCss} items={stepItems} direction="horizontal" current={status} size="small" />
            <Divider />
            <div className='mypage-order-list-bottom'><p>{statusComments[status]}</p></div>
        </div>
    );
};

export default OrderList;