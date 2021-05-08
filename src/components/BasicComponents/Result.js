import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../../api/TESTS'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from '../../App'
import { Card } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import HorizontalScrolling from '../SubComponents/horizontalScrolling'
import COPYBTN from '../../api/DefaultImg/result-copy-link-btn.png';
import AGAINBTN from '../../api/DefaultImg/result-to-again-btn.png';
import TOHOMEBTN from '../../api/DefaultImg/result-to-home-btn.png';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import ScriptTag from 'react-script-tag'

class Result extends Component {
    constructor(props){
        super(props)

        // for applying meta tag url with slash -> prevent doulbe slash at the last chars in the sharable url
        let _sharable_url = window.location.href
        if(window.location.href.slice(-1) === '/'){
            _sharable_url = window.location.href.slice(0, -1)
        } else {
            _sharable_url = window.location.href
        }

        const _current_url = _sharable_url.split('/').filter(function(t) {return t !== ""})
        const _current_test = _current_url.reverse()[2]
        const _current_result = _current_url[0]

        this.state = {
            mode:"result",
            sharable_url:_sharable_url,
            current_url:_current_url,
            current_test:_current_test,
            current_result:_current_result,
            num_shares_count:0,
        }
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this)
        this._eventSenderGA = this._eventSenderGA.bind(this);
        this._onShareButtonClick = this._onShareButtonClick.bind(this);
        this.horizontalNewTestRenderer = this.horizontalNewTestRenderer.bind(this)
    }
    
    _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
          });
    }
    _onBackToStartButtonClick(){
        this._eventSenderGA("Paging", "Click Re-test Button", "result page");
        this.setState({
            mode:"intro"
        })
    }
    _onShareButtonClick(){
        this.setState({
            num_shares_count:this.state.num_shares_count+1
        })
        this._eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
        alert("링크가 복사됐어요!");
    }
    cpcBannerResultFooterScriptor(){
        // Delete Adfit for PPL contents
        let ppl_list = ['personalIncense', 'personalTaro']
        if((this.state.sharable_url.includes("localhost") || this.state.sharable_url.includes("ktestone.com")) && !ppl_list.includes(this.state.current_test)) {
          return(
            <Fragment>
              <ins className="kakao_ad_area" style={{display:"none"}}
                data-ad-unit    = "DAN-9iBiNdMXgMni4I3u"
                data-ad-width   = "320"
                data-ad-height  = "100"></ins>
              <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
            </Fragment>
          )
        } else if(this.state.sharable_url.includes("https://kapable.github.io/")) {
          return(
            <Fragment>
              <ins className="kakao_ad_area" style={{display:"none"}}
                data-ad-unit    = "DAN-oXGz3zjd52vzl7Qh"
                data-ad-width   = "320"
                data-ad-height  = "100"></ins>
              <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
            </Fragment>
          )
        } else if(this.state.sharable_url.includes("niair.xyz")) {
            return(
              <Fragment>
                {/* 결과 푸터 */}
                <ins className="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-2382342018701919"
                    data-ad-slot="3364974256"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
              </Fragment>
            )
          }
    }
    horizontalNewTestRenderer(){
        // Delete NewTestMenu for PPL contents
        let ppl_list = ['personalTaro']
        if(!ppl_list.includes(this.state.current_test)) {
            return(
                <HorizontalScrolling/>
            )   
        }
    }

    newTestLinkRenderer(){
        let personalColorListGB = ["personalColorEng", "personalColorCN", "personalColorES", "personalColorArb"]
        if(this.state.current_test === "personalColor") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/persoanlColorFactNew-thumb.png"
            let new_test_link = "https://ktestone.com/kapable.github.io/personalColorFact/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorJP") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactEngNew-thumb.png"
            let new_test_link = "https://ktestone.com/kapable.github.io/personalColorFactEng/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorInd") {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactIndNew-thumb.png"
            let new_test_link = "https://ktestone.com/kapable.github.io/personalColorFactInd/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        } else if(personalColorListGB.includes(this.state.current_test)) {
            let banner_img_src = "https://images.ktestone.com/main-thumbnail/personalColorFactEngNew-thumb.png"
            let new_test_link = "https://ktestone.com/kapable.github.io/personalColorFactEng/"
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={new_test_link}
                        className="to-personalColorOut-test-banner-text"
                    ><img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        }
    }
    factBTILinkRenderer(){
        if(this.state.current_test === "personalColorFact") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactInd/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/india-icon.png' className='language-icon' alt="[ हिंदी में भी देखें ]" /></a>
                </div>
            )
        } else if(this.state.current_test === "personalColorFactEng") {
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
        } else if(this.state.current_test === "personalColorFactInd") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorFactEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
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
    dringkingHabitLinkRenderer(){
        if(this.state.current_test === "dringkingHabit") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/dringkingHabitJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(this.state.current_test === "dringkingHabitEng") {
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
        } else if(this.state.current_test === "dringkingHabitJP") {
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
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        }
    }
    personalColorLinkRenderer(){
        if(this.state.current_test === "personalColor") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorJP") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorEng") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorCN") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorES") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorArb") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorInd") {
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
                </div>
            )
        } else if(this.state.current_test === "personalColorRus") {
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
                </div>
            )
        }
    }
    personalIncenseLinkRenderer(){
        if(this.state.current_test === "personalIncense") {
            return(
                <div className="go-to-each-language">
                    <h3>▼GO TO MY COUNTRY▼</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseEng/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncenseJP/"
                        className="to-personalColorOut-test-banner-text"
                    ><img src='https://images.ktestone.com/default/languageIcon/japan-icon.png' className='language-icon' alt="[ 日本語バージョンをやりに行く。 ]" /></a>
                </div>
            )
        } else if(this.state.current_test === "personalIncenseJP") {
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
                    ><img src='https://images.ktestone.com/default/languageIcon/usa-icon.png' className='language-icon' alt="[ Go to English version ]" /></a>
                </div>
            )
        } else if(this.state.current_test === "personalIncenseEng") {
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
    pplBannerRenderer(){
        let personalIncenseListGB = ["personalIncenseEng", "personalIncenseJP"];
        let personalTaroList = ["personalTaro"];
        // duft & doft Eng & JP
        if(personalIncenseListGB.includes(this.state.current_test)){
            const duft_outlink = "https://www.amazon.com/DUFT-DOFT-Refreshing-hydration-Feel-good/dp/B07MB55WVK"
            let oneOrZero = (Math.random()>=0.5)? 1 : 0;
            const banner_img_src = 'https://images.ktestone.com/resultImages/personalIncense/duftdoft_amz_banner' + oneOrZero + '.jpeg'
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={duft_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /> </a>
                </Fragment>
            )
        // duft & doft Kor
        } else if (this.state.current_test === "personalIncense") {
            const duft_outlink = "https://bit.ly/39OsQOu"
            const banner_img_src = 'https://images.ktestone.com/resultImages/personalIncense/duftdoft_korea_banner_2.jpeg'
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={duft_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /> </a>
                </Fragment>
            )
        // Class 101
        } else if (personalTaroList.includes(this.state.current_test)){
            let banner_img_src_2 = 'https://images.ktestone.com/resultImages/personalTaro/personnalTaro_ppl_banner_3.png'
            let taro_outlink_2 = "https://class101.net/preferences/onboarding/intro?utm_source=simritest&utm_medium=paid&utm_campaign=%ED%81%B4%EC%9B%90_%EB%B8%8C%EB%9E%9C%EB%93%9C%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4_%EB%B0%94%EC%9D%B4%EB%9F%B4-%EB%B0%94%EC%88%98%EA%B0%80-ktest&utm_content=%EB%B8%8C%EB%A1%9C%EB%93%9C_MBTI_%28%EC%B0%B8%EC%97%AC%29%ED%83%80%EB%A1%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-MBTI&utm_term=%EB%B0%94%EC%9D%B4%EB%9F%B4%EC%BD%98%ED%85%90%EC%B8%A0_%ED%81%B4%EB%A7%88%EC%B9%B4%EC%84%B8_%EB%A9%94%EC%9D%B4_210427"
            const taro_list = ["00TheFool","01TMagician","02THP","03TEmpress","04TEmperor","05THH","06TLovers","07TChariot","08Strength","09THermit","10Wof","11Justice","14Temperance","17Tstar","19Tsun","20Judgement"]
            for (let taro of taro_list) {
                if(this.state.current_result === taro) {
                    let banner_img_src = 'https://images.ktestone.com/resultImages/personalTaro/' + taro + '_U.png'
                    let taro_outlink = "https://bit.ly/" + taro
                    return(
                        <Fragment>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={taro_outlink}
                            className="to-ppl-banner-text"
                            > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /> </a>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={taro_outlink_2}
                            className="to-ppl-banner-text"
                            > <img src={banner_img_src_2} className='ppl-banner-img' alt={this.state.current_result} /> </a>
                        </Fragment>
                    )
                }
            }
        }
    }

    introPageRender(){

        const current_tests_path = '/' + this.state.current_test + '/';
        return(
            <Router basename='/kapable.github.io/'>
                <Switch>
                    <Route path={current_tests_path} component={()=><Intro test={this.state.current_test}/>} exact/>
                    <Redirect to={current_tests_path} />
                </Switch>
            </Router>
        )
    }

    resultRender(){
        // searching the result content by current url path

        let final_type = ''
        let final_desc = ''
        let img_src = ''
        let test_current = ''
        let desc_test_current = ''
        let i = 0;
        let _current_test_contents ;
        while(i<TESTS.length){
            if(TESTS[i].info.mainUrl === this.state.current_test){
                _current_test_contents = TESTS[i] // for storytelling
                let j = 0;
                while(j<TESTS[i].results.length){
                    if(TESTS[i].results[j].query === this.state.current_result){
                        final_type = TESTS[i].results[j].type
                        final_desc = TESTS[i].results[j].desc
                        img_src = TESTS[i].results[j].img_src
                        test_current = TESTS[i].info.mainTitle
                        desc_test_current = TESTS[i].info.subTitle
                        break
                    }
                    j = j + 1;
                }
                // break
            }
            i = i + 1;
        }
        

        // return final result option
        // in case of storyTelling Type Quiz
        if(_current_test_contents.info.scoreType === "storyTelling" || _current_test_contents.info.scoreType === "typeCountingMBTI" || _current_test_contents.info.scoreType === "dualMBTI"){
            // meta tag for PPL test contents
            let ppl_list = ['personalTaro']
            if(ppl_list.includes(this.state.current_test)) {
                let og_img_url = "https://images.ktestone.com/meta/" + this.state.current_test + "/" + this.state.current_result + ".png"
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={final_desc + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={final_desc + ':' + desc_test_current}/>
                            <meta property="og:image" content={og_img_url}/>
                            <meta property="og:image:width" content="800"/>
                            <meta property="og:image:height" content="400"/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={final_desc + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={og_img_url}/>
                            <meta property="og:image:width" content="800"/>
                            <meta property="og:image:height" content="400"/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>
                )
            // meta tag for native test contents
            } else if(this.state.current_test === "driveTest") {
                return(
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <Card className="result-card" bg="light">
                            <Card.Body className="result-p">
                                <Card.Text>{final_desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current}-케이테스트</title>
                            <meta name="title" content={test_current+'-케이테스트'}/>
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current+'-케이테스트'}/>
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>
                )
            }
            
        //  and other case of Type Quizes
        } else {
            // if there are not description text === only result img
            if(final_desc === ``){
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>

                )
            } else {
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                        <Card className="result-card" bg="light">
                            <Card.Body className="result-p">
                                <Card.Text>{final_desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Fragment>
                )
            }
        }

    }

    mainPageRender(){
        return(
            <Router >
                <Switch>
                    <Route path='/' component={App} exact/>
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }

    goBack(){
        this.props.history.goBack();
    }

    resultPageRender(){
        return(
            <Fragment>
                
                <div className="result">
                    <div className="result-header">
                        <h5 className="result-title">결과는...</h5>
                        <div className="result-value">
                            {this.resultRender()}
                        </div>
                        {/* PPL banner image */}
                        {this.pplBannerRenderer()}
                    </div>

                    {/* if personalColor test's Result page for Link Banner */}
                    {this.personalColorLinkRenderer()}

                    {/* if personalIncense test's Result page for Link Banner */}
                    {this.personalIncenseLinkRenderer()}

                    {/* if dringkingHabit test's Result page for Link Banner */}
                    {this.dringkingHabitLinkRenderer()}

                    {/* if personalColorFact test's Result page for Link Banner */}
                    {this.factBTILinkRenderer()}

                    <div className="share">
                        <h5 className="share-title">친구에게 공유하기</h5>
                        <div className="share">
                            <CopyToClipboard text={this.state.sharable_url+'/'}>
                                <img
                                    src={COPYBTN}
                                    onClick={this._onShareButtonClick}
                                    className="share-btn-img"
                                    alt="링크 복사"
                                    />
                            </CopyToClipboard>
                        </div>
                        <div className="re-test-btn">
                            <img
                                src={AGAINBTN}
                                className="re-test-btn-img"
                                onClick={this._onBackToStartButtonClick}
                                alt="테스트 다시하기"/>
                        </div>
                    </div>
                    <div className="back-to-main">
                        <img
                            src={TOHOMEBTN}
                            onClick={function(e) {
                                e.preventDefault();
                                this._eventSenderGA("Paging", "Click Back-to-main Button", "result page");
                                this.setState({
                                    mode:"main"
                                })
                            }.bind(this)}
                            className="back-to-main-btn-img"
                            alt="다른 테스트 하러가기"
                            />
                    </div>
                </div>
                {/* New Test banners */}
                {this.horizontalNewTestRenderer()}

                {/* CPC Banner Result footer */}
                {this.cpcBannerResultFooterScriptor()}
            </Fragment>
        );
    }
    
    pageRenderer(){
        let _page = []
        if(this.state.mode === "result") {
            _page = this.resultPageRender()
        } else if (this.state.mode === "intro") {
            _page =  this.introPageRender()
        } else if (this.state.mode === "main") {
            _page = this.mainPageRender()
        }
        return _page
    }


    render(){
        return(
            <div>
                {this.pageRenderer()}
            </div>
        );
    }
}

export default Result;
