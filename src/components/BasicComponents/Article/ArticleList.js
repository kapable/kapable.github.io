import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import ARTICLES from '../../../api/ARTICLES';
import ARTICLEBANNER from '../../../api/DefaultImg/Ktest-funny.png';
import ReactGA from 'react-ga';
import './Article.css'

function ArticleList() {
    let history = useHistory();

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    const _onArticleButtonClick = () => {
        _eventSenderGA("Paging", "Click Article Title Button", "article list page");
    }

    const _onBackToMainButtonClick = () => {
        _eventSenderGA("Paging", "Click Back-to-main Button", "result page");
    }

    return (
        <Fragment>
            <img className="test-main-img" src={ARTICLEBANNER} alt="KTEST-Funny" />
            {ARTICLES.map((article) => (
                <Link to={"/kfunny/" + article.mainUrl + '/'} className="article-list-link" onClick={_onArticleButtonClick}>
                    <div className="article-list-div">
                        {article.mainTitle}
                        <p className="article-list-date">{article.date}</p>
                    </div>
                </Link>
            ))}
            <button
                className="go-to-back-btn"
                onClick={function(e) {
                    e.preventDefault();
                    _onBackToMainButtonClick();
                    history.goBack();
                }}>← 메인으로 돌아가기</button>
        </Fragment>
    )
}

export default ArticleList
