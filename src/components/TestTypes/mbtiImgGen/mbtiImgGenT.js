import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';
import { Helmet } from 'react-helmet';

const MbtiImgGen = () => {
    const [mode, setMode] = useState('intro');

    const metaTagRenderer = () => {
        return (
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>내가 다른 MBTI 였다면?</title>
                <meta name="title" content="내가 다른 MBTI 였다면?"/>
                <meta name="description" content="다른 MBTI 15가지 타입의 사진을 받아보세요" data-react-helmet="true"/>
                <link rel="main-url" href="https://ktestone.com/mbtiImgGenT/"/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ktestone.com/mbtiImgGenT/"/>
                <meta property="og:title" content="내가 다른 MBTI 였다면?"/>
                <meta property="og:description" content="다른 MBTI 15가지 타입의 사진을 받아보세요"/>
                <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/mbtiImgGen-thumb.png`}/>
                <meta property="og:image:alt" content="내가 다른 MBTI 였다면?" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ktestone.com/mbtiImgGenT/"/>
                <meta property="twitter:title" content="내가 다른 MBTI 였다면?"/>
                <meta property="twitter:description" content="다른 MBTI 15가지 타입의 사진을 받아보세요"/>
                <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/mbtiImgGen-thumb.png`}/>
                <meta property="twitter:image:alt" content="내가 다른 MBTI 였다면?" />
            </Helmet>
        )
    };

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
                    {/* <a href='https://bouns.io/app/7a4499ca-4644-45ee-9b3f-f63ea3d19e64/_pay/ktest-ai/?name=MBTI%20%ED%85%8C%EB%A7%88&price=6900'> */}
                        <div className='mbtiImgGen-intro-btn-div'
                        onClick={() => setMode('guide')}
                    >
                        <img className='mbtiImgGen-intro-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-intro-btn.png' alt='mbtiImgGen-intro-btn' />
                    </div>
                    {/* </a> */}
                </div>
                <p style={{ color: "grey", fontWeight: "bolder" }}>*위 상품의 최대 이용 기간은 6개월입니다.</p>
            </>
        );
    } else if (mode === 'guide') {
        return (
            <>
                <div className='mbtiImgGen-guide-div'>
                    <img className='mbtiImgGen-guide' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide.jpg' alt='mbtiImgGen-guide' />
                    <Link to='/mbtiImgGenT/upload'>
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