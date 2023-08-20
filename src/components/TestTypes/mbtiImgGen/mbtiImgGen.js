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
    }

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
            </>
        );
    } else if (mode === 'guide') {
        return (
            <div className='mbtiImgGen-guide-div'>
                <img className='mbtiImgGen-guide' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide.jpg' alt='mbtiImgGen-guide' />
                <Link to='/mbtiImgGen/upload'>
                    <div className='mbtiImgGen-guide-btn-div' onClick={() => setMode('intro')}>
                        <img className='mbtiImgGen-guide-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide-btn.png' alt='mbtiImgGen-guide-btn' />
                    </div>
                </Link>
            </div>
        );
    };
};

export default withRouter(MbtiImgGen);