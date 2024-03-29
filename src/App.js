import React, { Component, Fragment } from 'react';
import MainPage from './components/BasicComponents/MainPage';
import Intro from './components/BasicComponents/Intro'
import ResultToIntro from './components/SubComponents/ResultToIntro'
import ScrollToTop from './components/SubComponents/ScrollToTop'
import TESTS from './api/TESTS';
import POSTSTART from './components/TestTypes/Post2021/StartPage';
import POSTPOST from './components/TestTypes/Post2021/PostPage';
import POSTWRITE from './components/TestTypes/Post2021/PostWrite';
import POSTSTART2022 from './components/TestTypes/Post2022/StartPage';
import POSTPOST2022 from './components/TestTypes/Post2022/PostPage';
import POSTWRITE2022 from './components/TestTypes/Post2022/PostWrite';
import ARTICLES from './api/ARTICLES'
import ArticleList from './components/BasicComponents/Article/ArticleList';
import Article from './components/BasicComponents/Article/Article';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './components/BasicComponents/Result';
import ScriptTag from 'react-script-tag'
import { Helmet } from 'react-helmet';
import ReactGA4 from "react-ga4";
import AuthPage from './components/TestTypes/Post2021/Users/AuthPage';
import LoginPage from './components/TestTypes/Post2021/Users/LoginPage';
import RegisterPage from './components/TestTypes/Post2021/Users/RegisterPage';
import AuthPage2022 from './components/TestTypes/Post2022/Users/AuthPage';
import Auth from './hoc/auth';
import Acrostic from './components/TestTypes/Acrostic';
import FactPok from './components/TestTypes/FactPok/FactPok';
import FortuneCookie from './components/TestTypes/FortuneCookie/FortuneCookie';
import TodayLuck from './components/TestTypes/Saju/TodayLuck';
import TodayLuckResult from './components/TestTypes/Saju/TodayLuckResult';
import TwoSplitedIntro from './components/TestTypes/TwoSplitedIntro/TwoSplitedIntro';
import LifetimeSaju from './components/TestTypes/Saju/LifetimeSaju';
import LifetimeSajuResult from './components/TestTypes/Saju/LifetimeSajuResult';
import LifeInterpreting from './components/TestTypes/Saju/LifeInterpreting';
import LifeInterpretingResult from './components/TestTypes/Saju/LifeInterpretingResult';
import Privacy from './components/BasicComponents/Privacy';
import { withCookies } from 'react-cookie';
import { onClickLogin, verifyAccessToken, getRefreshedToken } from './tools/tools';
import { onCreateUser } from './tools/aiImgTools';
import MyPage from './components/BasicComponents/Users/MyPage';

class App extends Component {
  constructor(props){
    super(props)
    const _sharable_url = window.location.href;
    let i = 0;
    let _all_tests_url = [];
    while (i<TESTS.length) {
      _all_tests_url.push('/'+TESTS[i].info.mainUrl+'/');
      i = i + 1;
    }
    let j = 0;
    let _all_tests_result_url = [];
    while (j<_all_tests_url.length){
      _all_tests_result_url.push(_all_tests_url[j]+'result/')
      j = j + 1;
    }
    let _final_render_routes = [];
    var k = 0;

    while(k<TESTS.length){
      var l=  0;
      while(l<TESTS[k].results.length){
        _final_render_routes.push([TESTS[k].results[l].query, TESTS[k].info.mainUrl])
        l = l + 1;
      }
      k = k + 1;
    }

    let m = 0;
    let _all_articles_url = [];
    while (m < ARTICLES.length) {
      _all_articles_url.push('/'+ARTICLES[m].mainUrl+'/');
      m = m + 1;
    }

    let _pct_test = TESTS.filter((test) => test.info.scoreType === 'percentageMBTI');

    this.state = {
      result_route:'result/',
      all_tests_url:_all_tests_url,
      all_articles_url:_all_articles_url,
      all_tests_result_url:_all_tests_result_url,
      final_render_routes:_final_render_routes,
      sharable_url:_sharable_url,
      pct_test: _pct_test,
      ppl_list:['personalTaro', 'jaetech', 'wealthluck'],
      lang_list:['Kor', 'JP', 'Eng', 'CN', 'Ger', 'ES', 'IT', 'Rus' ,'Others'],
      category_list:['saju', 'characteristic', 'love', 'ai', 'etc'],
      isLoggedIn: false,
      aiImgGenLists: [
          { type: 'fifteenTheme', langs: [
            {route:'', title:'케이테스트 AI 피프틴 테마', desc:'다양한 15가지 타입의 사진이 출력 됩니다'},
            {route:'Eng', title:'Ktest AI Fifteen Theme', desc:'Output 15 different types of photos'},
            {route:'JP', title:'KTEST AI Fifteen テーマ', desc:'様々な15種類の写真が出力されます。'}] },
          { type: 'colorFiveTheme', langs: [
            {route:'', title:'케이테스트 AI 컬러파이브 테마', desc:'5가지 컬러의 사진이 출력 됩니다'},
            {route:'Eng', title:'Ktest AI ColorFive Theme', desc:'Output 5 different types of photos'},
            {route:'JP', title:'KTEST AI ColorFive テーマ', desc:'様々な5種類の写真が出力されます。'}] },
          { type: 'magazineTheme', langs: [
            {route:'', title:'케이테스트 AI 매거진 테마', desc:'총 60장의 다양한 매거진 테마의 사진이 출력 됩니다'},
            {route:'Eng', title:'KTEST AI Magazine Theme', desc:'60 different magazine themed photos will be printed'},
            {route:'JP', title:'KTESTマガジンテーマ', desc:'計60枚の多様なマガジンテーマの写真が出力されます。'}] }
        ],
    }
    this.each_lang_renderer = this.each_lang_renderer.bind(this);
    this.lang_category_renderer = this.lang_category_renderer.bind(this);
    this.all_lang_renderer = this.all_lang_renderer.bind(this);
    this.mainMetaTagRenderer = this.mainMetaTagRenderer.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }
  
  componentDidUpdate() {
    // if only logged-In case -> USER DB check
    let parsedUrl = new URL(window.location.href);
    const accessToken = parsedUrl.searchParams.get("access_token");
    if(accessToken) {
      verifyAccessToken(accessToken)
      .then(res => {        
        // create user in KTEST USER DB
        onCreateUser(res.userId, res.email);
      });
    };
  };

  componentDidMount (){
    ReactGA4.initialize([
      {
        trackingId: "G-W3LQWJVJLX",
        gaOptions: {
          siteSpeedSampleRate: 100
        }
      }
    ]);

    // about Logged-In
    let parsedUrl = new URL(window.location.href);
    const accessToken = parsedUrl.searchParams.get("access_token");
    const refreshToken = parsedUrl.searchParams.get("refresh_token");
    const { cookies } = this.props;

    try {
      if (accessToken || refreshToken) {
        const accessTokenCookieAges = 60*60*2; // 2 Hours
        cookies.set('accessToken', accessToken, { path: '/', maxAge: accessTokenCookieAges, secure: true });
        const refreshTokenCookieAges = 60*60*24*60; // 60 Days
        cookies.set('refreshToken', refreshToken, { path: '/', maxAge: refreshTokenCookieAges, secure: true });

        this.setState({
          isLoggedIn: true,
        });
      } else if (cookies.get('accessToken')) {
        // accessToken validation (related to Expiration)
        verifyAccessToken(cookies.get('accessToken'))
        .then(res => {
          if(res) { // if valid -> isLoggedIn : true
            this.setState({
              isLoggedIn: true,
            });
          } else if (cookies.get('refreshToken')) { // else if expired & refreshToken exist -> refreshToken for new accessToken
            getRefreshedToken(cookies.get('refreshToken'))
            .then(res => {
              const accessTokenCookieAges = 60*60*2; // 2 Hours
              cookies.set('accessToken', res, { path: '/', maxAge: accessTokenCookieAges, secure: true });
              this.setState({
                isLoggedIn: true,
              });
            })
          }
        });
      } else if (cookies.get('refreshToken')) { // if only the refreshToken exist -> refreshToken for new accessToken
        getRefreshedToken(cookies.get('refreshToken'))
        .then(res => {
          const accessTokenCookieAges = 60*60*2; // 2 Hours
          cookies.set('accessToken', res, { path: '/', maxAge: accessTokenCookieAges, secure: true });
          this.setState({
            isLoggedIn: true,
          });
        })
      }
    } catch {
      alert("에러가 발생했습니다 ㅠㅠ");
      window.location.href = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    }

  }
  all_lang_renderer(){
    let i = 0;
    let _all_tests_url = [];
    while (i<TESTS.length) {
        _all_tests_url.push(['/'+TESTS[i].info.mainUrl+'/', TESTS[i].info.thumbImage, TESTS[i].info.mainTitle])
        i = i + 1;
    }
    return _all_tests_url;
  }
  each_lang_renderer(lang){
    let m = 0;
    let lang_route_list = [];
    if(lang === "Others") {
      while(m<TESTS.length){
        if((TESTS[m].info.lang !== "Kor") && (TESTS[m].info.lang !== "Eng") && (TESTS[m].info.lang !== "CN") && (TESTS[m].info.lang !== "JP") && (TESTS[m].info.lang !== "Ger") && (TESTS[m].info.lang !== "ES") && (TESTS[m].info.lang !== "Rus") && (TESTS[m].info.lang !== "")) {
          lang_route_list.push(['/'+TESTS[m].info.mainUrl+'/', TESTS[m].info.thumbImage, TESTS[m].info.mainTitle]);
        }
        m = m + 1;
      }
    } else {
      while(m<TESTS.length){
        if(TESTS[m].info.lang === lang) {
          lang_route_list.push(['/'+TESTS[m].info.mainUrl+'/', TESTS[m].info.thumbImage, TESTS[m].info.mainTitle]);
        }
        m = m + 1;
      }
    }
    return lang_route_list;
  }

  lang_category_renderer(lang, cat) {
    let m = 0;
    let lang_category_route_list = [];
    while(m < TESTS.length) {
      if(TESTS[m].info.lang === lang && TESTS[m].info.category === cat) {
        lang_category_route_list.push(['/'+TESTS[m].info.mainUrl+'/', TESTS[m].info.thumbImage, TESTS[m].info.mainTitle]);
      }
      m = m + 1;
    }
    return lang_category_route_list;
  }

  cpcBannerUpperScriptor(){
    if((this.state.sharable_url.includes("ktestone.com") || this.state.sharable_url.includes("localhost")) && !window.location.href.split('/').some(que => this.state.ppl_list.includes(que))) { // for blocking Adfit banner with page refreshing for PPL
      return(
        <Fragment>
          <ins className="kakao_ad_area" style={{display:"none"}}
          data-ad-unit    = "DAN-q3lQrzFnTNGEBQSA"
          data-ad-width   = "320"
          data-ad-height  = "100"></ins>
          <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
        </Fragment>
      )
    } else if(this.state.sharable_url.includes("https://kapable.github.io/")) {
      return(
        <Fragment>
          <ins className="kakao_ad_area" style={{display:"none"}}
          data-ad-unit    = "DAN-2heOjnHUdZLjBuFC"
          data-ad-width   = "320"
          data-ad-height  = "100"></ins>
          <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
        </Fragment>
      )
    } else if(this.state.sharable_url.includes("niair.xyz")) {
      return(
        <Fragment>
          <Helmet>
            <script data-ad-client="ca-pub-2382342018701919" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Helmet>
        </Fragment>
      )
    }
  }

  cpcBannerFooterScriptor(){
    if((this.state.sharable_url.includes("localhost") || this.state.sharable_url.includes("ktestone.com")) && !window.location.href.split('/').some(que => this.state.ppl_list.includes(que))) { // for blocking Adfit banner with page refreshing for PPL
      return(
        <Fragment>
          <ins className="kakao_ad_area" style={{display:"none"}}
          data-ad-unit    = "DAN-M3XcjSrV4BrUGCJG"
          data-ad-width   = "300"
          data-ad-height  = "250"></ins>
          <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
        </Fragment>
      )
    } else if(this.state.sharable_url.includes("https://kapable.github.io/")) {
      return(
        <Fragment>
          <ins className="kakao_ad_area" style={{display:"none"}}
          data-ad-unit    = "DAN-rgfAOJhp6Faz2JFX"
          data-ad-width   = "300"
          data-ad-height  = "250"></ins>
          <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
        </Fragment>
      )
    } else if(this.state.sharable_url.includes("niair.xyz")) {
      return(
        <Fragment>
          {/* 반응형 기본 */}
          <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-2382342018701919"
            data-ad-slot="8429103833"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </Fragment>
      )
    }
  }

  mainMetaTagRenderer(){
    let _kapable_meta = <meta name = "purpleads-verification" content = "67e5e9a6f3495f65f6b05cee"/>
    let _metaTag = <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>취향 분석 테스트 - 케이테스트</title>
                    <meta name="title" content="케이테스트 - 퍼스널 컬러 테스트 진단"/>
                    <meta name="description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트 진단, 퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러" data-react-helmet="true"/>
                    {this.state.sharable_url.includes("ktestone.com") ? null : _kapable_meta}
                    <link rel="main-url" href={window.location.href}/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://ktestone.com/"/>
                    <meta property="og:title" content="케이테스트 - 퍼스널 컬러 테스트 진단"/>
                    <meta property="og:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트 진단, 퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러"/>
                    <meta property="og:image" content="https://images.ktestone.com/default/main-header-2023.png"/>
                    <meta property="og:image:alt" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://ktestone.com/"/>
                    <meta property="twitter:title" content="케이테스트 - 퍼스널 컬러 테스트 진단"/>
                    <meta property="twitter:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트 진단, 퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러"/>
                    <meta property="twitter:image" content="https://images.ktestone.com/default/main-header-2023.png"/>
                    <meta property="twitter:image:alt" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트" />
                  </Helmet>
    
    return _metaTag
  }

  onClickLogout(){
    try {
      const { cookies } = this.props;
      cookies.remove('accessToken', { path: '/' });
      cookies.remove('refreshToken', { path: '/' });
      this.setState({
          isLoggedIn: false
      })
      window.location.href = window.location.protocol + "//" + window.location.host;
    } catch {
      alert("에러가 발생했습니다 ㅠㅠ");
      window.location.href = window.location.protocol + "//" + window.location.host;
    }
  }

  render() {
    return(
    <Router>
    <Fragment>

      {/* CPC Banner Upper */}
      {/* {this.cpcBannerUpperScriptor()} */}

      {/* <div id="optadATF" style={{"minHeight": "110px"}}></div> */}

      <Router basename='/kapable.github.io/'>
        <ScrollToTop>
          <Switch>
            <Route exact path="/myPage" component={() => <MyPage onClickLogout={this.onClickLogout} />} />

            {/* go to "HaGender" page */}
            <Route path="/haGender/" component={() => <TwoSplitedIntro test={"haGender"} lang={'Kor'} info={{ title: "하남자 하여자 테스트 - 남자편 | 여자편 - 케이테스트", subTitle: "나는 과연 몇% 확률로 하남자/하여자 일까? - 남자편 | 여자편 - 케이테스트" }} />} />

            {/* go to "CoupleCharacter" page */}
            <Route path="/coupleCharacter/" component={() => <TwoSplitedIntro test={"coupleCharacter"} lang={'Kor'} info={{ title: "커플 캐릭터 테스트 - 케이테스트", subTitle: "커플 캐릭터로 보는 나의 연애 성향은? - 커플 캐릭터 테스트 여자편 남자편 - 케이테스트" }} />} />
            <Route path="/coupleCharacterEng/" component={() => <TwoSplitedIntro test={"coupleCharacter"} lang={'Eng'} info={{ title: "Couple character test - Male | Female - KTEST", subTitle: "Your dating personality as couple character? - Male | Female - KTEST" }} />} />
            <Route path="/coupleCharacterCN/" component={() => <TwoSplitedIntro test={"coupleCharacter"} lang={'CN'} info={{ title: "情侣性格测试 - 女方,男方 - KTEST", subTitle: "以情侣类型看我在恋爱中的性格是？ - 女方,男方 - KTEST" }} />} />
            <Route path="/coupleCharacterJP/" component={() => <TwoSplitedIntro test={"coupleCharacter"} lang={'JP'} info={{ title: "カップルキャラクターテスト - 女方,男方 - KTEST", subTitle: "私が花びらだったら、果たしてどんな花びらだろう？ - 女方,男方 - KTEST" }} />} />
            <Route path="/coupleCharacterIT/" component={() => <TwoSplitedIntro test={"coupleCharacter"} lang={'IT'} info={{ title: "Test del carattere della coppia - KTEST", subTitle: "Quali sono le mie tendenze romantiche come personaggio di coppia? - KTEST" }} />} />

            {/* go to "LoveCharacter" page */}
            <Route path="/loveCharacter/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'Kor'} info={{ title: "연애 캐릭터 테스트 - 케이테스트", subTitle: "캐릭터로 보는 나의 연애 성향은? - 연애 캐릭터 테스트 남자편 여자편 - 케이테스트" }} />} />
            <Route path="/loveCharacterEng/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'Eng'} info={{ title: "Love Character Test - KTEST", subTitle: "What kind of my character is my love character? - Male | Love chracter test - male female boyfriend girlfriend - KTEST" }} />} />
            <Route path="/loveCharacterCN/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'CN'} info={{ title: "恋爱角色测试 - KTEST", subTitle: "我的爱情角色是什么样的角色？ | 恋爱角色测试 - 女方,男方 - KTEST" }} />} />
            <Route path="/loveCharacterGer/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'Ger'} info={{ title: "Beziehungstypen Test - KTEST", subTitle: "Was für ein Charakter ist mein Liebescharakter? | BeziehungstypenTest - Freund, Freundin - KTEST" }} />} />
            <Route path="/loveCharacterES/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'ES'} info={{ title: "Test de Personalidad en noviazgo. - KTEST", subTitle: "¿Cuál es mi inclinación a enamorarme como personaje? | para hombres, para mujeres - KTEST" }} />} />
            <Route path="/loveCharacterJP/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'JP'} info={{ title: "恋愛キャラクターテスト - KTEST", subTitle: "私の恋愛キャラクターはどんなキャラクターかな? - KTEST" }} />} />
            <Route path="/loveCharacterIT/" component={() => <TwoSplitedIntro test={"loveCharacter"} lang={'IT'} info={{ title: "Test sul carattere dell'amore - KTEST", subTitle: "Quali sono le mie tendenze romantiche come personaggio? - KTEST" }} />} />

            {/* go to "lifeInterpreting" page */}
            <Route path="/lifeInterpreting/" component={() => <LifeInterpreting />} exact/>
            <Route path="/lifeInterpreting/:query/" component={() => <LifeInterpretingResult />} />

            {/* go to "lifetimeSaju" page */}
            <Route path="/lifetimeSaju/" component={() => <LifetimeSaju />} exact/>
            <Route path="/lifetimeSaju/:query/" component={() => <LifetimeSajuResult />} />

            {/* go to "todayLuck" page */}
            <Route path="/todayLuck/" component={() => <TodayLuck />} exact/>
            <Route path="/todayLuck/:query/" component={() => <TodayLuckResult />} />

            {/* go to "FortuneCookie" page */}
            <Route path="/fortuneCookie/" component={() => <FortuneCookie />} />

            {/* go to "FactPok" page */}
            <Route path="/factPok/" component={() => <FactPok />} />

            {/* go to "Acroistic" page */}
            <Route path="/acrostic/" component={() => <Acrostic />} />

            {/* go to "POST 2022" page */}
            <Route path='/post2022/:username/postwrite/' component={() => <POSTWRITE2022 language={`Kor`}/>} />
            <Route path='/post2022/:username/' component={() => <POSTPOST2022 language={`Kor`}/>} />
            <Route path ='/post2022/' component={() => <POSTSTART2022 language={`Kor`}/>}/>

            {/* go to "POST 2021" page */}
            <Route path='/post2021/:username/postwrite/' component={() => <POSTWRITE language={`Kor`}/>} />
            <Route path='/post2021/:username/' component={() => <POSTPOST language={`Kor`}/>} />
            <Route path ='/post2021/' component={() => <POSTSTART language={`Kor`}/>}/>

            {/* go to `post2022Eng` page */}
            <Route path='/post2022Eng/:username/postwrite/' component={() => <POSTWRITE language={`Eng`}/>} />
            <Route path='/post2022Eng/:username/' component={() => <POSTPOST language={`Eng`}/>} />
            <Route path ='/post2022Eng/' component={() => <POSTSTART language={`Eng`}/>}/>

            {/* AI Image Gen page */}
            {/* {this.state.aiImgGenLists.map((concept) => (
              concept.langs.map((lang) => (
                <Route path={'/' + concept.type + lang.route} component={() => <MbtiImgGenT conceptType={concept.type} lang={lang} />} exact/>
              ))
            ))}
            {this.state.aiImgGenLists.map((concept) => (
              concept.langs.map((lang) => (
                <Route path={'/' + concept.type + lang.route + '/upload'} component={() => <MbtiImgGenUploadT conceptType={concept.type} lang={lang} />} exact/>
              ))
            ))}
            {this.state.aiImgGenLists.map((concept) => (
              concept.langs.map((lang) => (
                <Route path={'/' + concept.type + lang.route + '/complete'} component={() => <MbtiImgGenCompleteT conceptType={concept.type} lang={lang} />} exact/>
              ))
            ))}
            {this.state.aiImgGenLists.map((concept) => (
              concept.langs.map((lang) => (
                <Route path={'/' + concept.type + lang.route + '/check'} component={() => <MbtiImgGenCheckT conceptType={concept.type} lang={lang} />} exact/>
              ))
            ))} */}

            {/* "Main" page */}
            <Route path='/' exact>
                {/* meta tag form for all main page */}
                {this.mainMetaTagRenderer()}
                <MainPage all_tests_url={this.each_lang_renderer("Kor")} lang={'Kor'}/>
            </Route>

            {/* go to "Each langs Main" page */}
            {this.state.lang_list.map((lang)=>(
              <Route
                path={'/' + lang + '/'}
                component={() => <MainPage all_tests_url={this.each_lang_renderer(lang)} lang={lang}/>}
                key={lang}
                exact
              />
            ))}

            {this.state.lang_list.map((lang)=>(
              <Route
                path={'/kapable.github.io/' + lang + '/'}
                component={() => <MainPage all_tests_url={this.each_lang_renderer(lang)} lang={lang}/>}
                key={lang}
                exact
              />
            ))}

            {this.state.lang_list.map((lang) => (
              this.state.category_list.map((cat) => (
                <Route
                  path={'/'+lang+'/'+cat+'/'}
                  component={() => <MainPage all_tests_url={this.lang_category_renderer(lang, cat)} lang={lang} />}
                  key={`${lang}-${cat}`}
                  exact
                />
              ))
            ))}

            {this.state.lang_list.map((lang) => (
              this.state.category_list.map((cat) => (
                <Route
                  path={'/kapable.github.io/'+lang+'/'+cat+'/'}
                  component={() => <MainPage all_tests_url={this.lang_category_renderer(lang, cat)} lang={lang} />}
                  key={`${lang}-${cat}`}
                  exact
                />
              ))
            ))}

            {/* go to "Intro" page */}
            {this.state.all_tests_url.map((item)=>(
              <Route
                path={item}
                component={() => <Intro test={item.replaceAll('/','')}/>}
                key={item.replaceAll('/','')}
                exact
              />
            ))}

            {/* go to "Result to Start" page */}
            <Route path={this.state.all_tests_result_url} component={ResultToIntro} exact/>

            {/* go to "Each Result contents" page */}
            {this.state.final_render_routes.map((item)=>(
              <Route
                path={'/'+item[1]+'/'+this.state.result_route+item[0]}
                component={Result}
                key={item[1]+'_'+item[0]} exact/>
            ))}

            {/* go to "Article list" page */}
            <Route path={'/blog/'} component={ArticleList} exact/>

            {/* go to "Article" page */}
            {ARTICLES.map((item)=>(
              <Route
                path={"/blog/" + item.testUrl + 'blog/'}
                component={() => <Article source={item}/>}
                key={item.testUrl}
                exact
              />
            ))}

            {/* go to User related pages */}
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path={`${"/auth/" || "/auth"}`} component={() => <AuthPage language={`Kor`}/>} />
            <Route exact path={`${"/postAuth2022/" || "/postAuth2022"}`} component={() => <AuthPage2022 />} />
          </Switch>
        </ScrollToTop>
      </Router>

      {/* CPC Banner footer */}
      {/* {this.cpcBannerFooterScriptor()} */}

      {/* footer */}
      {/* BIZ INFO */}
      <div className="intro-footer">
          <h5>광고 및 후원 문의<br></br>Advertising and Sponsorship Contact</h5>
          <p>soumy21@naver.com</p>
          <p className='mbtiImgGen-intro-biz-info-p'>
            주식회사 쿠키로켓 | 사업자등록번호 : 582-88-01697 | 대표 김정빈<br />
            주소 : 서울특별시 송파구 송파대로 409 4층<br />호스팅 서비스 : AWS | 통신판매업<br />
            유선번호 : 01084542518<br />
            신고번호 2020-경기하남-0706호
          </p>
          <p>Disclaimer:<br></br>All content is provided for fun and entertainment purposes only</p>
          <p>©주식회사 쿠키로켓 All Rights Reserved. 2023.</p>
          <p><a
            style={{color:"lightGrey"}}
            target="_blank"
            rel="noopener noreferrer"
            href={'https://ktestone.com/privacy'}
        >개인정보 처리방침</a></p>
      </div>
      {this.state.isLoggedIn ?
        <img onClick={() =>
          // this.onClickLogout()}
          {window.location.href = window.origin + '/myPage/'}}
          style={{cursor: "pointer", position: 'fixed', bottom: '20px', right: '20px'}} src='https://images.ktestone.com/default/logged-in-btn.png' alt='logged-in-btn'/> :
        <img style={{cursor: "pointer", position: 'fixed', bottom: '20px', right: '20px'}} onClick={() => onClickLogin(window.location)} src='https://images.ktestone.com/default/log-in-btn.png' alt='log-in-btn'/>}
    </Fragment>
    </Router>
    )
  }

}


export default withCookies(App);
