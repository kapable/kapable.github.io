import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ARTICLES from '../../../api/ARTICLES';
import ReactGA from 'react-ga';
import './Article.css';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'antd';
import NavigationBar from '../Navigation/NavigationBar';

function ArticleList() {

    const metaTagRenderer = () => {
        return(
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>케이테스트 블로그</title>
                <meta name="title" content={'케이테스트 블로그'}/>
                <meta name="description" content={'케이테스트 블로그'} data-react-helmet="true"/>
                <link rel="main-url" href={'https://ktestone.com/kapable.github.io/blog/'}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={'https://ktestone.com/kapable.github.io/blog/'}/>
                <meta property="og:title" content={'케이테스트 블로그'}/>
                <meta property="og:description" content={'케이테스트 블로그'}/>
                <meta property="og:image" content={'https://images.ktestone.com/main-thumbnail/ktest-blog-thumb.png'}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={'https://ktestone.com/kapable.github.io/blog/'}/>
                <meta property="twitter:title" content={'케이테스트 블로그'}/>
                <meta property="twitter:description" content={'케이테스트 블로그'}/>
                <meta property="twitter:image" content={'https://images.ktestone.com/main-thumbnail/ktest-blog-thumb.png'}/>
            </Helmet>
        )
    };

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onArticleButtonClick = () => {
        _eventSenderGA("Paging", "Click Article Title Button", "blog article list page");
    };

    const _onBackToMainButtonClick = () => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "blog article list page");
    };

    const articleRenderer = (li) => {
        let article_list = [];
        for (let article of li) {
            article_list.push(
            <Link to={"/blog/" + article.testUrl + 'blog/'} className="article-list-link" onClick={_onArticleButtonClick} key={article.testUrl}>
                <Row align='middle' justify="center" className='article-list-row'>
                    <Col span={9} style={{overflow: 'hidden'}}>
                        <img className='article-list-thumb' src={`https://images.ktestone.com/blog/${article.testUrl}/${article.testUrl}-blog-thumb.jpg`} alt={article.mainTitle} />
                    </Col>
                    <Col span={15} style={{lineHeight: 0}}>
                        <Row align='middle' justify="center">
                            <p className="article-list-title"><b>{article.mainTitle}<br />MBTI 및 해석 결과</b></p>
                        </Row>
                        <Row align='middle' justify="center" >
                            <p className="article-list-desc">{`케이테스트 x ${article.mainTitle}`}</p>
                        </Row>
                    </Col>
                </Row>
            </Link>);
        };
        return article_list;
    };

    return (
        <Fragment>
            <NavigationBar page="blog list"/>
            {metaTagRenderer()}
            <img className="main-header" style={{marginTop: '3.5rem'}} src={`https://images.ktestone.com/main-thumbnail/ktest-blog-thumb.png`} alt="KTEST-Blog" />
            <Link to='/' className="main-link-block" key="blog-to-ktest-banner" onClick={_onBackToMainButtonClick}>
                <img className="test-main-img" src={`https://images.ktestone.com/default/blog-to-ktest-button.jpg`} alt="blog-to-ktest" />
            </Link>
            {articleRenderer(ARTICLES)}
        </Fragment>
    );
};

export default withRouter(ArticleList);
