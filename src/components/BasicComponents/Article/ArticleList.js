import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ARTICLES from '../../../api/ARTICLES';
import ReactGA from 'react-ga';
import './Article.css';
import { Helmet } from 'react-helmet';

function ArticleList(props) {

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
                <meta property="og:image" content={'https://images.ktestone.com/introImages/labelSticker-intro.jpg'}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={'https://ktestone.com/kapable.github.io/blog/'}/>
                <meta property="twitter:title" content={'케이테스트 블로그'}/>
                <meta property="twitter:description" content={'케이테스트 블로그'}/>
                <meta property="twitter:image" content={'https://images.ktestone.com/introImages/labelSticker-intro.jpg'}/>
            </Helmet>
        )
    }

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onArticleButtonClick = () => {
        _eventSenderGA("Paging", "Click Article Title Button", "article list page");
    };

    const _onBackToMainButtonClick = () => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "article list page");
    };

    const articleRenderer = (li) => {
        let article_list = [];
        for (let article of li) {
            article_list.push(
            <Link to={"/blog/" + article.mainUrl + '/'} className="article-list-link" onClick={_onArticleButtonClick} key={article.mainUrl}>
                <div className="article-list-div">
                    {article.mainTitle}
                    <p className="article-list-date">{article.date}</p>
                </div>
            </Link>)
            // if (article.category === val) {
            // }
        }
        return article_list;
    };

    return (
        <Fragment>
            {metaTagRenderer()}
            {articleRenderer(ARTICLES)}
            <Link to='/' className="article-list-go-back-link" onClick={_onBackToMainButtonClick}>
                <div className="go-to-back-btn">← 메인으로 돌아가기</div></Link>
        </Fragment>
    );
};

export default withRouter(ArticleList);
