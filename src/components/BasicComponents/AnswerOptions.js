import React, { Component } from 'react';

class AnswerOptions extends Component {
    render(){
        return(
            <div className="answerOptions">
                <div>
                    {this.props.answers[0].content}
                    {/* <button>Option1</button>
                    <button>Option2</button>
                    <button>Option3</button>
                    <button>Option4</button> */}
                </div>
            </div>
        );
    }
}

export default AnswerOptions;