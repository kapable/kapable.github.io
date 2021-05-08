import React, { Component } from 'react';

class Question extends Component {
    render(){
        return(
            <div className="question">
                <h5 className="question-p">{this.props.question}</h5>
            </div>
        );
    }
}

export default Question;