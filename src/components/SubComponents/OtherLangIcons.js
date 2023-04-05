import React from 'react'
import { Fragment } from 'react'

export default function OtherLangIcons(props) {
    function factBTILinkRenderer(){
        if(props.currentTest === "personalColorFact") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorFactEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFact/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorFactInd") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFact/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function dringkingHabitLinkRenderer(){
        if(props.currentTest === "dringkingHabit") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "dringkingHabitEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "dringkingHabitJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    };
    
    function personalColorLinkRenderer(){
        if(props.currentTest === "personalColor") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorES") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorArb") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorInd") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorRus") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorMalay") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorGer") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/france-icon.png' className='language-icon' alt="[ Aller à la version française. ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColorFra") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorArb/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/arab-icon.png' className='language-icon' alt="[ اذهب إلى النسخة العربية ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorMalay/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png' className='language-icon' alt="[ Pergi ke versi Bahasa Inggeris ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                </div>
            )
        }
    };

    function personalColor2022LinkRenderer(){
        if(props.currentTest === "personalColor2022") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022Eng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022CN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColor2022Eng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022CN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalColor2022CN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor2022Eng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } 
    };

    function flowerBTILinkRenderer(){
        if(props.currentTest === "flowerBTI") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "flowerBTIEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "flowerBTIJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/flowerBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } 
    };

    function personalIncenseLinkRenderer(){
        if(props.currentTest === "personalIncense") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalIncenseJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncense/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "personalIncenseEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncense/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } 
    };

    function hanbokBTILinkgRenderer(){
        if(props.currentTest === "hanbokBTI") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "hanbokBTIJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "hanbokBTIEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/hanbokBTIJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } 
    };

    function oneSidedLoveLinkRenderer(){
        if(props.currentTest === "oneSidedLove") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "oneSidedLoveJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLove/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "oneSidedLoveRus") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLove/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "oneSidedLoveCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLove/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "oneSidedLoveEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLove/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveRus/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/russia-icon.png' className='language-icon' alt="[ Перейти на российскую версию ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/oneSidedLoveCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function idealTypeLinkRenderer(){
        if(props.currentTest === "idealType") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/idealTypeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "idealTypeEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/idealType/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function fruitAltLinkRenderer(){
        if(props.currentTest === "fruitAlt") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/fruitAltEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "fruitAltEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/fruitAlt/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function lovejewerlyLinkRenderer(){
        if(props.currentTest === "lovejewerly") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/lovejewerlyEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "lovejewerlyEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/lovejewerly/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        } 
    };

    function auditionBTILinkRenderer(){
        if(props.currentTest === "auditionBTI") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTICn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIJp/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "auditionBTIEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTICn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIJp/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "auditionBTICn") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIJp/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "auditionBTIJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTI/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTIEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/auditionBTICn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } 
    };

    function snowflakeLinkRenderer(){
        if(props.currentTest === "snowflake") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/snowflakeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "snowflakeEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/snowflake/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function smileColorTestLinkRenderer(){
        if(props.currentTest === "smileColorTest") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestCn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "smileColorTestEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTest/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestCn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "smileColorTestJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTest/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestCn/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "smileColorTestCn") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTest/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "smileColorTestES") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTest/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/smileColorTestCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function fishShapedBunTestLinkRenderer(){
        if(props.currentTest === "fishShapedBun") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/fishShapedBunEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "fishShapedBunEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/fishShapedBun/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function musicNoteEngTestLinkRenderer(){
        if(props.currentTest === "musicNote") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/musicNoteEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "musicNoteEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/musicNote/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function waterLoveTestLinkRenderer(){
        if(props.currentTest === "waterLove") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/waterLoveEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "waterLoveEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/waterLove/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function loveCharacterTestLinkRenderer(){
        if(["loveCharacter", "loveCharacterFemale", "loveCharacterMale"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(["loveCharacterEng", "loveCharacterFemaleEng", "loveCharacterMaleEng"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(["loveCharacterCN", "loveCharacterFemaleCN", "loveCharacterMaleCN"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(["loveCharacterGer", "loveCharacterFemaleGer", "loveCharacterMaleGer"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(["loveCharacterES", "loveCharacterFemaleES", "loveCharacterMaleES"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(["loveCharacterJP", "loveCharacterFemaleJP", "loveCharacterMaleJP"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterGer/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/ger-icon.png' className='language-icon' alt="[ Gehen Sie zur deutschen Version. ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveCharacterES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        }
    };

    function meGuideTestLinkRenderer(){
        if(props.currentTest === "meGuide") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuideEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuideJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "meGuideEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuide/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuideJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "meGuideJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuide/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/meGuideEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    };

    function loveWarningTestLinkRenderer(){
        if(props.currentTest === "loveWarning") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveWarningEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarning/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveWarningJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarning/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveWarningCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarning/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningES/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/spain-icon.png' className='language-icon' alt="[ paso a la versión española ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveWarningES") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarning/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveWarningCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function characteristicChracterTestLinkRenderer(){
        if(props.currentTest === "characteristicChracter") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "characteristicChracterEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "characteristicChracterJP") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "characteristicChracterCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/characteristicChracterJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        }
    };

    function mailForMeTestLinkRenderer(){
        if(props.currentTest === "mailForMe") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMeCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "mailForMeEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMe/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMeCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "mailForMeCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMe/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/mailForMeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    };

    function readyToBoneTestLinkRenderer(){
        if(props.currentTest === "readyToBone") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBoneCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBoneEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "readyToBoneCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBone/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBoneEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "readyToBoneEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBone/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/readyToBoneCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function loveFlameTestLinkRenderer(){
        if(props.currentTest === "loveFlame") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlameCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlameEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveFlameCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlame/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlameEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveFlameEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlame/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveFlameCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function bondeeTestLinkRenderer(){
        if(props.currentTest === "bondee") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "bondeeEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondee/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "bondeeCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondee/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    };

    function speechHabitTestLinkRenderer(){
        if(props.currentTest === "speechHabit") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/speechHabitCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "speechHabitEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/speechHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/speechHabitCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "speechHabitCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/speechHabit/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/bondeeEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        }
    };

    function coupleCharacterTestLinkRenderer(){
        if(["coupleCharacter", "coupleCharacterFemale", "coupleCharacterMale"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(["coupleCharacterEng", "coupleCharacterFemaleEng", "coupleCharacterMaleEng"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacterCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(["coupleCharacterCN", "coupleCharacterFemaleCN", "coupleCharacterMaleCN"].includes(props.currentTest)) {
            return(
                <div className="go-to-each-language" style={{marginTop:'1rem'}}>
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacter/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/coupleCharacterEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } 
    };

    function loveSpringFlowerTestLinkRenderer(){
        if(props.currentTest === "loveSpringFlower") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlowerEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlowerCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveSpringFlowerCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlower/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlowerEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveSpringFlowerEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlower/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpringFlowerCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function cantWaitTestLinkRenderer(){
        if(props.currentTest === "cantWait") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWaitCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWaitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "cantWaitCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWait/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWaitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "cantWaitEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWait/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/cantWaitCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function loveSpicyTestLinkRenderer(){
        if(props.currentTest === "loveSpicy") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicyCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicyEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveSpicyCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicy/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicyEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveSpicyEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicy/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveSpicyCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    function loveInMyHeadTestLinkRenderer(){
        if(props.currentTest === "loveInMyHead") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveInMyHeadEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveInMyHeadEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveInMyHead/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                </div>
            )
        }
    };

    function loveMagazineTestLinkRenderer(){
        if(props.currentTest === "loveMagazine") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazineyCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazineEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveMagazineCN") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazine/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazineEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to the English version ]" /></a>
                </div>
            )
        } else if(props.currentTest === "loveMagazineEng") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazine/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/kor-icon.png' className='language-icon' alt="[ 한국어 버전으로 하러가기 ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/loveMagazineCN/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/china-icon.png' className='language-icon' alt="[ 汉语版本试 ]" /></a>
                </div>
            )
        }
    };

    return (
        <Fragment>
            {factBTILinkRenderer()}
            {dringkingHabitLinkRenderer()}
            {personalColorLinkRenderer()}
            {personalColor2022LinkRenderer()}
            {personalIncenseLinkRenderer()}
            {hanbokBTILinkgRenderer()}
            {oneSidedLoveLinkRenderer()}
            {idealTypeLinkRenderer()}
            {fruitAltLinkRenderer()}
            {lovejewerlyLinkRenderer()}
            {auditionBTILinkRenderer()}
            {flowerBTILinkRenderer()}
            {snowflakeLinkRenderer()}
            {smileColorTestLinkRenderer()}
            {fishShapedBunTestLinkRenderer()}
            {musicNoteEngTestLinkRenderer()}
            {waterLoveTestLinkRenderer()}
            {loveCharacterTestLinkRenderer()}
            {meGuideTestLinkRenderer()}
            {loveWarningTestLinkRenderer()}
            {characteristicChracterTestLinkRenderer()}
            {mailForMeTestLinkRenderer()}
            {readyToBoneTestLinkRenderer()}
            {loveFlameTestLinkRenderer()}
            {bondeeTestLinkRenderer()}
            {speechHabitTestLinkRenderer()}
            {coupleCharacterTestLinkRenderer()}
            {loveSpringFlowerTestLinkRenderer()}
            {cantWaitTestLinkRenderer()}
            {loveSpicyTestLinkRenderer()}
            {loveInMyHeadTestLinkRenderer()}
            {loveMagazineTestLinkRenderer()}
        </Fragment>
    );
};
