import React, { Component, Fragment } from 'react';

class StoryTelling extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizCount:0,
        }
    }
    renderStoryImg(){
        let qAndA = this.props.qAndA[this.props.quizNum];
        let nextQuizNum = this.props.quizNum + 1;
        return(
            <Fragment>
                <img
                    src={qAndA.answers[0].content}
                    alt={qAndA.answers.type}
                    className="storytelling-img"
                    onClick={function(e) {
                        e.preventDefault();
                        if(this.props.quizNum === this.props.qAndA.length-1){
                            this.props.onChangeMode(nextQuizNum, "loading");
                        } else {
                            this.setState({
                                quizCount:this.state.quizCount+1
                            })
                            this.props.onChangeMode(nextQuizNum, "quiz");
                        }
                    }.bind(this)}/>
            </Fragment>
        )
    }
    render(){
        return(
            <Fragment>
                {this.renderStoryImg()}
            </Fragment>
        )
    }
}

export default StoryTelling;