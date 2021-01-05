import React, { Component } from 'react';
import Intro from './Intro'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class ResultToIntro extends Component {
    constructor(props){
        super(props)
        this.state = {
            mode:"result",
            test_main_url:'/relationtype/',
        }
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this)
    }
    _onBackToStartButtonClick(){
        this.setState({
            mode:"intro"
        })
    }
    introPageRender(){
        return(
            <Router basename="/personality_test_app/">
                <Switch>
                    <Route path={this.state.test_main_url} component={Intro} exact/>
                    <Redirect to={this.state.test_main_url} />
                </Switch>
            </Router>
        )
    }
    defaultGuidePageRender(){
        return(
            <div className='guide-div'>
                <div className="guide-desc">
                    아래 버튼을 눌러 연애 심리 테스트를 해보세요!
                </div>
                <div className="guide-re-test-btn">
                    <Button onClick={this._onBackToStartButtonClick} className="retest-btn" variant="dark">테스트 다시하기</Button>
                </div>
            </div>
            
        )
    }
    render(){
        return(
            <div>
                {this.state.mode === 'result' ? this.defaultGuidePageRender() : this.introPageRender()}
            </div>
        )
    }
}

export default ResultToIntro;