import React, { Component } from 'react';

class Question extends Component {
    render(){
        return(
            <div className="question">
                <div id="optadnpm ATB" style={{"minHeight": "220px"}}></div>
                <h5 className="question-p">{this.props.question}</h5>
            </div>
        );
    }
}

export default Question;