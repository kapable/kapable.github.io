import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';
import { Helmet } from 'react-helmet';
import { Modal, Button } from 'antd';

const MbtiImgGen = () => {
    const [mode, setMode] = useState('intro');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const metaTagRenderer = () => {
        return (
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>내가 다른 MBTI 였다면?</title>
                <meta name="title" content="내가 다른 MBTI 였다면?"/>
                <meta name="description" content="다른 MBTI 15가지 타입의 사진을 받아보세요" data-react-helmet="true"/>
                <link rel="main-url" href="https://ktestone.com/mbtiImgGen/"/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ktestone.com/mbtiImgGen/"/>
                <meta property="og:title" content="내가 다른 MBTI 였다면?"/>
                <meta property="og:description" content="다른 MBTI 15가지 타입의 사진을 받아보세요"/>
                <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/mbtiImgGen-thumb.png`}/>
                <meta property="og:image:alt" content="내가 다른 MBTI 였다면?" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ktestone.com/mbtiImgGen/"/>
                <meta property="twitter:title" content="내가 다른 MBTI 였다면?"/>
                <meta property="twitter:description" content="다른 MBTI 15가지 타입의 사진을 받아보세요"/>
                <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/mbtiImgGen-thumb.png`}/>
                <meta property="twitter:image:alt" content="내가 다른 MBTI 였다면?" />
            </Helmet>
        )
    };

    const handleOkOrCancel = () => {
        setIsModalOpen(false);
    }

    const refundPolicy = <p style={{ textAlign:"left" }}>
            (주)쿠키로켓 (이하 회사)에서는 다음과 같은 기간 및 내용으로 환불 및 청약철회를 보장하고 있습니다. 상품 설명에 환불 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.<br /><br />
            1.본 상품은 회원의 구매 결제 완료 후 사진 업로드 즉시 변환이 이루어지는 상품으로, 회원의 사진 업로드가 완료되면 전자상거래법 시행령 제21조(소비자의 주문에 따라 개 별적으로 생산되는 재화)에 따라 청약 철회 및 해제('청약철회 등)가 불가합니다.<br />
            2. 컨셉 화보는 Al에 의하여 임의로 생성되므로 회사는 컨셉 화보의 품질에 보증할 수 없
            으며 이를 이유로 한 환불도 불가합니다.<br />
            3. 단, 구매한 상품이 회사가 표시 또는 광고한 내용과 다르거나 계약 내용과 다르게 이 행된 경우에는 구매한 날로부터 3개월 이내. 그 사실을 안 날 또는 알 수 있었던 날로부 터 30일 이내에 청약철회 등을 할 수 있습니다.<br />
            4. 청약절회 등을 한 경우 본 상품은 즉시 회사로 반환되며, 회사는 7 영업일 이내에 회원 이 지불한 금액을 회원에게 반환합니다.<br />
            5. 회사의 고의 또는 과실로 인해 회원이 구매한 유료서비스를 정상적으로 이용할 수 없 는 등 회원에게 피해가 발생한 경우, 회사는 그에 대한 해결을 위해서 최선의 노력을 하 며 그와 더불어 해당 피해에 대한 적절한 보상을 합니다.<br />
            6. 회사는 소비자의 피해보상, 불만 처리 및 분쟁 처리에 관한 사항, 환물에 대한 사항 등 소비자의 문제 제기에 대해서 해결하기 위해서 다음과 같은 창구를 운영합니다.<br />
            카카오톡 상담(고객센터): https://pf.kakao.com/_IxnRfb/99696114<br /><br />
            유선 고객센터: 01084542518<br />
            고객센터 운영 시간: 평일 오전 11:00 ~ 오후 5:00 (주말 및 공휴일 제외)
        </p>

    const bizInfo = <p className='mbtiImgGen-intro-biz-info-p'>
            주식회사 쿠키로켓 | 사업자등록번호 : 582-88-01697 | 대표 김정빈<br />
            주소 : 서울특별시 송파구 송파대로 409 4층<br />호스팅 서비스 : AWS | 통신판매업<br />
            유선번호 : 01084542518<br />
            신고번호 2020-경기하남-0706호
        </p>

    if(mode === 'intro') {
        return (
            <>
                {metaTagRenderer()}
                <div className='mbtiImgGen-intro-div'>
                    <img className='mbtiImgGen-intro' src='https://images.ktestone.com/introImages/mbtiImgGen-intro.jpg' alt='mbtiImgGen-intro' />
                    <div className='mbtiImgGen-intro-btn-div' onClick={() => setMode('guide')}>
                        <img className='mbtiImgGen-intro-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-intro-btn.png' alt='mbtiImgGen-intro-btn' />
                    </div>
                </div>
                <p style={{ color: "grey", fontWeight: "bolder" }}>*위 상품의 최대 이용 기간은 6개월입니다.</p>
                <p onClick={() => setIsModalOpen(true)} style={{ color: "grey", fontWeight: "bolder", cursor: "pointer", textDecoration: "underline" }}>환불 규정 안내</p>
                {bizInfo}
                <Modal title="환불 규정" open={isModalOpen} onOk={handleOkOrCancel} onCancel={handleOkOrCancel} footer={[
                    <Button onClick={handleOkOrCancel}>확인</Button>
                ]}>
                    {refundPolicy}
                </Modal>
            </>
        );
    } else if (mode === 'guide') {
        return (
            <>
                <div className='mbtiImgGen-guide-div'>
                    <img className='mbtiImgGen-guide' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide.jpg' alt='mbtiImgGen-guide' />
                    <Link to='/mbtiImgGen/upload'>
                        <div className='mbtiImgGen-guide-btn-div' onClick={() => setMode('intro')}>
                            <img className='mbtiImgGen-guide-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide-btn.png' alt='mbtiImgGen-guide-btn' />
                        </div>
                    </Link>
                </div>
                {bizInfo}
            </>
        );
    };
};

export default withRouter(MbtiImgGen);