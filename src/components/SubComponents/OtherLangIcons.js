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
    }
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
    }
    
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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
        </Fragment>
    )
}
