import React, { Component, Fragment } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class BirthdayCalc extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentYear:new Date().getFullYear(),
            year:"연(ex. 2000)",
            month:"월(ex. 12)",
            day:"일(ex. 31)",
        }
    }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    submitBtnHandler(){
        
    }
    render (){
        return (
            <Fragment>
                <div className="birth-input">
                    <h3 className="birth-title">생년월일을 입력해보세요!</h3>
                    <InputGroup >
                        <FormControl onChange={function(e) {
                            e.preventDefault();
                            let _year = 0;
                            if (Number(e.target.value.slice(0, 4)) < this.state.currentYear){
                                _year = e.target.value.slice(0, 4);
                            } else {
                                _year = this.state.currentYear;
                            }
                            this.setState({
                                year:_year
                            })
                        }.bind(this)} value={this.state.year} pattern="[0-9]*" error={this.value} type="number" placeholder="연(ex. 2000)" max={this.state.currentYear} maxLength="4" key="birthCalcYear"/>
                        <FormControl onChange={function(e) {
                            e.preventDefault();
                            let _month = 0;
                            if (Number(e.target.value.slice(0, 2)) < 13){
                                _month = e.target.value.slice(0, 2);
                            } else {
                                _month = 12;
                            }
                            this.setState({
                                month:_month
                            })
                        }.bind(this)} value={this.state.month} pattern="[0-9]*" type="number" placeholder="월(ex. 12)" max={12} maxLength="2" key="birthCalcMonth"/>
                        <FormControl onChange={function(e) {
                            e.preventDefault();
                            let _day = 0;
                            if (Number(e.target.value.slice(0, 2)) < 32){
                                _day = e.target.value.slice(0, 2);
                            } else {
                                _day = 31;
                            }
                            this.setState({
                                day:_day
                            })
                        }.bind(this)} value={this.state.day} pattern="[0-9]*" type="number" placeholder="일(ex. 31)" max={31} maxLength="2" key="birthCalcDay"/>
                    </InputGroup>
                    <div>
                        <Button onClick={function(e) {
                            if (this.state.year.length === 4 && (this.state.month.length === 1 || this.state.month.length === 2) && (this.state.day.length === 1 || this.state.day.length === 2)) {
                                e.preventDefault();
                                let _finalBirth = this.state.year+this.state.month+this.state.day;

                                let final_result = 0;
                                for(let j=0;j<_finalBirth.length;j++){
                                    final_result = final_result + Number(_finalBirth[j])
                                }

                                if(final_result.toString().length === 2) {
                                    _finalBirth = final_result.toString()
                                    final_result = Number(_finalBirth[0]) + Number(_finalBirth[1])
                                    if(final_result.toString().length === 2) {
                                        _finalBirth = final_result.toString()
                                        final_result = Number(_finalBirth[0]) + Number(_finalBirth[1])
                                    }
                                }
                                this.props.onChangeMode(final_result, "loading");
                            } else {
                                alert("생년월일을 정확히 입력해주세요!")
                            }
                            
                        }.bind(this)} key="birthCalcBtn" className="birthday-submit-btn" variant="secondary">➥ 내 탄생수 알아보기</Button>
                    </div>
                <p className="private-info-desc" >개인정보는 테스트를 위한 용도로만 사용되며, <br></br> 사용 후 바로 폐기됩니다.</p>
                </div>
            </Fragment>
        )
    }
}

export default BirthdayCalc;