import React, { useCallback, useEffect, useState } from 'react'
import { Steps, Divider } from 'antd';
import dayjs from 'dayjs';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const OrderList = ({ order, lang }) => {
    const [status, setStatus] = useState(0);
    const [langComments, setLangComments] = useState(['결제하러 가기', '이미지 링크 확인', '주문번호', '상품명', '가격', '발송 메일']);
    const [stepItems, setStepItems] = useState([{ title: '사진 업로드' }, { title: '결제 완료' }, { title: '메일 발송 완료' }]);
    const [statusComments, setStatusComments] = useState({ 0: `사진 업로드가 완료 되었습니다.\n결제를 해주세요`, 1: `결제가 완료 되었습니다.\n4시간 이내 메일이 발송 됩니다.`, 2: `메일이 발송 되었습니다.\n메일을 확인해주세요.` });
    const [progressCss] = useState(
        window.innerWidth <= 544 ? {width: "100%", margin: '3rem auto', textAlign: "center"} : {width: "100%", margin: '3rem auto'}
    );
    const imgCheckableHour = 2;

    useEffect(() => {
        if(lang === 'Kor') {
            setLangComments(['결제하러 가기', '이미지 링크 확인', '주문번호', '상품명', '가격', '발송 메일']);
            setStepItems([{ title: '사진 업로드' }, { title: '결제 완료' }, { title: '메일 발송 완료' }]);
            setStatusComments({ 0: `사진 업로드가 완료 되었습니다.\n결제를 해주세요`, 1: `결제가 완료 되었습니다.\n4시간 이내 메일이 발송 됩니다.`, 2: `메일이 발송 되었습니다.\n메일을 확인해주세요.` });
        } else if (lang === 'Eng') {
            setLangComments(['Go-to-Pay', 'Check Image link', 'Order No.', 'Prod. Name', 'Price', 'Email address']);
            setStepItems([{ title: 'Upload Images' }, { title: 'Payment success' }, { title: 'Mail sended' }]);
            setStatusComments({ 0: `Your photo upload has been completed.\nPlease make the payment.`, 1: `Payment has been completed.\nYou will be sent an email within 4 hours.`, 2: `Your mail has been sent.\nPlease check your mail.` });
        } else if (lang === 'JP') {
            setLangComments(['支払いに行く', '画像リンクの確認', '注文番号', '商品名', '価格.', '発送メール']);
            setStepItems([{ title: '写真アップロード' }, { title: '決済完了' }, { title: 'メール送信済み' }]);
            setStatusComments({ 0: `写真のアップロードが完了しました。.\n決済をお願いします。`, 1: `決済が完了しました。\n4 時間以内にメールが送信されます。`, 2: `メールが送信されました。\nメールを確認してください。` });
        }
    }, [lang]);

    useEffect(() => {
        if(order.purchased) {
            setStatus(1);
        };
        if(order.sended) {
            setStatus(2);
        };
    }, [order]);

    const goToButton = useCallback(() => {
        if(status === 0) { // purchased needed
            return (
                <Link to={{pathname: `/fifteenTheme${lang}/upload`, query: { premode: "email", preWorktableId: order.worktableId }}} >
                    <button className='mypage-order-list-go-to-pay-button'> <RightCircleOutlined style={{fontSize:"1rem", margin: "0.5rem auto"}} /> {langComments[0]}</button>
                </Link>
            )
        }
        if(status === 2 && dayjs().diff(dayjs(order.imgCheckDate), 'hours') <= imgCheckableHour) { // sended & in 2-Hour
            return (
                <a href={`${window.location.origin}/fifteenTheme/check/?worktableId=${order.worktableId}`} target='_blank' rel="noopener noreferrer">
                    <button className='mypage-order-list-go-to-pay-button'> <RightCircleOutlined style={{fontSize:"1rem", margin: "0.5rem auto"}} /> {langComments[1]}</button>
                </a>
            )
        }
    }, [status, order.worktableId, order.imgCheckDate, langComments, lang]);

    return (
        <div className='mypage-order-list-div'>
            {console.log()}
            <div className='mypage-order-list-top'>
                <div className='mypage-order-list-top-left'>
                    <div><span style={{fontWeight: "bolder"}}>{langComments[2]}</span> {order.worktableId.slice(0, 13)}</div>
                    <div>
                        <img className='mypage-order-list-top-left-product-thumb' src={`https://images.ktestone.com/aiImgGen/${order.Product.productName}/${order.Product.productName}-product-thumb.jpg`} alt={`${order.Product.productName}-product-thumb`} />
                    </div>
                </div>
                <div className='mypage-order-list-top-right'>
                    <p>{dayjs(order.createdAt).format('YYYY-MM-DD')}</p>
                    <p><span style={{fontWeight: "bolder"}}>{langComments[3]}:</span> {lang === 'Kor' ? order.Product.productKoreanName : order.Product.productName}</p>
                    <p><span style={{fontWeight: "bolder"}}>{langComments[4]}:</span> {lang === 'Kor' ? order.Product.price + ' 원' : '$ ' + order.Product.dollarPrice} </p>
                    <p><span style={{fontWeight: "bolder"}}>{langComments[5]}</span><br />{order?.sendingEmail}</p>
                </div>
            </div>
            <Divider />
            <Steps progressDot style={progressCss} items={stepItems} direction="horizontal" current={status} size="default" />
            <Divider />
            <div className='mypage-order-list-bottom'>
                <p>
                    {statusComments[status]}
                </p>
                {goToButton()}
            </div>
        </div>
    );
};

export default OrderList;