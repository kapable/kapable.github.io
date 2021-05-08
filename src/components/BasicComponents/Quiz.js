import React, { Component, Fragment } from 'react';
import QuestionCount from './QuestionCount'
import Question from './Question'

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizCount:0,
        }
    }
    // the function below is for option randomize
    arrayShuffler(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
          
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    renderImgAnswerOptions(){
        let qAndA = this.props.qAndA[this.props.quizNum];
        let qAndAImg = qAndA.questionImage
        if(this.props.scoreType === "numberScoringImg" && qAndA.questionImage !== ''){
            return(
                <div>
                    <img src={qAndAImg} className='answer-option-img' alt={qAndA.question} />
                </div>
            )
        }
    }
    renderAnswerOptions(){
        let qAndA = this.props.qAndA[this.props.quizNum];
        var _questions = [];
        var i = 0;
        var nextQuizNum = this.props.quizNum + 1;
        while(i < qAndA.answers.length){
            // when the type is cummulative number scoring
            if(this.props.scoreType === "numberScoring" || this.props.scoreType === "numberScoringImg"){
                _questions.push(
                    <button
                        key={this.props.quizNum-i}
                        value={qAndA.answers[i].score} 
                        onClick={function(e) {
                            e.preventDefault();
                            if(this.props.quizNum === this.props.qAndA.length-1){
                                this.props.onChangeMode(nextQuizNum, e.target.value, "loading"); //result
                            } else {
                                this.setState({
                                    quizCount:this.state.quizCount+1 // for Quiz Counting => QuestionCount.js
                                })
                                this.props.onChangeMode(nextQuizNum, e.target.value, "quiz");
                            }
                        }.bind(this)}
                        variant="outline-dark" 
                        size="lg"
                        className="option-btn"
                    >{qAndA.answers[i].content}</button>)
            // when the type is each type counting
            } else if (this.props.scoreType === "typeCounting"){
                _questions.push(
                    <button
                        key={this.props.quizNum-i}
                        value={qAndA.answers[i].type}
                        onClick={function(e) {
                            e.preventDefault();
                            if(this.props.quizNum === this.props.qAndA.length-1){
                                this.props.onChangeMode(nextQuizNum, e.target.value, "loading"); //result
                            } else {
                                this.setState({
                                    quizCount:this.state.quizCount+1 // for Quiz Counting => QuestionCount.js
                                })
                                this.props.onChangeMode(nextQuizNum, e.target.value, "quiz");
                            }
                        }.bind(this)}
                        variant="outline-dark" 
                        size="lg"
                        className="option-btn"
                    >{qAndA.answers[i].content}</button>)
            } else if (this.props.scoreType === "typeCountingMBTI"){
                _questions.push(
                    <button
                        key={this.props.quizNum-i}
                        value={qAndA.answers[i].type}
                        onClick={function(e) {
                            e.preventDefault();
                            if(this.props.quizNum === this.props.qAndA.length-1){
                                this.props.onChangeMode(nextQuizNum, e.target.value, "loading"); //result
                            } else {
                                this.setState({
                                    quizCount:this.state.quizCount+1 // for Quiz Counting => QuestionCount.js
                                })
                                this.props.onChangeMode(nextQuizNum, e.target.value, "quiz");
                            }
                        }.bind(this)}
                        // variant="outline-dark" 
                        size="lg"
                        className="option-btn"
                    >{qAndA.answers[i].content}</button>)
            } 
            i = i + 1;
        }
        _questions = this.arrayShuffler(_questions) // randomize answer option btn
        return(
            _questions
        )
    }
    render(){
        
        return(
            <Fragment>
                <Question question={this.props.qAndA[this.props.quizNum].question}></Question>
                {/* In case of Quiz with Image Options */}
                <Fragment>
                    {this.renderImgAnswerOptions()}
                </Fragment>
                <div className="option-btn-div">
                    {this.renderAnswerOptions()}
                </div>
                <QuestionCount totalCount={this.props.qAndA.length} quizCount={this.state.quizCount}></QuestionCount>
            </Fragment>
        );
    }
}

export default Quiz;