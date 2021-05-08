import React, { Component, Fragment } from 'react';
import MainPage from './components/BasicComponents/MainPage';
import Intro from './components/BasicComponents/Intro'
import ResultToIntro from './components/SubComponents/ResultToIntro'
import ScrollToTop from './components/SubComponents/ScrollToTop'
import TESTS from './api/TESTS'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './components/BasicComponents/Result';
import ScriptTag from 'react-script-tag'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';


class App extends Component {
  constructor(props){
    super(props)
    const _sharable_url = window.location.href;
    let i = 0;
    let _all_tests_url = [];
    while (i<TESTS.length) {
      _all_tests_url.push('/'+TESTS[i].info.mainUrl+'/')
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
    this.state = {
      result_route:'result/',
      all_tests_url:_all_tests_url,
      all_tests_result_url:_all_tests_result_url,
      final_render_routes:_final_render_routes,
      sharable_url:_sharable_url,
      ppl_list:['personalTaro']
    }
  }
  componentDidMount(){
    ReactGA.initialize('UA-186793588-1', {
      debug: false,
      gaOptions:{
        siteSpeedSampleRate: 100
      }
    });
    ReactGA.set({page:window.location.pathname+window.location.search})
    ReactGA.pageview(window.location.pathname+window.location.search);

    // if condition for Adsense domain
    if(this.state.sharable_url.includes("niair.xyz")){
      if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
  reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    var now = Date.now();
    var tenSec = 10 * 1000;
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) { window.location.reload(); } else {}
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

  render() {
    return(
    <Router>
    <Fragment>

      {this.reloadPage()}

      {/* CPC Banner Upper */}
      {this.cpcBannerUpperScriptor()}

      <div id="optadATF" style={{"minHeight": "110px"}}></div>

      <Router basename='/kapable.github.io/'>
        <ScrollToTop>
          <Switch>
            {/* "Main" page */}
            <Route path='/' exact>
                <Helmet>
                  {/* <!-- Primary Meta Tags --> */}
                  <title>취향 분석 테스트 - 케이테스트</title>
                  <meta name="title" content="케이테스트 - 퍼스널 컬러 테스트"/>
                  <meta name="description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트,퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러" data-react-helmet="true"/>
                  <link rel="main-url" href={window.location.href}/>

                  {/* <!-- Open Graph / Facebook --> */}
                  <meta property="og:type" content="website"/>
                  <meta property="og:url" content="https://ktestone.com/"/>
                  <meta property="og:title" content="케이테스트 - 퍼스널 컬러 테스트"/>
                  <meta property="og:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트,퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러"/>
                  <meta property="og:image" content="https://images.ktestone.com/default/main-header.png"/>
                  <meta property="og:image:alt" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트" />

                  {/* <!-- Twitter --> */}
                  <meta property="twitter:card" content="summary_large_image"/>
                  <meta property="twitter:url" content="https://ktestone.com/"/>
                  <meta property="twitter:title" content="케이테스트 - 퍼스널 컬러 테스트"/>
                  <meta property="twitter:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트,퍼스널컬러테스트 , 퍼스널컬러 궁합 테스트, 강아지로보는나테스트 , 심리테스트, 케이테스트, 색깔테스트, 퍼스널컬러"/>
                  <meta property="twitter:image" content="https://images.ktestone.com/default/main-header.png"/>
                  <meta property="twitter:image:alt" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트" />
                </Helmet>
                <MainPage/>
            </Route>

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
          </Switch>
        </ScrollToTop>
      </Router>

      {/* CPC Banner footer */}
      {this.cpcBannerFooterScriptor()}

      {/* footer */}
      <div className="intro-footer">
          <h5>광고 및 후원 문의<br></br>Advertising and Sponsorship Contact</h5>
          <p>soumy21@naver.com</p>
          <p>Disclaimer:<br></br>All content is provided for fun and entertainment purposes only</p>
          <p>©주식회사 위드썸컴퍼니 All Rights Reserved. 2021.</p>
      </div>
    </Fragment>
    </Router>
    )
  }

}


export default App;
