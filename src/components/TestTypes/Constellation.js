import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap';

function Constellation(props) {
    const [month, setmonth] = useState("월(ex. 12)")
    const [day, setday] = useState("일(ex. 31)")

    function constellationCalc(e) {
        e.preventDefault();
        if((month !== "월(ex. 12)") && (day !== "일(ex. 31)") && (month !== 0) && (day !== 0)) {
            // Aries : 1 / Taurus : 2 / Gemini : 3 / Cancer : 4 / Leo : 5 / Virgo : 6
            // Libra : 7 / Scorpio : 8 / Sagittarius : 9 / Capricorn : 10 / Aquarius : 11 / Pisces : 12
            let day_array = [19, 18, 20, 19, 20, 21, 22, 22, 23, 22, 22, 24]
            let mon = new Array(12);
            for (let i=0; i < mon.length; i++) {
                if(month === (i+1)) {
                    if((day >= 1) && (day <= day_array[i])) {
                        if(month + 9 > 12) {
                            props.onChangeMode(month + 9 - 12, "loading");
                        } else {
                            props.onChangeMode(month + 9, "loading");
                        }
                    } else if ((day >= 1) && (day >= day_array[i])) {
                        if(month + 10 > 12) {
                            props.onChangeMode(month + 10 - 12, "loading");
                        } else {
                            props.onChangeMode(month + 10, "loading");
                        }
                    }
                }
            }
        } else {
            alert("생년월일을 정확히 입력해주세요!");
        }
    }

    return (
        <Fragment>
            <div className="birth-input">
                <h3 className="birth-title">생일을 입력해보세요!</h3>
                <input onChange={function(e) {
                        e.preventDefault();
                        let _month = 0;
                        if (Number(e.target.value.slice(0, 2)) < 13){
                            _month = e.target.value.slice(0, 2);
                        } else {
                            _month = 12;
                        }
                        _month = parseInt(_month)
                        setmonth(_month)
                    }} value={month} pattern="[0-9]*" type="number" placeholder="월(ex. 12)" min={0} max={12} maxLength="2" className="birthCalcMonth" key="birthCalcMonth"/>
                <input onChange={function(e) {
                        e.preventDefault();
                        let _day = 0;
                        if (Number(e.target.value.slice(0, 2)) < 32){
                            _day = e.target.value.slice(0, 2);  
                        } else {
                            _day = 31;
                        }
                        _day = parseInt(_day)
                        setday(_day)
                    }} value={day} pattern="[0-9]*" type="number" placeholder="일(ex. 31)" min={0} max={31} maxLength="2" className="birthCalcDay" key="birthCalcDay"/>
                <div>
                    <Button onClick={constellationCalc} key="birthCalcBtn" className="birthday-submit-btn" variant="secondary">➥ 내 별자리 알아보기 🌟</Button>
                </div>
            <p className="private-info-desc" >개인정보는 테스트를 위한 용도로만 사용되며, <br></br> 사용 후 바로 폐기됩니다.</p>
            </div>
        </Fragment>
    )
}

export default Constellation;
