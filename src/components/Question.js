import React, { Component } from 'react';

class Question extends Component {
    render(){
        return(
            <div className="question">
                <h6 className="question-p">{this.props.question}</h6>
            </div>
        );
    }
}

export default Question;