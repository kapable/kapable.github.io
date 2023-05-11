import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 
import ScriptTag from 'react-script-tag'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import './Article.css'
import ARTICLES from '../../../api/ARTICLES';

function Article(props) {

    let _sharable_url = window.location.href;

    useEffect(() => {
        Array.from(document.querySelectorAll('div.article-contents > img')).map((im) => (
            im.style.width = '95%'
        ))
        Array.from(document.querySelectorAll('div.article-contents > p > img')).map((im) => (
            im.style.width = '95%'
        ))
    }, [])

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    const _onBackToListButtonClick = () => {
        _eventSenderGA("Paging", "Click Re-test Button", "article page");
    }

    const _onArticleButtonClick = () => {
        _eventSenderGA("Paging", "Click Related Article Title Button", "article page");
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
                <title>{props.source.mainTitle}-케이테스트 블로그</title>
                <meta name="title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta name="description" content={props.source.metaTag} data-react-helmet="true"/>
                <link rel="main-url" href={_sharable_url}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={_sharable_url}/>
                <meta property="og:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="og:description" content={props.source.metaTag}/>
                <meta property="og:image" content={props.source.mainImg}/>
                <meta property="og:image:alt" content={props.source.mainTitle} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={_sharable_url}/>
                <meta property="twitter:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="twitter:description" content={props.source.metaTag}/>
                <meta property="twitter:image" content={props.source.mainImg}/>
                <meta property="twitter:image:alt" content={props.source.mainTitle} />
            </Helmet>
        )
    }

    const relatedArticleRenderer = (li) => {
        let rel_list = [];
        for (var code of li) {
            for (var article of ARTICLES) {
                if(article.mainUrl === code) {
                    rel_list.push(<Fragment key={article.mainUrl+'-Frag'}>
                        <Link to={"/kfunny/" + article.category + '/' + article.mainUrl + '/'} onClick={_onArticleButtonClick} className="related-article-link" key={article.mainUrl}>
                            <div className="related-article-div">
                                {article.mainTitle}
                                <p className="related-article-date">{article.date}</p>
                            </div>
                        </Link>
                    </Fragment>)
                }
            }
        }
        return rel_list;
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
                <a target='_blank' rel="noopener noreferrer" href="https://ktestone.com/kapable.github.io/labelSticker/">
                    <img className='article-mainImg' alt='' src={props.source.mainImg} /></a>
                {relatedArticleRenderer(props.source.relatedArticles)}
                <Link to={'/blog/'} className="article-go-back-link" onClick={_onBackToListButtonClick}>
                    <div className="go-to-back-btn-article">← 다른 기사 보러가기</div></Link>
            </div>
        </Fragment>
    )
}

export default withRouter(Article);
