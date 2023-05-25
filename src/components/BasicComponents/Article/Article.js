import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import './Article.css';

function Article(props) {

    let _sharable_url = window.location.href;

    useEffect(() => {
        Array.from(document.querySelectorAll('div.article-contents > img')).map((im) => (
            im.style.width = '95%'
        ))
        Array.from(document.querySelectorAll('div.article-contents > p > img')).map((im) => (
            im.style.width = '95%'
        ))
    }, []);

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onBackToListButtonClick = () => {
        _eventSenderGA("Paging", "Click Re-test Button", "article page");
    };

    const _onBackToMainButtonClick = () => {
        _eventSenderGA("Paging", "Click Blog-to-main Button", "article page");
    };

    const metaTagRenderer = () => {
        return(
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>{props.source.mainTitle}-케이테스트 블로그</title>
                <meta name="title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta name="description" content={props.source.desc} data-react-helmet="true"/>
                <link rel="main-url" href={_sharable_url}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={_sharable_url}/>
                <meta property="og:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="og:description" content={props.source.desc}/>
                <meta property="og:image" content={props.source.thumbImg}/>
                <meta property="og:image:alt" content={props.source.mainTitle} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={_sharable_url}/>
                <meta property="twitter:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="twitter:description" content={props.source.desc}/>
                <meta property="twitter:image" content={props.source.thumbImg}/>
                <meta property="twitter:image:alt" content={props.source.mainTitle} />
            </Helmet>
        )
    };

    return (
        <Fragment >
            {metaTagRenderer()}
            <div className="article-div">
                <div className="article-title">{props.source.mainTitle}</div>
                <p className="article-date">{props.source.date}</p>
                <div className="article-contents">
                    {ReactHtmlParser(props.source.contents)}
                </div>
                <Link to='/' className="main-link-block" key="blog-to-ktest-banner" onClick={_onBackToMainButtonClick}>
                    <img className="test-main-img" src={`https://images.ktestone.com/default/blog-to-ktest-button.jpg`} alt="blog-to-ktest" />
                </Link>
                <Link to={'/blog/'} className="article-go-back-link" onClick={_onBackToListButtonClick}>
                    <div className="go-to-back-btn-article">← 다른 글 보러가기</div></Link>
            </div>
        </Fragment>
    );
};

export default withRouter(Article);
