import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function CategoryIconsMain({ lang }) {
    const categoryList = ['', 'characteristic', 'love', 'saju', 'etc'];
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
                ><img src={`https://images.ktestone.com/default/categoryIcon/category-btn-${cat}.png`} className='category-icon' alt={`${cat}-category`} /></Link>
            ))}
        </div>
    );
};

export default withRouter(CategoryIconsMain);