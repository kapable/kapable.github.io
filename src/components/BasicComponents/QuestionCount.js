import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

class QuestionCount extends Component {
    
    render(){
        return(
            <div className="question-progress">
                <div className='progress-bar' >
                    <ProgressBar
                        completed={this.props.quizCount / this.props.totalCount * 100 + 10}
                        isLabelVisible={false} baseBgColor='#fbf7f2' bgColor='#b70048'
                        height='10px' width='100%' transitionDuration='.3s'/>
                </div>
                <div className="question-count">
                    {this.props.quizCount+1} / {this.props.totalCount}
                </div>
            </div>
        );
    }
}

export default QuestionCount;