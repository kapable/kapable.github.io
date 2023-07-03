import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA4 from 'react-ga4';

const Post2022 = ({ language }) => {
    const introImgSrc = "https://images.ktestone.com/PostImg2022/Intro/Intro.png"

    const _eventSenderGA = (category, action, label) => {
        ReactGA4.event({
            category: category,
            action: action,
            label: label,
        });
    };

    const metaTagRenderer = () => {
        let _PostMetaTag = <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>퍼스널 우체통 2022</title>
                            <meta name="title" content="퍼스널 우체통 2022 - 케이테스트"/>
                            <meta name="description" content="나만의 퍼스널 우체통 2022" data-react-helmet="true"/>
                            <link rel="main-url" href="https://ktestone.com/kapable.github.io/post2022/"/>

                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="https://ktestone.com/kapable.github.io/post2022/"/>
                            <meta property="og:title" content="퍼스널 우체통 2022 - 케이테스트"/>
                            <meta property="og:description" content="나만의 퍼스널 우체통 2022"/>
                            <meta property="og:image" content={introImgSrc}/>
                            <meta property="og:image:alt" content="퍼스널 우체통 2022 - 케이테스트" />

                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/post2022/"/>
                            <meta property="twitter:title" content="퍼스널 우체통 2022 - 케이테스트"/>
                            <meta property="twitter:description" content="나만의 퍼스널 우체통 2022"/>
                            <meta property="twitter:image" content={introImgSrc}/>
                            <meta property="twitter:image:alt" content="퍼스널 우체통 2022 - 케이테스트" />
                        </Helmet>
            return _PostMetaTag
    }

    return (
        <Fragment>
            {metaTagRenderer()}
            <div className='post2022-intro-main-div'>
                <Link
                    to={{
                        pathname: `/postAuth2022/`,
                        state: {
                            language: language
                        },}}
                        onClick={() => {
                            _eventSenderGA("Paging", "Click Start-to-auth Button", "post start page");
                        }}>
                    <img loading="lazy" src={introImgSrc} alt="intro-img" className='post2022-intro-img' />
                </Link>
            </div>
        </Fragment>
    );
};

export default withRouter(Post2022);