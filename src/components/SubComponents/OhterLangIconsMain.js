import React from 'react';
import { Link } from 'react-router-dom';

export default function OhterLangIconsMain() {
    return(
        <div className="go-to-each-language-main">
            <h3>▼GO TO MY COUNTRY▼</h3>
            <Link
                to={"/Kor/"}
                key={"Kor"}
                className="to-other-lang-test-banner-text"
            ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어로 하러 가기 ]" /></Link>
            <Link
                to={"/Eng/"}
                key={"Eng"}
                className="to-other-lang-test-banner-text"
            ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></Link>
            <Link
                to={"/CN/"}
                key={"CN"}
                className="to-other-lang-test-banner-text"
            ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></Link>
            <Link
                to={"/JP/"}
                key={"JP"}
                className="to-other-lang-test-banner-text"
            ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></Link>
            <Link
                to={"/Others/"}
                key={"Others"}
                className="to-other-lang-test-banner-text"
            ><img src='https://images.ktestone.com/default/languageIcon/etc-icon.png' className='language-icon' alt="[ Go to the Others version ]" /></Link>
            
        </div>
    )
}
