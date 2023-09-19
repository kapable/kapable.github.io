import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function CategoryIconsMain({ lang }) {
    const categoryListKor = ['', 'characteristic', 'love', 'saju', 'ai', 'etc'];
    const categoryList = ['', 'characteristic', 'love', 'ai', 'etc'];
    if(lang === 'Kor' || !lang) {
        return(
            <div className="go-to-each-category-main">
                {categoryListKor.map((cat) => (
                    <Link
                        to={{
                            pathname: lang ? `../../${lang}/${cat}` : `../../Kor/${cat}`,
                            state: { currentCategory: cat }
                        }}
                        key={`category-${cat}`}
                        className="to-other-lang-test-banner-text"
                    ><img loading="lazy"
                        src={`https://images.ktestone.com/default/categoryIcon/category-btn-${cat}.png`}
                        className='category-icon' alt={`${cat}-category`} /></Link>
                ))}
            </div>
        );
    } else {
        return(
            <div className="go-to-each-category-main">
                {categoryList.map((cat) => (
                    <Link
                        to={{
                            pathname: lang ? `../../${lang}/${cat}` : `../../Kor/${cat}`,
                            state: { currentCategory: cat }
                        }}
                        key={`category-${cat}`}
                        className="to-other-lang-test-banner-text"
                    ><img loading="lazy"
                        src={(lang === 'Eng' || lang === 'JP' || lang === 'CN')
                        ? `https://images.ktestone.com/default/categoryIcon/category-btn-${cat}${lang}.png`
                        : `https://images.ktestone.com/default/categoryIcon/category-btn-${cat}Eng.png`}
                        className='category-icon' alt={`${cat}-category`} /></Link>
                ))}
            </div>
        );
    }
    
};

export default withRouter(CategoryIconsMain);