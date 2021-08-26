import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ARTICLES from '../../../api/ARTICLES';
import ARTICLEBANNER from '../../../api/DefaultImg/Ktest-funny.png';
import ReactGA from 'react-ga';
import './Article.css'

function ArticleList() {

    const [Category, setCategory] = useState('유머')

    var category_object = {"유머":"유머", "레드":"레드"};

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
        _eventSenderGA("Paging", "Click Back-to-main Button", "article list page");
    }

    const _onCategoryChangeButtonClick = () => {
        _eventSenderGA("Paging", "Click Category change Button", "article list page");
    }

    const categoryButtonRenderer = (obj) => {
        var category_btn = [];
        var value_list = Object.keys(obj).map(function(key){return obj[key]});
        value_list.map((value) => (
            category_btn.push(<Fragment>
                <div
                    className="category-btn-div"
                    onClick={function(){
                        setCategory(value)
                        _onCategoryChangeButtonClick()
                    }}
                    >
                    {value}
                </div>
            </Fragment>)
        ))
        return category_btn
    }

    const articleRenderer = (li, val) => {
        var article_list = [];
        for (var article of li) {
            if (article.category === val) {
                article_list.push(
                <Link to={"/kfunny/" + article.mainUrl + '/'} className="article-list-link" onClick={_onArticleButtonClick} key={article.mainUrl}>
                    <div className="article-list-div">
                        {article.mainTitle}
                        <p className="article-list-date">{article.date}</p>
                    </div>
                </Link>)
            }
        }
        return article_list
    }

    return (
        <Fragment>
            <img className="test-main-img" src={ARTICLEBANNER} alt="KTEST-Funny" />
            {categoryButtonRenderer(category_object)}
            
            {articleRenderer(ARTICLES, Category)}
            {/* {ARTICLES.map((article) => (
                <Link to={"/kfunny/" + article.mainUrl + '/'} className="article-list-link" onClick={_onArticleButtonClick} key={article.mainUrl}>
                    <div className="article-list-div">
                        {article.mainTitle}
                        <p className="article-list-date">{article.date}</p>
                    </div>
                </Link>
            ))} */}
            <Link to='/' className="article-list-go-back-link" onClick={_onBackToMainButtonClick}>
            <div
                className="go-to-back-btn"
                >← 메인으로 돌아가기</div></Link>
        </Fragment>
    )
}

export default ArticleList
