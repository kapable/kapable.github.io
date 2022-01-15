import React, { Fragment, useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function Post2021(props) {
    const [upbarBtnImg, setUpbarBtnImg] = useState(``);
    const [postBoxBtnImg, setPostBoxBtnImg] = useState(``);
    const [startBtnImg, setStartBtnImg] = useState(``);

    useEffect(() => {
        if(props.language === `Kor`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/Background/up_bg_bar.png");
            setPostBoxBtnImg("https://images.ktestone.com/PostImg/Object/Postbox_startpg.png");
            setStartBtnImg("https://images.ktestone.com/PostImg/Background/Start_btn.png");
        } else if(props.language === `Eng`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/English/Button/up_bg_bar.png");
            setPostBoxBtnImg("https://images.ktestone.com/PostImg/English/Object/Postbox_startpg.png");
            setStartBtnImg("https://images.ktestone.com/PostImg/English/Button/Start_btn.png");
        }
    }, [props])

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    const metaTagRenderer = () => {
        if(props.language === `Kor`) {
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
        } else if(props.language === `Eng`) {
            let _PostMetaTag = <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>Persoanl Mailbox</title>
                            <meta name="title" content="Persoanl Mailbox - K-test"/>
                            <meta name="description" content="My Persoanl Mailbox" data-react-helmet="true"/>
                            <link rel="main-url" href="https://ktestone.com/kapable.github.io/post2022Eng/"/>

                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="https://ktestone.com/kapable.github.io/post2022Eng/"/>
                            <meta property="og:title" content="Persoanl Mailbox - K-test"/>
                            <meta property="og:description" content="My Persoanl Mailbox"/>
                            <meta property="og:image" content="https://images.ktestone.com/meta/post2021/post2022Eng-meta.png"/>
                            <meta property="og:image:alt" content="Persoanl Mailbox - K-test" />

                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/post2022Eng/"/>
                            <meta property="twitter:title" content="Persoanl Mailbox - K-test"/>
                            <meta property="twitter:description" content="My Persoanl Mailbox"/>
                            <meta property="twitter:image" content="https://images.ktestone.com/meta/post2021/post2022Eng-meta.png"/>
                            <meta property="twitter:image:alt" content="Persoanl Mailbox - K-test" />
                        </Helmet>
            return _PostMetaTag
        }
    }

    return (
        <Fragment>
            {metaTagRenderer()}
            <div className="start-page-bg-div">
                <img src={upbarBtnImg} alt="UPBAR" className="start-page-upbar"/>
                <img src={postBoxBtnImg} alt='MAINTITLE' className="start-page-postbox"/>
                <Link
                    to={{
                        pathname: `/auth/`,
                        state: {
                            language: props.language
                        },
                    }}
                    onClick={() => {
                        _eventSenderGA("Paging", "Click Start-to-auth Button", "post start page");
                    }}
                ><img src={startBtnImg} alt="Start-btn" className="start-page-startbtn" /></Link>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
}

export default withRouter(Post2021);
