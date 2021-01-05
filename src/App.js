import React, { Component, Fragment } from 'react';
import MainPage from './components/MainPage';
import Intro from './components/Intro'
import ResultToIntro from './components/ResultToIntro'
import TESTS from './api/TESTS'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Result from './components/Result';

class App extends Component {
  constructor(props){
    super(props)
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
    }
  }
  // componentDidMount(){
  //   window.location.reload();
  // }

  reloadPage() { 
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    var now = Date.now(); 
    var tenSec = 10 * 1000;
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) { window.location.reload(); } else {}
  }

  render() {
    return(
    <Fragment>
      {this.reloadPage()}
      <Router basename="/personality_test_app/">
        <Switch>
          {/* "Main" page */}
          <Route path='/' exact>
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
      </Router>
      {/* footer */}
      <div className="intro-footer">
          <p>MAKER - 케이테스트</p>
          <h5>광고 및 후원 문의</h5>
          <p>skjoldenstore@gmail.com</p>
      </div>
    </Fragment>
    )
  }
  
}


export default withRouter(App);

// <<in package.json>>
// below just use github domain
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build"
// },

// below use custom domain
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "cname": "echo test.k-test.net > build/CNAME",
//   "nojekyll": "echo > build/.nojekyll",
//   "predeploy": "npm run build && npm run cname && npm run nojekyll",
//   "deploy": "gh-pages --add --dotfiles -d build"
// },