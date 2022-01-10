import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import STARTBTN from '../../../api/PostImg/Background/Start_btn.png';
import { Helmet } from 'react-helmet';

function Post2021() {

    const metaTagRenderer = () => {
        let _PostMetaTag = <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>퍼스널 우체통</title>
                            <meta name="title" content="퍼스널 우체통 - 케이테스트"/>
                            <meta name="description" content="나만의 퍼스널 우체통" data-react-helmet="true"/>
                            <link rel="main-url" href="https://ktestone.com/kapable.github.io/post2021/"/>

                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="https://ktestone.com/kapable.github.io/post2021/"/>
                            <meta property="og:title" content="퍼스널 우체통 - 케이테스트"/>
                            <meta property="og:description" content="나만의 퍼스널 우체통"/>
                            <meta property="og:image" content="https://images.ktestone.com/meta/post2021/post2021-meta.png"/>
                            <meta property="og:image:alt" content="퍼스널 우체통 - 케이테스트" />

                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/post2021/"/>
                            <meta property="twitter:title" content="퍼스널 우체통 - 케이테스트"/>
                            <meta property="twitter:description" content="나만의 퍼스널 우체통"/>
                            <meta property="twitter:image" content="https://images.ktestone.com/meta/post2021/post2021-meta.png"/>
                            <meta property="twitter:image:alt" content="퍼스널 우체통 - 케이테스트" />
                        </Helmet>
        return _PostMetaTag
    }
    return (
        <Fragment>
            {metaTagRenderer()}
            <div className="start-page-bg-div">
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <img src={"https://images.ktestone.com/PostImg/Object/Postbox_startpg.png"} alt='MAINTITLE' className="start-page-postbox"/>
                <Link to="/auth/" ><img src={STARTBTN} alt="Start-btn" className="start-page-startbtn" /></Link>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
}

export default withRouter(Post2021);
