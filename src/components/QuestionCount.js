import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class QuestionCount extends Component {
    
    render(){
        return(
            <div className="question-progress">
                <div className='progress-bar' >
                    <ProgressBar now={this.props.quizCount / this.props.totalCount * 100} variant="danger" />
                </div>
                <div className="question-count">
                    {this.props.quizCount+1} / {this.props.totalCount}
                </div>
            </div>
        );
    }
}

export default QuestionCount;