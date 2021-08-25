import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import ScriptTag from 'react-script-tag'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import './Article.css'

function Article(props) {

    let _sharable_url = window.location.href

    var screen_width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

    useEffect(() => {
        if (screen_width < 330) {
            var img_size = '250px'
        } else if (screen_width < 450) {
            img_size = '350px'
        } else if (screen_width < 1050) {
            img_size = '700px'
        } else {
            img_size = '1000px'
        }
        Array.from(document.querySelectorAll('div.article-contents > img')).map((im) => (
            im.style.width = img_size
        ))
        Array.from(document.querySelectorAll('div.article-contents > p > img')).map((im) => (
            im.style.width = img_size
        ))
    }, [screen_width])

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    const _onBackToListButtonClick = () => {
        _eventSenderGA("Paging", "Click Re-test Button", "result page");
    }

    const adTagRenderer = () => {
        return(
            <Fragment>
                <div id="protag-in_article_video"></div>
                    <ScriptTag type="text/javascript">
                        {`window.googletag = window.googletag || { cmd: [] };
                        window.protag = window.protag || { cmd: [] };
                        window.protag.cmd.push(function () {
                            window.protag.display("protag-in_article_video");
                        });`}
                    </ScriptTag>
            </Fragment>
        )
    }

    const metaTagRenderer = () => {
        return(
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>{props.source.mainTitle}-케이테스트</title>
                <meta name="title" content={props.source.mainTitle+'-케이퍼니'}/>
                <meta name="description" content={props.source.metaTag} data-react-helmet="true"/>
                <link rel="main-url" href={_sharable_url}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={_sharable_url}/>
                <meta property="og:title" content={props.source.mainTitle+'-케이퍼니'}/>
                <meta property="og:description" content={props.source.metaTag}/>
                <meta property="og:image" content={props.source.mainImg}/>
                <meta property="og:image:alt" content={props.source.mainTitle} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={_sharable_url}/>
                <meta property="twitter:title" content={props.source.mainTitle+'-케이퍼니'}/>
                <meta property="twitter:description" content={props.source.metaTag}/>
                <meta property="twitter:image" content={props.source.mainImg}/>
                <meta property="twitter:image:alt" content={props.source.mainTitle} />
            </Helmet>
        )
    }
    return (
        <Fragment >
            {metaTagRenderer()}
            <div className="article-div">
                <div className="article-title">{props.source.mainTitle}</div>
                <p className="article-date">{props.source.date}</p>
                {adTagRenderer()}
                <div className="article-contents">
                    {ReactHtmlParser(props.source.contents)}
                </div>
                <Link to='/kfunny' className="article-go-back-link" onClick={_onBackToListButtonClick}>
                <div
                    className="go-to-back-btn-article"
                    >← 다른 기사 보러가기</div></Link>
            </div>
        </Fragment>
    )
}

export default Article;
