import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';
import ReactGA4 from 'react-ga4';
import './Article.css';
import AdsenseAdvertiser from '../../SubComponents/AdsenseAdvertiser';
import GoToHomeBtn from '../../SubComponents/GoToHomeBtn';

function Article(props) {

    let _sharable_url = `https://ktestone.com/kapable.github.io/blog/${props.source.testUrl}blog/`;

    useEffect(() => {
        Array.from(document.querySelectorAll('div.article-contents > img')).map((im) => (
            im.style.width = '95%'
        ))
        Array.from(document.querySelectorAll('div.article-contents > p > img')).map((im) => (
            im.style.width = '95%'
        ))
    }, []);

    function _eventSenderGA(category, action, label){
        ReactGA4.event({
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
                <meta name="description" content={`케이테스트 x ${props.source.mainTitle} MBTI 및 해석 결과`} data-react-helmet="true"/>
                <link rel="main-url" href={_sharable_url}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={_sharable_url}/>
                <meta property="og:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="og:description" content={`케이테스트 x ${props.source.mainTitle} MBTI 및 해석 결과`}/>
                <meta property="og:image" content={`https://images.ktestone.com/blog/${props.source.testUrl}/${props.source.testUrl}-blog-thumb.jpg`}/>
                <meta property="og:image:alt" content={props.source.mainTitle} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={_sharable_url}/>
                <meta property="twitter:title" content={props.source.mainTitle+'-케이테스트 블로그'}/>
                <meta property="twitter:description" content={`케이테스트 x ${props.source.mainTitle} MBTI 및 해석 결과`}/>
                <meta property="twitter:image" content={`https://images.ktestone.com/blog/${props.source.testUrl}/${props.source.testUrl}-blog-thumb.jpg`}/>
                <meta property="twitter:image:alt" content={props.source.mainTitle} />
            </Helmet>
        )
    };

    return (
        <Fragment >
            {metaTagRenderer()}
            <div className="article-div">
                <div className="article-title"><h2>{props.source.mainTitle}</h2></div>
                <p className="article-date">{props.source.date}</p>

                {/* Header */}
                <div className='article-header'>
                    <h2><b>{`${props.source.mainTitle} MBTI 및 해석 결과`}</b></h2>
                    <p>{`총 12가지 질문으로 구성된 ${props.source.mainTitle} 입니다.`}<br />{`${props.source.mainTitle} MBTI에 대해 안내해드리겠습니다.`}</p>
                </div>

                {/* Contents Body */}
                {props.source.contents.map((elem, idx) => (
                    <div className='article-body' key={`${elem.type}-body-key`}>
                        <h3><b>{elem.type} {elem.header}</b></h3>
                        <p>{ReactHtmlParser(elem.body)}</p>
                        <img loading="lazy" className='article-mainImg' src={`https://images.ktestone.com/resultImages/${props.source.testUrl}/${elem.type}.jpg`} alt={elem.type} />
                        {idx % 2 !== 0 ? (
                            <AdsenseAdvertiser
                                client="ca-pub-2382342018701919"
                                slot="6452969262"
                                format="auto"
                                responsive="true"
                            />
                        ) : null}
                    </div>
                ))}

                {/* Contents Tail */}
                <div className='article-tail'>
                    <h2><b>{`${props.source.mainTitle} MBTI 정리표`}</b></h2>
                    <img loading="lazy" className='article-mainImg' src={`https://images.ktestone.com/blog/${props.source.testUrl}/${props.source.testUrl}-blog-table.jpg`} alt={`${props.source.testUrl}-blog-table`} /><br /><br />

                    <Link to='/' className="main-link-block" key="blog-to-ktest-banner" onClick={_onBackToMainButtonClick}>
                        <img loading="lazy" className="test-main-img" src={`https://images.ktestone.com/default/blog-to-ktest-button.jpg`} alt="blog-to-ktest" />
                    </Link>
                </div>
                <Link to={'/blog/'} className="article-go-back-link" onClick={_onBackToListButtonClick}>
                    <div className="go-to-back-btn-article">← 다른 글 보러가기</div></Link>
            </div>
            <GoToHomeBtn page="blog"/>
        </Fragment>
    );
};

export default withRouter(Article);
