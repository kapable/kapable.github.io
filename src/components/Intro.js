import React, { Component, Fragment } from 'react';
import Quiz from './Quiz'
import Result from './Result'
import Loading from './Loading'
import BirthdayCalc from './BirthdayCalc'
import TESTS from '../api/TESTS'
import { BrowserRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Typist from 'react-typist';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Helmet } from 'react-helmet';
import COPYBTN from '../api/DefaultImg/test-intro-copy-link-btn.png';
import BACKBTN from '../api/DefaultImg/test-intro-other-tests-btn.png';

class Intro extends Component {
    constructor(props){
        super(props)
        let _current_test = [];
        let i = 0;
        while (i<TESTS.length) {
            if(TESTS[i].info.mainUrl === this.props.test){
                _current_test = TESTS[i]
                break
            }
            i = i + 1
        }
        // create answer option object for counting each question's answer
        var _answer_type_obj = {};
        var j = 0;
        for(j=0;j<_current_test.questions[0].answers.length;j++) {
            _answer_type_obj[_current_test.questions[0].answers[j].type] = 0;
        };

        // get Full Today
        let today = new Date();
        // let year = String(today.getFullYear()).slice(-2);
        let month = String(today.getMonth() + 1)//.padStart(2, '0');
        let date = String(today.getDate()).padStart(2, '0');
        let hour = String(today.getHours()).padStart(2, '0');
        let minute = String(today.getMinutes()).padStart(2, '0');
        
        this.state = {
            mode:'intro',
            current_test:_current_test,
            qAndA:_current_test.questions,
            scoreType:_current_test.info.scoreType,
            answer_type_obj:_answer_type_obj, // < ------------- for calculating type += 1
            quizNumber:0,
            counted_score:0, // < ------------- for calculating scores
            result_url:'/result/',
            quiz_url:window.location.href,
            participants:Number(month+date+hour+minute).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        }
        this._onStartButtonClick = this._onStartButtonClick.bind(this);
        this._onMainButtonClick = this._onMainButtonClick.bind(this);
    }
    _onStartButtonClick(){
        this.setState({
            mode:'quiz'
        })
    }

    _onMainButtonClick(){
        this.setState({
            mode:'main'
        })
    }

    introPageRender(){
        
        let _mainTitle = this.state.current_test.info.mainTitle;
        let _subTitle = this.state.current_test.info.subTitle;
        let _thumbImage = this.state.current_test.info.mainImage;
        
        return (
            <div className="intro container">
                <img
                    className="intro-main-img"
                    onClick={this._onStartButtonClick}
                    src={_thumbImage}
                    alt={_mainTitle + '|' + _subTitle}/>
                <Typist className="start-btn-participants">
                    현재까지 총 {this.state.participants}명이 참여했어요.
                </Typist>
                
                <div className="test-intro-with-friend">
                    <CopyToClipboard text={this.state.quiz_url}>
                        <Button className="test-intro-with-friend-btn">
                            <img 
                                src={COPYBTN}
                                className="test-intro-with-friend-img"
                                onClick={function(){alert("링크가 복사됐어요!")}}
                                alt="테스트 링크 복사"/>
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className="test-intro-to-main">
                    <img
                        className="test-intro-to-main-img"
                        src={BACKBTN}
                        onClick={this._onMainButtonClick}
                        alt="다른 테스트 하러 뒤로가기"/>
                </div>
            </div>
        );
    }

    resultCaculator(){
        if (this.state.scoreType === "numberScoring" || this.state.scoreType === "birthdayCalc"){
            let final_score = this.state.counted_score;
            for (let k = 0; k < this.state.current_test.results.length; k++){
                if(this.state.current_test.results[k].score_range.includes(final_score)){
                    return this.state.current_test.results[k];
                }
            }
        } else if (this.state.scoreType === "typeCounting") {
            let final_result = this.state.answer_type_obj;
            let keys = Object.keys(final_result);
            let max = final_result[keys[0]];
            let max_keys = [];
            for (let z = 0 ; z < keys.length; z++) {
                let value = final_result[keys[z]];
                if (value > max) max = value
            }
            for (let key of keys) {
                if(final_result[key] === max) {
                    max_keys.push(key)
                }
            }
            for (let z=0;z<this.state.current_test.results.length;z++){
                if(max_keys[0] === this.state.current_test.results[z].type){
                    return this.state.current_test.results[z]
                }
            }
        } 
        
    }
    quizPageRender(){
        if(this.state.mode === "quiz"){
            // when the type is cummulative number scoring
            if (this.state.scoreType === "numberScoring") {
                let _page = <Quiz
                qAndA={this.state.qAndA}
                quizNum={this.state.quizNumber}
                scoreType={this.state.scoreType}
                onChangeMode={
                    function(_quizNum, _score, _mode) {
                    // e.preventDefault();
                    let _scores = this.state.counted_score + Number(_score)
                    this.setState({
                        quizNumber:_quizNum,
                        counted_score:_scores,
                        mode:_mode
                    })
                }.bind(this)}></Quiz>
                return(
                    _page
                ) 
            // when the type is each type counting
            } else if (this.state.scoreType === "typeCounting") {
                let _page = <Quiz
                qAndA={this.state.qAndA}
                quizNum={this.state.quizNumber}
                scoreType={this.state.scoreType}
                onChangeMode={
                    function(_quizNum, _answer, _mode) {
                    var _answer_obj = Object.assign({}, this.state.answer_type_obj);
                    _answer_obj[_answer] = _answer_obj[_answer] + 1;
                    this.setState({
                        quizNumber:_quizNum,
                        answer_type_obj:_answer_obj,
                        mode:_mode
                    })
                }.bind(this)}></Quiz>
                return _page
            } else if (this.state.scoreType === "birthdayCalc"){
                let _page = <BirthdayCalc
                onChangeMode={
                    function(_final_result, _mode) {
                    this.setState({
                        counted_score:_final_result,
                        mode:_mode
                    })
                }.bind(this)}></BirthdayCalc>
                return _page
            }
            return this._page
        } 
    }

    lodingPageRender(){
        return(
            <div className="loading-upper">
                <Loading />
                {setTimeout(function(){
                    this.setState({mode:"result"})
                }.bind(this), 4700)}
            </div>
        )
    }

    resultPageRender(){
        // go to result page
        let result_contents = this.resultCaculator();
        let final_score_query = result_contents.query // <----------------query export
        
        return(
            <Router basename={'/kapable.github.io/'+this.state.current_test.info.mainUrl}>
                <Route path={this.state.result_url+final_score_query} component={Result}/>
                <Redirect to={this.state.result_url+final_score_query} />
            </Router>
        )   
    }

    pageRenderer(){
        let _page = []
        if(this.state.mode === "intro") {
            _page = this.introPageRender()
        } else if (this.state.mode === "quiz") {
            _page =  this.quizPageRender()
        } else if (this.state.mode === "main") {
            _page = this.props.history.push('/')
        } else if (this.state.mode === "loading") {
            _page = this.lodingPageRender()
        } else if (this.state.mode === "result") {
            _page = this.resultPageRender()
        }
        return _page
    }
    
    render(){
        return (
            <Fragment>
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>{this.state.current_test.info.mainTitle}-K테스트</title>
                    <meta name="title" content={this.state.current_test.info.mainTitle+'-K테스트'}/>
                    <meta name="description" content={this.state.current_test.info.subTitle} data-react-helmet="true"/>
                    <link rel="main-url" href={this.state.quiz_url}/>
                    
                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={this.state.quiz_url}/>
                    <meta property="og:title" content={this.state.current_test.info.mainTitle}/>
                    <meta property="og:description" content={this.state.current_test.info.subTitle}/>
                    <meta property="og:image" content={this.state.current_test.info.mainImage}/>
                    <meta property="og:image:alt" content={this.state.current_test.info.mainTitle} />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={this.state.quiz_url}/>
                    <meta property="twitter:title" content={this.state.current_test.info.mainTitle}/>
                    <meta property="twitter:description" content={this.state.current_test.info.subTitle}/>
                    <meta property="twitter:image" content={this.state.current_test.info.mainImage}/>
                    <meta property="twitter:image:alt" content={this.state.current_test.info.mainTitle} />
                </Helmet>
                {this.pageRenderer()}
            </Fragment>
        );
    }
}

export default withRouter(Intro);