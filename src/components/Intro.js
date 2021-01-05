import React, { Component, Fragment } from 'react';
import Quiz from './Quiz'
import Result from './Result'
import Loading from './Loading'
import TESTS from '../api/TESTS'
import Logo from '../k_test_logo.png'
import { BrowserRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Typist from 'react-typist';

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
        }
        this._onStartButtonClick = this._onStartButtonClick.bind(this);
    }

    _onStartButtonClick(){
        this.setState({
            mode:'quiz'
        })
    }

    introPageRender(){
        
        let _mainTitle = this.state.current_test.info.mainTitle;
        let _subTitle = this.state.current_test.info.subTitle;
        
        return (
            <div className="intro container">
                <img className='logo-img' src={Logo} alt="rea"/>
                <h1 className='title'>{_mainTitle}</h1>  
                <h5 className='sub-title'>{_subTitle}</h5>
                <div className='btn-positioner'></div>
                <Typist className="start-btn-participants">
                    현재 총 1,402,052명이 참여했어요.
                </Typist>
                <div className="start-btn-div">
                    <Button
                        onClick={this._onStartButtonClick}
                        variant="dark"
                        size="lg"
                        className="start-btn"
                        bsPrefix="btn"
                    >시작하기
                    </Button>
                </div>
            </div>
        );
    }

    resultCaculator(){
        if (this.state.scoreType === "numberScoring"){
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
            } else {
                // do nothing yet but exception handling 
            }
            return this._page
            
        } else if(this.state.mode === "loading"){
            return(
                <div className="loading-upper">
                    <Loading />
                    {setTimeout(function(){
                        this.setState({mode:"result"})
                    }.bind(this), 2700)}
                </div>
            )
        } else if(this.state.mode === "result"){
            // go to result page
            let result_contents = this.resultCaculator();
            let final_score_query = result_contents.query // <----------------query export
            
            return(
                <Router basename={"/personality_test_app/"+this.state.current_test.info.mainUrl}>
                    <Route path={this.state.result_url+final_score_query} component={Result}/>
                    <Redirect to={this.state.result_url+final_score_query} />
                    {/* <Result result={result_contents}/> */}
                </Router>
            )   
        }
    }
    
    render(){
        return (
            <Fragment>
                {this.state.mode === "intro" ? this.introPageRender() : this.quizPageRender()}
            </Fragment>
        );
    }
}

export default withRouter(Intro);