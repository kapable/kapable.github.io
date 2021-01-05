import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../api/TESTS'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Logo from '../k_test_logo.png'
import App from '../App'
import { Button, Card } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard'

class Result extends Component {
    constructor(props){
        super(props)
        const _sharable_url = window.location.href;
        const _current_url = _sharable_url.split('/')
        const _current_test = _current_url.reverse()[2]
        const _current_result = _current_url[0]
        this.state = {
            mode:"result",
            sharable_url:_sharable_url,
            current_url:_current_url,
            current_test:_current_test,
            current_result:_current_result,
        }
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this)
    }

    _onBackToStartButtonClick(){
        this.setState({
            mode:"intro"
        })
    }
    introPageRender(){

        const current_tests_path = '/' + this.state.current_test + '/';
        return(
            <Router basename="/personality_test_app/"> 
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
        let i = 0;
        while(i<TESTS.length){
            if(TESTS[i].info.mainUrl === this.state.current_test){
                let j = 0;
                while(j<TESTS[i].results.length){
                    if(TESTS[i].results[j].query === this.state.current_result){
                        final_type = TESTS[i].results[j].type
                        final_desc = TESTS[i].results[j].desc
                        img_src = TESTS[i].results[j].img_src
                        break
                    }
                    j = j + 1;
                }
                // break
            }
            i = i + 1;
        }

        // return final result option
        return (
            <Fragment>
                <Card className="result-card" bg="light">
                    <Card.Img variant='top' src={img_src} className='result-img' alt={final_type} />
                    <Card.Body className="result-p">
                        <Card.Text>{final_desc}</Card.Text>
                    </Card.Body>
                </Card>
            </Fragment>
                
        )
    }

    mainPageRender(){
        return(
            <Router basename="/personality_test_app/"> 
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
            <div className="result">
                <div className="result-header">
                    <img src={Logo} className="result-logo-image" alt="result_img"/>
                    <h5 className="result-title">당신의 성향은</h5>
                    <div className="result-value">
                        {this.resultRender()}
                    </div>
                </div>
                <div className="share">
                    <h5 className="share-title">친구에게 공유하기</h5>
                    <div className="share-btn">
                        <CopyToClipboard text={this.state.sharable_url}>
                            <Button 
                                variant="dark"
                                onClick={function(){alert("링크가 복사됐어요!")}}>🔗 링크 복사</Button>
                        </CopyToClipboard>
                    </div>
                    <div className="re-test-btn">
                        <Button onClick={this._onBackToStartButtonClick} className="retest-btn" variant="dark">⟲ 테스트 다시하기</Button>
                    </div>
                </div>
                <div className="back-to-main">
                    <Button
                        variant="dark"
                        onClick={function(e) {
                            e.preventDefault();
                            this.setState({
                                mode:"main"
                            })
                        }.bind(this)}
                        >⌂ 다른 테스트 하러가기</Button>
                </div>
            </div>
            
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
                {/* {this.state.mode === "result" ? this.resultPageRender() : this.introPageRender()} */}
            </div>
        );
    }
}

export default Result;