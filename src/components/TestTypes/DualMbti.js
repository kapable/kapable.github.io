import React, { Component, Fragment } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';

class DualMbti extends Component {
    constructor(props){
        super(props)
        this.state = {
            myColor:'',
            yourColor:'',
            myMBTI:'',
            yourMBTI:'',
            personal_colors:{"캑터스":"ESTJ", "로즈버드":"ESTP", "바닐라 아이스":"ESFJ", "스위트 핑크":"ESFP",
                            "네이비 피오니":"ENTJ", "웜 플레임":"ENTP", "다우니":"ENFJ", "댄덜라이언":"ENFP",
                            "페리글라스 블루":"ISTJ", "오션딥스":"ISTP", "오아시스":"ISFJ", "스프라우트":"ISFP",
                            "퀼트스":"INTJ", "세룰리안":"INTP", "앨리스 블루":"INFJ", "오션베이":"INFP"},
        }
    }

    personalColorTestRedirector(){
        window.open('https://ktestone.com/kapable.github.io/personalColor/')
    }
    renderColorOptions(who){
        let _colors = Object.keys(this.state.personal_colors)
        let _options = [<option key={"0-drop-"+who}>눌러서 선택</option>];
        for(let c=0;c<_colors.length;c++){
            _options.push(
                <option key={c+'-'+who}>{_colors[c]}</option>)
        }
        return(
            _options
        )

    }
    render (){
        return (
            <Fragment>
                <div className="dualColor-input">
                    <InputGroup className="dualColor-input-group">
                        <Form.Group className="dualColor-eachForm">
                            <Form.Label>내 컬러</Form.Label>
                            <Form.Control as="select" onChange={function(e){
                                e.preventDefault();
                                let _myColor = e.target.value
                                let _myMbti = this.state.personal_colors[_myColor]
                                this.setState({
                                    myColor:_myColor,
                                    myMBTI:_myMbti
                                })
                            }.bind(this)} value={this.state.myColor} key="myDualMBTI">
                                {this.renderColorOptions("my")}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="dualColor-eachForm">
                            <Form.Label>상대방 컬러</Form.Label>
                            <Form.Control as="select" onChange={function(e){
                                e.preventDefault();
                                let _yourColor = e.target.value
                                let _yourMbti = this.state.personal_colors[_yourColor]
                                this.setState({
                                    yourColor:_yourColor,
                                    yourMBTI:_yourMbti
                                })
                            }.bind(this)} value={this.state.yourColor} key="yourDualMBTI">
                                {this.renderColorOptions("your")}
                            </Form.Control>
                        </Form.Group>
                    </InputGroup>
                    <div>
                        <Button onClick={function(e) {
                            e.preventDefault();
                            if(this.state.myMBTI === '' || this.state.myMBTI === undefined){
                                alert("내 컬러를 선택해주세요!")
                            } else if (this.state.yourMBTI === '' || this.state.yourMBTI === undefined){
                                alert("상대방 컬러를 선택해주세요!")
                            } else {
                                let _final_result = this.state.myMBTI + this.state.yourMBTI
                                this.props.onChangeMode(_final_result, "loading");
                            }

                        }.bind(this)} key="dualMBTIBtn" className="dualMBTI-submit-btn" variant="secondary">➥ 궁합 결과 보러가기</Button>
                    </div>
                    <p>내 퍼스널 컬러를 모른다면?</p>
                    <Button
                        className="to-personalColor-test-btn"
                        onClick={this.personalColorTestRedirector}
                        variant="secondary"
                        >내 퍼스널 컬러 테스트 하러가기</Button>
                </div>
            </Fragment>
        )
    }
}

export default DualMbti;
