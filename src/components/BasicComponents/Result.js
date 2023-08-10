import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../../api/TESTS'
import OtherLangIcons from '../SubComponents/OtherLangIcons';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from '../../App'
import { Card } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HorizontalScrolling from '../SubComponents/horizontalScrolling';
import COPYBTN from '../../api/DefaultImg/result-copy-link-btn.png';
import AGAINBTN from '../../api/DefaultImg/result-to-again-btn.png';
import TOHOMEBTN from '../../api/DefaultImg/result-to-home-btn.png';
import { _eventSenderGA } from '../../tools/tools';
import { Helmet } from 'react-helmet';
import ScriptTag from 'react-script-tag';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import KAKAOPLUSFRIEND from '../../api/DefaultImg/go-to-kakao-plusfriend.png';
import PCTMBTIBAR from '../SubComponents/PctMBTIBar';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import '../TestTypes/FactPok/factPok.css';
import ShareGroup from './ShareGroup';
import AdsenseAdvertiser from '../SubComponents/AdsenseAdvertiser';
import CoupangDynamicBanner from '../SubComponents/CoupangDynamicBanner';
import GoToHomeBtn from '../SubComponents/GoToHomeBtn';

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
            isOpened: false,
            originAdProb: 0.6 < Math.random(),
            adProb: 1.1 >= Math.random(),
            startTimer: false,
            coupangCount: 5,
        };
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this);
        this._onShareButtonClick = this._onShareButtonClick.bind(this);
        this._onPPLBannerClick = this._onPPLBannerClick.bind(this);
        this._onGotoBlogClick = this._onGotoBlogClick.bind(this);
        this.horizontalNewTestRenderer = this.horizontalNewTestRenderer.bind(this);
        this.adTagRenderer = this.adTagRenderer.bind(this);
        this.otherTestBannerRenderer = this.otherTestBannerRenderer.bind(this);
        this.onCoupangButtonClick = this.onCoupangButtonClick.bind(this);
        this.onCoupangCloseButtonClick = this.onCoupangCloseButtonClick.bind(this)
        this.onOtherCoupangButtonClick = this.onOtherCoupangButtonClick.bind(this);
        this.labelTestUpperBannerRenderer = this.labelTestUpperBannerRenderer.bind(this);
    };

    componentDidMount() {
        setTimeout(function () {
            this.setState({
                startTimer: true
            });
            this.inter = setInterval(() => {
                if (this.state.coupangCount <= 0) {
                    clearInterval(this.inter);
                    this.setState({
                        coupangCount: 0
                    }); 
                } else {
                    this.setState((prevState) => ({coupangCount: prevState.coupangCount - 1})); 
                }
            }, 1000);
        }.bind(this), 800);
    }

    componentWillUnmount() {
        clearInterval(this.inter);
    }

    onCoupangButtonClick(test){
        const { cookies } = this.props;
        // const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        const cookieAges = 60*60*2;
        cookies.set('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        this.setState({
            coupangCookies: cookies.get('coupang'),
            isOpened: true,
        });
        if(this.state.originAdProb) {
            _eventSenderGA("Paging", `Click go-to-Coupang Button(${test})`, "result page");
            _eventSenderGA("Paging", `Click go-to-Coupang Button`, "result page");
        }
    };

    onCoupangCloseButtonClick() {
        const { cookies } = this.props;
        // const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        const cookieAges = 60*60*2;
        cookies.set('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        this.setState({
            coupangCookies: cookies.get('coupang'),
            isOpened: true,
        });
        _eventSenderGA("Closing", "Click Close-Coupang Button", "result page");
    }

    onOtherCoupangButtonClick(){
        const { cookies } = this.props;
        const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        cookies.set('coupang', true, { path: '/', maxAge: cookieAges, secure: true }); // shorter one of 60 sec * 60 min * 12 hour | tommorow 00 - now time
        this.setState({
            coupangCookies: cookies.get('coupang'),
            isOpened: true,
        });
        _eventSenderGA("Paging", "Click go-to-Other-Coupang Button", "result page");
    };
    _onBackToStartButtonClick(){
        let factPokQueries = ["factPok", "MyFactPok", "FriendFactPok"];
        let coupleCharacterQueries = ["coupleCharacter", "coupleCharacterFemale", "coupleCharacterMale"];
        let coupleCharacterEngQueries = ["coupleCharacterEng", "coupleCharacterFemaleEng", "coupleCharacterMaleEng"];
        let coupleCharacterCNQueries = ["coupleCharacterCN", "coupleCharacterFemaleCN", "coupleCharacterMaleCN"];
        let coupleCharacterJPQueries = ["coupleCharacterJP", "coupleCharacterFemaleJP", "coupleCharacterMaleJP"];
        let coupleCharacterITQueries = ["coupleCharacterIT", "coupleCharacterFemaleIT", "coupleCharacterMaleIT"];
        let loveCharacterQueries = ["loveCharacter", "loveCharacterFemale", "loveCharacterMale"];
        let loveCharacterCNQueries = ["loveCharacterCN", "loveCharacterFemaleCN", "loveCharacterMaleCN"];
        let loveCharacterEngQueries = ["loveCharacterEng", "loveCharacterFemaleEng", "loveCharacterMaleEng"];
        let loveCharacterGerQueries = ["loveCharacterGer", "loveCharacterFemaleGer", "loveCharacterMaleGer"];
        let loveCharacterESQueries = ["loveCharacterES", "loveCharacterFemaleES", "loveCharacterMaleES"];
        let loveCharacterITQueries = ["loveCharacterIT", "loveCharacterFemaleIT", "loveCharacterMaleIT"];
        let haGenderQueries = ["haGender", "haGenderFemale", "haGenderMale"];
        if(factPokQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/factPok/";
        };
        if(coupleCharacterQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/coupleCharacter/";
        };
        if(coupleCharacterEngQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/coupleCharacterEng/";
        };
        if(coupleCharacterCNQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/coupleCharacterCN/";
        };
        if(coupleCharacterJPQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/coupleCharacterJP/";
        };
        if(coupleCharacterITQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/coupleCharacterIT/";
        };
        if(loveCharacterQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacter/";
        };
        if(loveCharacterCNQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacterCN/";
        };
        if(loveCharacterEngQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacterEng/";
        };
        if(loveCharacterGerQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacterGer/";
        };
        if(loveCharacterESQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacterES/";
        };
        if(loveCharacterITQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/loveCharacterIT/";
        };
        if(haGenderQueries.some(el => this.state.current_url.includes(el))) {
            window.location.href = window.location.origin + "/kapable.github.io/haGender/";
        };
        _eventSenderGA("Paging", "Click Re-test Button", "result page");
        this.setState({
            mode:"intro"
        })
    };

    _onShareButtonClick(){
        this.setState({
            num_shares_count:this.state.num_shares_count+1
        })
        _eventSenderGA("Sharing", "Click Copy-link Button", "result page");
        alert("링크가 복사됐어요!");
    };

    _onPPLBannerClick(){
        _eventSenderGA("Outlinking", "Click PPL-Banner Button", "result page");
    };

    _onGotoBlogClick(){
        _eventSenderGA("Outlinking", "Click Go-to-Blog Button", "result page");
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
                    ><img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
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
                    ><img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
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
                    ><img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
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
                    ><img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} /></a>
                </Fragment>
            )
        }
    };
    
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
                    > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                    > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                            > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={taro_outlink_2}
                            className="to-ppl-banner-text"
                            > <img loading="lazy" src={banner_img_src_2} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                    > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                    > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
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
                    > <img loading="lazy" src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick} /> </a>
                </Fragment>
            )
        }
    };

    otherTestBannerRenderer() {
        let personalColor2022ListKor = [];
        let EngTestList = ["loveLotteryEng", "loveTVEng", "rainDropEng", "digitalCharEng", "postCardEng", "mazeHeartEng", "colorLabelStickerEng", "DIYEng", "labelStickerEng", "earthCharacteristicEng", "polaroidCharacteristicEng", "labelStickerLoveEng", "loveMagazineEng", "loveInMyHeadEng", "loveSpicyEng", "loveSpringFlowerEng", "coupleCharacterEng", "loveSpeedEng", "loveCellEng", "speechHabitEng", "mbtiFeaturesEng", "bondeeEng", "loveWarningEng", "characteristicChracterEng", "meGuideEng", "loveCharacterEng", "loveCharacterFemaleEng", "loveCharacterMaleEng", "memoEng", "waterLoveEng", "musicNoteEng", "fishShapedBunEng", "smileColorTestEng", "personalColorEng", "snowflakeEng", "personalColor2022Eng", "auditionBTIEng", "percentageMBTI2022Eng", "lovejewerlyEng", "idealTypeEng", "fruitAltEng", "facialExpressionAnalyzerEng", "dogSoundsEng", "hanbokBTIEng", "personalColorFactEng", "dringkingHabitEng", "personalIncenseEng"];
        let CNTestList = ["emotionGraphCN", "loveInMyHeadCN", "loveSpicyCN", "cantWaitCN", "loveSpringFlowerCN", "coupleCharacterMaleCN", "coupleCharacterFemaleCN", "loveCellCN", "speechHabitCN", "bondeeCN", "loveFlameCN", "characteristicChracterCN", "loveWarningCN", "loveCharacterCN", "smileColorTestCn", "auditionBTICn", "percentageMBTI2022Cn", "personalColor2022CN", "oneSidedLoveCN"];
        let JPTestList = ["whyLoveJP", "charRoadJP", "scrapBookCharJP", "flowerGardenJP", "speechHabitJP", "loveFlameJP", "readyToBoneJP", "earthCharacteristicJP", "cantWaitJP", "puzzleLoveJP", "coupleCharacterJP","coupleCharacterMaleJP","coupleCharacterFemaleJP", "mbtiFeaturesJP", "loveCellJP", "emotionGraphJP", "polaroidCharacteristicJP", "loveTicketJP", "loveCharacterMaleJP", "loveCharacterFemaleJP", "loveWarningJP", "meGuideJP", "smileColorTestJP", "flowerBTIJP", "auditionBTIJp", "percentageMBTI2022JP", "oneSidedLoveJP", "dringkingHabitJP", "personalColorJP"];
        let GerTestList = ["loveCharacterGer", "personalColorGer"];
        let ESTestList = ["loveWarningES", "personalColorES"];
        let ITTestList = ["coupleCharacterIT","coupleCharacterMaleIT","coupleCharacterFemaleIT", "loveCharacterMaleIT", "loveCharacterFemaleIT", "loveFlameIT", "characteristicChracterIT"];
        let readyToBoneITList = ["readyToBoneIT"];
        let characteristicChracterESList = ["characteristicChracterES"];
        let characteristicChracterGerList = ["characteristicChracterGer",];
        let labelStickerCNList = ["labelStickerCN"];
        let alienCharJPList = ["alienCharJP"];
        let percentageMBTI2022ListKor = ["percentageMBTI2022",];
        let percentageMBTI2022ListOverseas = ["percentageMBTI2022Eng","percentageMBTI2022Cn"];
        let alienCharEngList = ["alienCharEng"];
        let bubbleCharList = ["bubbleChar"];
        let hmallList = ['hmall', 'labelStickerSKT'];
        if(personalColor2022ListKor.includes(this.state.current_test)){
            const jelling_outlink = "https://bit.ly/3FlwKMJ";
            return(
                <Fragment>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://ktestone.com/kapable.github.io/percentageMBTI2022/'
                    className="to-ppl-banner-text"
                    > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/percentageMBTI2022-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='http://pf.kakao.com/_IxnRfb'
                    className="to-ppl-banner-text"
                    > <img loading="lazy" src={KAKAOPLUSFRIEND} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={jelling_outlink}
                    className="to-ppl-banner-text"
                    > <img loading="lazy" src={JELLINGBANNERKOR} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                </Fragment>
            )
        } else if (EngTestList.includes(this.state.current_test)) {
            const rederTestList = ["alienCharEng", "loveLotteryEng", "loveTVEng", "rainDropEng",];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (percentageMBTI2022ListKor.includes(this.state.current_test)) {
            const rederTestList = ["paints", "memo", "waterLove", "fortuneCookie", "musicNote", "bread2023", "luckyBag2023", "personalColor2022", "personalColor"];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (percentageMBTI2022ListOverseas.includes(this.state.current_test)) {
            const rederTestList = ["fishShapedBunEng", "personalColor2022Eng", "personalColorEng"];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (alienCharEngList.includes(this.state.current_test)) {
            const rederTestList = ["loveLotteryEng", "loveTVEng", "rainDropEng", "digitalCharEng",];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (bubbleCharList.includes(this.state.current_test)) {
            const rederTestList = ["catFootLove", "ferrisWheel", "tetrisChar",];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (CNTestList.includes(this.state.current_test)) {
            const rederTestList = ["labelStickerCN", "emotionGraphCN", "cloudLoveCN",];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (JPTestList.includes(this.state.current_test)) {
            const rederTestList = ["alienCharJP", "whyLoveJP", "charRoadJP", "scrapBookCharJP",];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (ESTestList.includes(this.state.current_test)) {
            const rederTestList = ["characteristicChracterES", "smileColorTestES", "loveWarningES", "loveCharacterES"];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (GerTestList.includes(this.state.current_test)) {
            const rederTestList = ["characteristicChracterGer", "loveCharacterGer", "personalColorGer"];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (ITTestList.includes(this.state.current_test)) {
            const rederTestList = ["readyToBoneIT", "loveFlameIT", "characteristicChracterIT"];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (readyToBoneITList.includes(this.state.current_test)) {
            const rederTestList = ["loveCharacterIT", "loveFlameIT", "characteristicChracterIT",];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (characteristicChracterESList.includes(this.state.current_test)) {
            const rederTestList = ["smileColorTestES", "loveWarningES", "loveCharacterES"];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (labelStickerCNList.includes(this.state.current_test)) {
            const rederTestList = ["emotionGraphCN", "cloudLoveCN", "loveMagazineCN",];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (characteristicChracterGerList.includes(this.state.current_test)) {
            const rederTestList = ["loveCharacterGer", "personalColorGer"];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (alienCharJPList.includes(this.state.current_test)) {
            const rederTestList = ["whyLoveJP", "charRoadJP", "scrapBookCharJP", "hologramLoveJP", "rainDropJP",];
            return (
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
                </Fragment>
            )
        } else if (hmallList.includes(this.state.current_test)) {
            return null;
        } else {
            const rederTestList = ["bubbleChar", "catFootLove", "ferrisWheel", "tetrisChar",];
            return(
                <Fragment>
                    {rederTestList.map((test) => (
                        <Fragment key={test + '-test-key'}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://ktestone.com/kapable.github.io/${test}/`}
                                className="to-ppl-banner-text"
                                > <img loading="lazy" src={`https://images.ktestone.com/main-thumbnail/${test}-thumb.png`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                            <AdsenseAdvertiser
                                key={test+'-adsense'}
                                client="ca-pub-2382342018701919"
                                slot="6832785479"
                                format="auto"
                                responsive="true"
                                style={{ display:"block", width:"23rem", maxWidth:"40rem", margin: '0 auto' }}
                            />
                        </Fragment>
                    ))}
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
    };

    affiliateRenderer(){
        const cookieRocketCoupangLink = this.state.originAdProb ? "https://link.coupang.com/a/X2X8X" : "https://link.coupang.com/a/X2Zw2";
        let otherAdProb = 0.1 > Math.random();
        const othersLink = [
            { test: "personalScentBTI", coupangLink: "https://link.coupang.com/a/FFVJ2" },
            { test: "chaebol", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "despicable", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "proud", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "rabbit2023", coupangLink: "https://link.coupang.com/a/KvzfS" },
            { test: "orbuculum", coupangLink: "https://link.coupang.com/a/KvzfS" },
            { test: "luckyBag2023", coupangLink: "https://link.coupang.com/a/FFVJ2" },
            { test: "holidayLove", coupangLink: "https://link.coupang.com/a/MqiqA" },
            { test: "hamster", coupangLink: "https://link.coupang.com/a/MqiqA" },
            { test: "maltese", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "diet", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "princess", coupangLink: "https://link.coupang.com/a/MqiqA" },
            { test: "hallInTheWall", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "quokka", coupangLink: "https://link.coupang.com/a/KvzD5" },
            { test: "newYearSemester", coupangLink: "https://link.coupang.com/a/MqiqA" },
            { test: "cherryBlossomSite", coupangLink: "https://link.coupang.com/a/TtJp6" },
        ];
        const testsArray = othersLink.map(({ test }) => test);
        return (
            <div className='article-adCover-div-1'>
                <div className='article-adCover-div-2'>
                    <div className='article-adCover-div-3'>
                        <p><b><span style={{color:"#4185F4"}}>콘텐츠를 보기 전</span> 쿠팡 쇼핑을 해보세요</b></p>
                        <div><p style={{ fontSize: '0.7rem' }}>쿠팡 방문은 케이테스트가 항상 질좋은 콘텐츠를 제공 할 수 있는 힘이 됩니다.<br />항상 케이테스트 콘텐츠를 사랑해주셔서 감사합니다.</p></div>
                        <p style={{ fontSize: "0.7rem", width: "0.7rem", color: "white", backgroundColor: "#83b4de", position:"absolute", right:"4rem", top: "5.2rem" }}>
                            {this.state.startTimer ? (
                                    this.state.coupangCount === 0 ? <span style={{color:'white', cursor:'pointer'}} onClick={this.state.coupangCount === 0 ? this.onCoupangCloseButtonClick : null}><b>X</b></span> : this.state.coupangCount
                            ) :null}
                        </p>
                        <a href={testsArray.includes(this.state.current_test) && otherAdProb ? othersLink.find((item) => item?.test === this.state.current_test)?.coupangLink : cookieRocketCoupangLink}  rel='noreferrer noopener'> {/* target="_blank" */}
                            <button className='result-coupang-button' type="primary" shape='round' style={{ width: '15rem', height: '3.5rem'}} onClick={testsArray.includes(this.state.current_test) && otherAdProb ? this.onOtherCoupangButtonClick : () => this.onCoupangButtonClick(this.state.current_test)}>
                                버튼 누르고 결과 보기
                            </button>
                        </a>
                        <p style={{ fontSize: '10px', color: 'grey', marginTop: "0.5rem" }}>원치 않을 경우 뒤로 가기를 눌러주세요.</p>
                    </div>
                </div>
            </div>
        );
    };

    resultRender(){
        // searching the result content by current url path
        const _current_test_contents = TESTS.filter((test) => test.info.mainUrl === this.state.current_test)[0];
        const foreignTest = TESTS.filter((test) => (test.info.lang !== 'Kor')).filter((test) => (test.info.lang !== 'sample')).map((test) => test.info.mainUrl);
        let _current_test_result = _current_test_contents.results.filter((res) => res.query === this.state.current_result)[0];
        let final_type = _current_test_result.type;
        let final_desc = _current_test_result.desc;
        let img_src = _current_test_result.img_src;
        let test_current = _current_test_contents.info.mainTitle;
        let desc_test_current = _current_test_contents.info.subTitle;
        
        // return final result option
        if(_current_test_contents.info.scoreType === "storyTelling" || _current_test_contents.info.scoreType === "typeCountingMBTI" || _current_test_contents.info.scoreType === "dualMBTI" || _current_test_contents.info.scoreType === "numberScoring" ){
            // meta tag for PPL test contents
            let jelling_list = ['fruitAlt', 'fruitAltEng', 'idealType', 'idealTypeEng'];
            let tonymoly_list = ["factPok", "MyFactPok", "FriendFactPok",];
            if(foreignTest.includes(this.state.current_test)) {
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
                        <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
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
                        ><img loading="lazy" src={img_src} className='result-img' alt={final_type} /></a>
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
                        {this.state.isOpened || this.state.coupangCookies
                        ? (<img loading="lazy" src={img_src} className='result-img' alt={final_type} />)
                        : (<>
                            <div className='article-adCover-div'>
                                <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                            </div>
                            {this.affiliateRenderer()}
                        </>)}
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/"
                        ><img loading="lazy" src="https://images.ktestone.com/jelling/comment-for-jelling.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/fruitboxrun/"
                        ><img loading="lazy" src="https://images.ktestone.com/jelling/fruitBoxRun-banner.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/fruitsline/"
                        ><img loading="lazy" src="https://images.ktestone.com/jelling/fruitsLine-banner.png" className='result-img' alt={final_type} /></a>
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://jellinggame.com/gotohome/"
                        ><img loading="lazy" src="https://images.ktestone.com/jelling/goToHome-banner.png" className='result-img' alt={final_type} /></a>
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
            } else if (tonymoly_list.includes(this.state.current_test)) {
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
                        <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                        <div className='result-factPok-bottom-banner'>
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href='https://gift.kakao.com/product/5582623'
                                className='to-tonymoly-kakao-banner'
                                onClick={() => (_eventSenderGA("Paging", "Click Go-to-Kakao Button", "tonymoly result page"))}
                            >
                                <img loading="lazy" src={`https://images.ktestone.com/meta/factPok/factPok-bottom-banner-left.jpg`} className='result-factPok-bottom-banner-left' alt='result-factPok-bottom-banner-left' />
                            </a>
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href='https://smartstore.naver.com/tonymolyofficial/products/7216276892'
                                className='to-tonymoly-store-banner'
                                onClick={() => (_eventSenderGA("Paging", "Click Go-to-Store Button", "tonymoly result page"))}
                            >
                                <img loading="lazy" src={`https://images.ktestone.com/meta/factPok/factPok-bottom-banner-right.jpg`} className='result-factPok-bottom-banner-right' alt='result-factPok-bottom-banner-right' />
                            </a>
                        </div>
                    </Fragment>
                )
            } else if(this.state.current_test === "mbtiFeatures") {  
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current + ' ' + this.state.current_result + ' 특징 - 케이테스트'} </title>
                            <meta name="title" content={test_current + ' ' + this.state.current_result + ' 특징 - 케이테스트'} />
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current + ' ' + this.state.current_result + ' 특징 - 케이테스트'} />
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current + ' ' + this.state.current_result + ' 특징 - 케이테스트'} />
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        {this.state.isOpened || this.state.coupangCookies
                        ? (<img loading="lazy" src={img_src} className='result-img' alt={final_type} />)
                        : (<>
                            <div className='article-adCover-div'>
                                <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                            </div>
                            {this.affiliateRenderer()}
                        </>)}
                    </Fragment>
                )
            } else if(this.state.current_test === "jaetech") {  
                return (
                    <Fragment>
                        <Helmet>
                            {/* <!-- Primary Meta Tags --> */}
                            <title>{test_current + ' ' + this.state.current_result + ' - 케이테스트'} </title>
                            <meta name="title" content={test_current + ' ' + this.state.current_result + ' - 케이테스트'} />
                            <meta name="description" content={this.state.current_result + ':' + desc_test_current} data-react-helmet="true"/>
                            <link rel="main-url" href={this.state.sharable_url}/>
    
                            {/* <!-- Open Graph / Facebook --> */}
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={this.state.sharable_url}/>
                            <meta property="og:title" content={test_current + ' ' + this.state.current_result + ' - 케이테스트'} />
                            <meta property="og:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="og:image" content={img_src}/>
                            <meta property="og:image:alt" content={this.state.current_result} />
    
                            {/* <!-- Twitter --> */}
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={this.state.sharable_url}/>
                            <meta property="twitter:title" content={test_current + ' ' + this.state.current_result + ' - 케이테스트'} />
                            <meta property="twitter:description" content={this.state.current_result + ':' + desc_test_current}/>
                            <meta property="twitter:image" content={img_src}/>
                            <meta property="twitter:image:alt" content={this.state.current_result} />
                        </Helmet>
                        <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://PC5tOwFSxk6rMl5hMJ6LPA.adtouch.adbrix.io/api/v1/click/29kIDhdJm0WC7B1v4JrBBQ?cb_1={CUSTOM_PARAM}`}
                        className="to-ppl-banner-text"
                        > <img loading="lazy" src={`https://images.ktestone.com/meta/HmallTest.jpg`} className='ppl-banner-img' alt={this.state.current_result} onClick={this._onPPLBannerClick}/> </a>
                    </Fragment>
                )
            } else if(this.state.current_test === "hmall") {
                const hmall_type_link_obj = {
                    "ESTP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861316",
                    "ESFP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861317",
                    "ENFP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861318",
                    "INFP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861319",
                    "ENTJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861320",
                    "INFJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861321",
                    "INTJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861322",
                    "ESTJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861323",
                    "INTP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861333",
                    "ENFJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861334",
                    "ISFJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861335",
                    "ENTP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861336",
                    "ISTJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861337",
                    "ISTP":     
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861338",
                    "ISFP":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861339",
                    "ESFJ":    
                    "http://www.hmall.com/m/dpk/plPlanSaleL.do?PlanSaleSectID=2861340",
                }
                return (
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={hmall_type_link_obj[_current_test_result.type]}>
                        <img loading="lazy" style={{maxWidth:"16.5rem"}} src='https://images.ktestone.com/meta/hmall/hmall-go-to-result-btn.png' alt="Hmall로 결과 보러가기"
                            onClick={_eventSenderGA("Paging", "Click go-to-Hmall Button", "result page")}
                        />
                    </a>
                )
            } else if(this.state.current_test === "labelStickerSKT") {
                return(
                    <Fragment>
                        <div style={{overflowY:"hidden", height:"10rem"}} oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
                            <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                        </div>
                        <div style={{position: "relative", backgroundColor: "rgba(255,255,255,0.8)", height: "4rem", top: "-4rem", width: "100%"}}>
                            <div style={{position: "relative", width: "100%", height: "2rem", top: "0.5rem", margin: "0 auto"}}>
                                <div style={{width: "fit-content", margin: "0 auto", position: "relative"}}>
                                    <a rel="noopener noreferrer" target="_blank" href={`https://m.shop.tworld.co.kr/exhibition/view?exhibitionId=P00000337&mbti=${final_type}&utm_source=ktest&utm_medium=result&utm_campaign=0directplanktest`} onClick={() => _eventSenderGA("Outlinking", "Click SKT Go-to-Result Button", "result page")}>
                                        <img src='https://images.ktestone.com/meta/labelStickerSKT/SKT-go-to-result-button.jpeg' alt='SKT-go-to-result' style={{ cursor: "pointer", width: '15rem' }}/>
                                    </a>
                                </div>
                            </div>
                        </div>
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
                        {this.state.isOpened || this.state.coupangCookies
                        ? (<>
                            <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                            {_current_test_contents.info?.blogUrl ? (
                                <a rel="noopener noreferrer" href={`/kapable.github.io/blog/${_current_test_contents.info?.blogUrl}/`} onClick={this._onGotoBlogClick}>
                                    <img loading="lazy" className='result-to-blog-banner' src={`https://images.ktestone.com/default/to-test-blog-banner.jpg`} alt='to-test-blog-banner'/></a>
                            ) : null}
                        </>)
                        : (<>
                            <div className='article-adCover-div' oncontextmenu="return false" 
                                ondragstart="return false" 
                                onselectstart="return false">
                                <img loading="lazy" src={img_src} className='result-img crop-result-img' alt={final_type} />
                            </div>
                            {this.affiliateRenderer()}
                        </>)}
                    </Fragment>
                )
            };
            
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
                    <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
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
                    <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
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
                    <img loading="lazy" src={test_title_img_url} alt="Facial Expression Analyzer" className="facialExpressionAnalyzer-title-img"/>
                    <img loading="lazy" src={this.props.pics} alt="Face!" className="result-user-pic"/>
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
                            <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                            <img loading="lazy" src={'https://images.ktestone.com/resultImages/sinjoer2022/sinjoer2022-wrong.png'} className='result-img' alt={final_type} />
                        </Fragment>
    
                    )
                } else {
                    return (
                        <Fragment>
                            <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                        </Fragment>
    
                    )
                }
            } else {
                return (
                    <Fragment>
                        {this.state.adProb && (!this.state.isOpened || !this.state.coupangCookies)
                        ? (<>
                            <div className='article-adCover-div'>
                                <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                            </div>
                            {this.affiliateRenderer()}
                        </>)
                        : (
                            <>
                                <img loading="lazy" src={img_src} className='result-img' alt={final_type} />
                                <Card className="result-card" bg="light">
                                    <Card.Body className="result-p">
                                        <Card.Text>{final_desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                        }
                    </Fragment>
                )
            }
        };

    };

    labelTestUpperBannerRenderer() {
        if (this.state.current_test === 'labelSticker') {
            return (
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://ktestone.com/kapable.github.io/labelStickerFriendship/`}
                        className="to-ppl-banner-text"
                    > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelStickerFriendship-banner.jpeg`} className='ppl-banner-img' alt={'labelStickerFriendship'} onClick={this._onPPLBannerClick}/> </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://ktestone.com/kapable.github.io/labelStickerLove/`}
                        className="to-ppl-banner-text"
                    > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelStickerLove-banner.jpeg`} className='ppl-banner-img' alt={'labelStickerLove'} onClick={this._onPPLBannerClick}/> </a>
                </Fragment>
            )
        } else if (this.state.current_test === 'labelStickerLove') {
            return (<Fragment>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://ktestone.com/kapable.github.io/labelStickerFriendship/`}
                    className="to-ppl-banner-text"
                > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelStickerFriendship-banner.jpeg`} className='ppl-banner-img' alt={'labelStickerFriendship'} onClick={this._onPPLBannerClick}/> </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://ktestone.com/kapable.github.io/labelSticker/`}
                    className="to-ppl-banner-text"
                > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelSticker-banner.jpeg`} className='ppl-banner-img' alt={'labelSticker'} onClick={this._onPPLBannerClick}/> </a>
            </Fragment>)
        } else if (this.state.current_test === 'labelStickerFriendship') {
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://ktestone.com/kapable.github.io/labelStickerLove/`}
                        className="to-ppl-banner-text"
                    > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelStickerLove-banner.jpeg`} className='ppl-banner-img' alt={'labelStickerLove'} onClick={this._onPPLBannerClick}/> </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://ktestone.com/kapable.github.io/labelSticker/`}
                        className="to-ppl-banner-text"
                    > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelSticker-banner.jpeg`} className='ppl-banner-img' alt={'labelSticker'} onClick={this._onPPLBannerClick}/> </a>
                </Fragment>
            )
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
    };

    goBack(){
        this.props.history.goBack();
    };

    resultPageRender(){
        let ppl_list = ["labelStickerSKT", "hmall", "factPok", "MyFactPok", "FriendFactPok"];
        return(
            <Fragment>
                <div className="result">
                    {/* Coupang Partners Dynamic Banner */}
                    {TESTS.filter((test) => test.info.mainUrl === this.state.current_test)[0].info.lang === 'Kor' && !ppl_list.includes(this.state.current_test)
                    ? (this.state.current_test !== 'labelSticker' && this.state.current_test !== 'labelStickerLove' && this.state.current_test !== 'labelStickerFriendship'
                        ? <CoupangDynamicBanner page={'result'} />
                        : this.labelTestUpperBannerRenderer()
                    ): null}

                    {/* Adsense */}
                    <AdsenseAdvertiser
                        client="ca-pub-2382342018701919"
                        slot="5663135072"
                        format="auto"
                        responsive="true"
                    />
                    
                    <div className="result-header">
                        <h5 className="result-title">결과는...</h5>
                        <div className="result-value">
                            {this.resultRender()}
                        </div>
                        {/* PPL banner image */}
                        {this.pplBannerRenderer()}
                    </div>
                    
                    {/* LabelSticker Goods Banner */}
                    {(this.state.current_test === 'labelSticker' || this.state.current_test === 'labelStickerLove' || this.state.current_test === 'labelStickerFriendship'
                        ? (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://rootssolution.co.kr/76/?idx=333`}
                                className="to-ppl-banner-text"
                            > <img loading="lazy" src={`https://images.ktestone.com/meta/labelSticker/toLabelSticker-goods-banner.jpg`} className='ppl-banner-img' alt={'toLabelSticker-goods'} onClick={this._onPPLBannerClick}/> </a>
                        )
                        : null
                    )}
                    {ppl_list.includes(this.state.current_test) || this.state.isOpened || this.state.coupangCookies ? null : <p className='result-coupang-comment' style={{color:'grey'}}>* 이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.</p>}

                    <OtherLangIcons currentTest={this.state.current_test}/>
                    
                    <AdsenseAdvertiser
                        client="ca-pub-2382342018701919"
                        slot="5663135072"
                        format="auto"
                        responsive="true"
                    />

                    <div className="share">
                        <h5 className="share-title">친구에게 공유하기</h5>
                        <ShareGroup
                            link={"https://ktestone.com/kapable.github.io/" + this.state.current_test + "/"}
                            testTitle={TESTS.find((test) => test?.info?.mainUrl === this.state.current_test)?.info?.mainTitle}/>
                        <div className="share">
                            {/* if facialExpAnalyzer, copy url is test home, other tests' urls are result urls */}
                            <CopyToClipboard text={this.state.current_test.includes("facialExpressionAnalyzer") ? "https://ktestone.com/kapable.github.io/" + this.state.current_test+'/' : this.state.sharable_url+'/'}>
                                <img loading="lazy"
                                    src={COPYBTN}
                                    onClick={this._onShareButtonClick}
                                    className="share-btn-img"
                                    alt="링크 복사"
                                    />
                            </CopyToClipboard>
                        </div>
                        <div className="re-test-btn">
                            <img loading="lazy"
                                src={AGAINBTN}
                                className="re-test-btn-img"
                                onClick={this._onBackToStartButtonClick}
                                alt="테스트 다시하기"/>
                        </div>
                    </div>
                    <div className="back-to-main">
                        <img loading="lazy"
                            src={TOHOMEBTN}
                            onClick={function(e) {
                                e.preventDefault();
                                _eventSenderGA("Paging", "Click Back-to-main Button", "result page");
                                this.setState({
                                    mode:"main"
                                })
                            }.bind(this)}
                            className="back-to-main-btn-img"
                            alt="다른 테스트 하러가기"
                            />
                    </div>
                </div>
                {this.otherTestBannerRenderer()}
                {this.adTagRenderer()}
                {/* New Test banners */}
                {/* {this.horizontalNewTestRenderer()} */}

                {/* CPC Banner Result footer */}
                {/* {this.cpcBannerResultFooterScriptor()} */}
                <GoToHomeBtn page="result"/>
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