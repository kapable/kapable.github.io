import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../../api/TESTS'
import OtherLangIcons from '../SubComponents/OtherLangIcons';
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
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';
import KAKAOPLUSFRIEND from '../../api/DefaultImg/go-to-kakao-plusfriend.png';
import PCTMBTIBAR from '../SubComponents/PctMBTIBar';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Result extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props)

        // for applying meta tag url with slash -> prevent doulbe slash at the last chars in the sharable url
        let _sharable_url = window.location.href;
        if(window.location.href.slice(-1) === '/'){
            _sharable_url = window.location.href.slice(0, -1);
        } else {
            _sharable_url = window.location.href;
        };

        const _current_url = _sharable_url.split(/[?/]/).filter(function(t) {return t !== ""});
        const _current_test = _current_url[3];
        const _current_result = _current_url[5];
        const { cookies } = this.props;

        this.state = {
            mode:"result",
            sharable_url:_sharable_url,
            current_url:_current_url,
            current_test:_current_test,
            current_result:_current_result,
            current_test_contents: null,
            num_shares_count:0,
            ppl_list:['auditionBTI', 'auditionBTIEng', 'auditionBTIJp', 'auditionBTICn', 'personalIncense', 'personalTaro', 'jaetech', 'wealthluck'],
            coupangCookies: cookies.get('coupang') || null,
            amazonCookies: cookies.get('amazon') || null,
            rakutenCookies: cookies.get('rakuten') || null,
            isOpened: false,
            coupangLink: "https://link.coupang.com/a/lOSLd",
            amazonLink: "https://www.amazon.com/?&_encoding=UTF8&tag=ktestone-20&linkCode=ur2&linkId=adc3bdba997e0a439e4fa8467501bc3a&camp=1789&creative=9325",
        };
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this);
        this._eventSenderGA = this._eventSenderGA.bind(this);
        this._onShareButtonClick = this._onShareButtonClick.bind(this);
        this._onPPLBannerClick = this._onPPLBannerClick.bind(this);
        this.horizontalNewTestRenderer = this.horizontalNewTestRenderer.bind(this);
        this.adTagRenderer = this.adTagRenderer.bind(this);
        this.otherTestBannerRenderer = this.otherTestBannerRenderer.bind(this);
        this.onCoupangButtonClick = this.onCoupangButtonClick.bind(this);
        this.onAmazonButtonClick = this.onAmazonButtonClick.bind(this);
    };
    
    onAmazonButtonClick(){
        const { cookies } = this.props;
        const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        cookies.set('amazon', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        this.setState({
            amazonCookies: cookies.get('amazon'),
            isOpened: true,
        });
        this._eventSenderGA("Paging", "Click go-to-Amazon Button", "result page");
    };

    onCoupangButtonClick(){
        const { cookies } = this.props;
        const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        cookies.set('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        this.setState({
            coupangCookies: cookies.get('coupang'),
            isOpened: true,
        });
        this._eventSenderGA("Paging", "Click go-to-Coupang Button", "result page");
    };
    
    _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    _onBackToStartButtonClick(){
        this._eventSenderGA("Paging", "Click Re-test Button", "result page");
        this.setState({
            mode:"intro"
        })
    };

    _onShareButtonClick(){
        this.setState({
            num_shares_count:this.state.num_shares_count+1
        })
        this._eventSenderGA("Sharing", "Click Copy-link Button", "result page");
        alert("링크가 복사됐어요!");
    };

    _onPPLBannerClick(){
        this._eventSenderGA("Outlinking", "Click PPL-Banner Button", "result page");
    };

    cpcBannerResultFooterScriptor(){
        // Delete Adfit for PPL contents
        if((this.state.sharable_url.includes("localhost") || this.state.sharable_url.includes("ktestone.com")) && !this.state.ppl_list.includes(this.state.current_test)) {
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
    };

    horizontalNewTestRenderer(){
        // Delete NewTestMenu for PPL contents
        let ppl_list = ['personalTaro']
        if(!ppl_list.includes(this.state.current_test)) {
            return(
                <HorizontalScrolling test={this.state.current_test}/>
            )   
        }
    };

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
    };
    
    pplBannerRenderer(){
        let personalIncenseListGB = ["personalIncenseEng", "personalIncenseJP"];
        let personalTaroList = ["personalTaro"];
        let auditionBtiList = ['auditionBTI', 'auditionBTIEng', 'auditionBTIJp', 'auditionBTICn'];
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
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                            > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={taro_outlink_2}
                            className="to-ppl-banner-text"
                            > <img src={banner_img_src_2} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                        </Fragment>
                    )
                }
            }
        
        // hanbokBTI
        } else if (this.state.current_test === "hanbokBTI") {
            const hanbokBTI_outlink = "https://bit.ly/3nADdv4"
            const banner_img_src = 'https://images.ktestone.com/resultImages/hanbokBTI/hanbokBTI-bottom-banner.png'
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={hanbokBTI_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                </Fragment>
            )
        } else if (this.state.current_test === "hanbokBTIEng") {
            const hanbokBTI_outlink = "https://bit.ly/3nADdv4"
            const banner_img_src = 'https://images.ktestone.com/resultImages/hanbokBTIEng/hanbokBTIEng-bottom-banner.png'
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={hanbokBTI_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                </Fragment>
            )
        } else if (this.state.current_test === "hanbokBTIJP") {
            const hanbokBTI_outlink = "https://bit.ly/3nADdv4"
            const banner_img_src = 'https://images.ktestone.com/resultImages/hanbokBTIJP/hanbokBTIJP-bottom-banner.png'
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={hanbokBTI_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                </Fragment>
            )
        } else if (auditionBtiList.includes(this.state.current_test)) {
            const _current_test_contents = TESTS.filter((test) => test.info.mainUrl === this.state.current_test)[0];
            let _current_test_result = _current_test_contents.results.filter((res) => res.query === this.state.current_result)[0];
            const audition_outlink = _current_test_result.youtube_url
            const banner_img_src = `https://images.ktestone.com/resultImages/${this.state.current_test}/banner/${this.state.current_result}.png`
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={audition_outlink}
                    className="to-ppl-banner-text"
                    > <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                </Fragment>
            )
        }
    };

    otherTestBannerRenderer() {
        let personalColor2022ListKor = ["personalColor2022",];
        let personalColor2022List = ["personalColor2022Eng", "personalColor2022CN"];
        let percentageMBTI2022ListKor = ["percentageMBTI2022",];
        let percentageMBTI2022ListOverseas = ["percentageMBTI2022Eng","percentageMBTI2022Cn"];
        if(personalColor2022ListKor.includes(this.state.current_test)){
            const jelling_outlink = "https://bit.ly/3FlwKMJ";
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/percentageMBTI2022/'
                    className="to-ppl-banner-text"
                    > <img src={`https://images.ktestone.com/main-thumbnail/percentageMBTI2022-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='http://pf.kakao.com/_IxnRfb'
                    className="to-ppl-banner-text"
                    > <img src={KAKAOPLUSFRIEND} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={jelling_outlink}
                    className="to-ppl-banner-text"
                    > <img src={JELLINGBANNERKOR} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                </Fragment>
            )
        } else if (personalColor2022List.includes(this.state.current_test)) {
            const jelling_outlink = "https://bit.ly/30QKtw1";
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={jelling_outlink}
                    className="to-ppl-banner-text"
                    > <img src={JELLINGBANNERENG} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                </Fragment>
            )
        } else if (percentageMBTI2022ListKor.includes(this.state.current_test)) {
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/personalColor2022/'
                    className="to-ppl-banner-text"
                    > <img src={`https://images.ktestone.com/main-thumbnail/personalColor2022-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/personalColor/'
                    className="to-ppl-banner-text"
                    > <img src={`https://images.ktestone.com/main-thumbnail/personalColor-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                </Fragment>
            )
        } else if (percentageMBTI2022ListOverseas.includes(this.state.current_test)) {
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/personalColor2022Eng/'
                    className="to-ppl-banner-text"
                    > <img src={`https://images.ktestone.com/main-thumbnail/personalColor2022Eng-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/personalColorEng/'
                    className="to-ppl-banner-text"
                    > <img src={`https://images.ktestone.com/main-thumbnail/personalColorEng-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} style={{"marginTop": "2.5rem"}}/> </a>
                </Fragment>
            )
        }
    };

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
    };

    adTagRenderer(){
        if (!this.state.ppl_list.includes(this.state.current_test)) {
            return(
                <Fragment>
                    <div id="protag-in_article_video"></div>
                        <ScriptTag type="text/javascript">
                            {`window.googletag = window.googletag || { cmd: [] };
                            window.protag = window.protag || { cmd: [] };
                            window.protag.cmd.push(function () {
                                window.protag.display("protag-in_article_video");
                            });`}
                        </ScriptTag>
                </Fragment>
            )
        }
    };

    affiliateRenderer(){
        if(window.location.href.includes("Eng")) {
            return (
                <Fragment>
                    <a href={this.state.amazonLink} target="_blank" rel='noreferrer noopener'>
                        <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem'}} onClick={this.onAmazonButtonClick}>
                            View results after viewing Amazon
                        </button>
                    </a>
                </Fragment>
            )
        } else if (window.location.href.includes("JP") || window.location.href.includes("Jp")) {
            return (
                <Fragment>
                    <a href={this.state.amazonLink} target="_blank" rel='noreferrer noopener'>
                        <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem'}} onClick={this.onAmazonButtonClick}>
                            アマゾン見た後の結果を見る
                        </button>
                    </a>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <a href={this.state.coupangLink} target="_blank" rel='noreferrer noopener'>
                        <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem'}} onClick={this.onCoupangButtonClick}>
                            쿠팡 보고 결과 보기
                        </button>
                    </a>
                    <p className='result-coupang-comment'>* 이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.</p>
                </Fragment>
            )
        }
    };

    resultRender(){
        // searching the result content by current url path

        const _current_test_contents = TESTS.filter((test) => test.info.mainUrl === this.state.current_test)[0];
        let _current_test_result = _current_test_contents.results.filter((res) => res.query === this.state.current_result)[0];
        let final_type = _current_test_result.type
        let final_desc = _current_test_result.desc
        let img_src = _current_test_result.img_src
        let test_current = _current_test_contents.info.mainTitle
        let desc_test_current = _current_test_contents.info.subTitle

        // return final result option
        if(_current_test_contents.info.scoreType === "storyTelling" || _current_test_contents.info.scoreType === "typeCountingMBTI" || _current_test_contents.info.scoreType === "dualMBTI"){
            // meta tag for PPL test contents
            let ppl_list = ['auditionBTI', 'auditionBTIEng', 'auditionBTIJp', 'auditionBTICn', 'hanbokBTI', 'hanbokBTIEng', 'hanbokBTIJP'];
            let jelling_list = ['fruitAlt', 'fruitAltEng', 'idealType', 'idealTypeEng'];
            // let coupang_list = ['personalColor2022', 'personalColor'];
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
            } else if(this.state.current_test === "union") {
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
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="http://unicontest.co.kr/g5/"
                        ><img src={img_src} className='result-img' alt={final_type} /></a>
                    </Fragment>
                )
            } else if(jelling_list.includes(this.state.current_test)) {
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
                        {this.state.isOpened || this.state.coupangCookies || this.state.amazonCookies || this.state.rakutenCookies
                        ? (<img src={img_src} className='result-img' alt={final_type} />)
                        : (this.affiliateRenderer())
                        }
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/"
                        ><img src="https://images.ktestone.com/jelling/comment-for-jelling.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/fruitboxrun/"
                        ><img src="https://images.ktestone.com/jelling/fruitBoxRun-banner.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/fruitsline/"
                        ><img src="https://images.ktestone.com/jelling/fruitsLine-banner.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/gotohome/"
                        ><img src="https://images.ktestone.com/jelling/goToHome-banner.png" className='result-img' alt={final_type} /></a>
                    </Fragment>
                )
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
                        {this.adTagRenderer()}
                        {this.state.isOpened || this.state.coupangCookies || this.state.amazonCookies || this.state.rakutenCookies
                        ? (<img src={img_src} className='result-img' alt={final_type} />)
                        : (this.affiliateRenderer())
                        }
                    </Fragment>
                )
            }
            
        //  and other case of Type Quizes
        } else if (_current_test_contents.info.scoreType === 'percentageMBTI') {
            // let result_score = this.state.current_url[6].match(/\d+/g)[0];
            const queryParams = new URLSearchParams(this.state.current_url[6]);
            const result_score = queryParams.get("pct");
            let result_color = _current_test_result.color;
            let bg_img_src = _current_test_result.bg_img_src;
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
                        {/* <meta property="og:image" content={og_img_url}/>
                        <meta property="og:image:width" content="800"/>
                        <meta property="og:image:height" content="400"/> */}
                        <meta property="og:image:alt" content={this.state.current_result} />

                        {/* <!-- Twitter --> */}
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content={this.state.sharable_url}/>
                        <meta property="twitter:title" content={test_current+'-케이테스트'}/>
                        <meta property="twitter:description" content={final_desc + ':' + desc_test_current}/>
                        {/* <meta property="twitter:image" content={og_img_url}/>
                        <meta property="og:image:width" content="800"/>
                        <meta property="og:image:height" content="400"/> */}
                        <meta property="twitter:image:alt" content={this.state.current_result} />
                    </Helmet>
                    <PCTMBTIBAR result_score={result_score} result_color={result_color} bg_img_src={bg_img_src} />
                    <img src={img_src} className='result-img' alt={final_type} />
                    {this.adTagRenderer()}
                </Fragment>
            )
        } else if(this.state.current_test === "dogSounds" || this.state.current_test === "dogSoundsEng") {
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
                    <h1>{this.props.dog_name}</h1>
                    <img src={img_src} className='result-img' alt={final_type} />
                </Fragment>
            )
        } else if(this.state.current_test === "facialExpressionAnalyzer" || this.state.current_test === "facialExpressionAnalyzerEng" || this.state.current_test === "facialExpressionAnalyzerCN") {
            let test_title_img_url = "https://images.ktestone.com/bigDataTestImages/" + this.state.current_test +  "/" + this.state.current_test + "-title.png"
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
                    <img src={test_title_img_url} alt="Facial Expression Analyzer" className="facialExpressionAnalyzer-title-img"/>
                    <img src={this.props.pics} alt="Face!" className="result-user-pic"/>
                    <div className='result-ment'>{this.props.ment}</div>
                </Fragment>
            )
        } else {
            // if there are not description text === only result img
            if(final_desc === ``){
                // include sinjoer2022 test only image
                if(window.location.href.includes('sinjoer2022')){
                    return (
                        <Fragment>
                            <img src={img_src} className='result-img' alt={final_type} />
                            <img src={'https://images.ktestone.com/resultImages/sinjoer2022/sinjoer2022-wrong.png'} className='result-img' alt={final_type} />
                        </Fragment>
    
                    )
                } else {
                    return (
                        <Fragment>
                            <img src={img_src} className='result-img' alt={final_type} />
                        </Fragment>
    
                    )
                }
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

    };

    mainPageRender(){
        return(
            <Router >
                <Switch>
                    <Route path='/' component={App} exact/>
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    };

    goBack(){
        this.props.history.goBack();
    };

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

                    <OtherLangIcons currentTest={this.state.current_test}/>
                    
                    <div className="share">
                        <h5 className="share-title">친구에게 공유하기</h5>
                        <div className="share">
                            {/* if facialExpAnalyzer, copy url is test home, other tests' urls are result urls */}
                            <CopyToClipboard text={this.state.current_test.includes("facialExpressionAnalyzer") ? "https://ktestone.com/kapable.github.io/" + this.state.current_test+'/' : this.state.sharable_url+'/'}>
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
                        {this.otherTestBannerRenderer()}
                    </div>
                </div>
                {/* New Test banners */}
                {/* {this.horizontalNewTestRenderer()} */}

                {/* CPC Banner Result footer */}
                {/* {this.cpcBannerResultFooterScriptor()} */}
            </Fragment>
        );
    };
    
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
    };

    render(){
        return(
            <div>
                {this.pageRenderer()}
            </div>
        );
    };
};

export default withCookies(Result);
