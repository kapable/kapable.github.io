import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

function RegisterPage(props) {
    const [nickname, setNickname] = useState("");
    const [id, setID] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const api_url = 'https://api.ktestone.com';
    
    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    function onNicknameHandler(e) {
        e.preventDefault();
        setNickname(e.target.value);
    }

    function onIDHandler(e) {
        e.preventDefault();
        setID(e.target.value);
    }

    function onEmailHandler(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function onPhoneNumberHandler(e) {
        e.preventDefault();
        
        setPhoneNumber(
            e.target.value
            .replace(/[^0-9]/, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
        );
    }

    function onPasswordHandler(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function onConfirmPasswordHandler(e) {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        if(nickname.length > 20) {
            return alert("닉네임의 길이는 20자 이하여야 합니다.")
        }

        if(password.length < 8) {
            return alert("비밀번호의 길이는 여덟 글자 이상이어야 합니다.")
        }

        if(password !== confirmPassword) {
            return alert("비밀번호와 일치하지 않습니다.")
        }

        let body = {
            "id": id,
            "password": password,
            "nickname": nickname,
            "email": email,
            "phone": phoneNumber
        }

        await axios.post(api_url+`/auth/join`, body)
        .then(() => {
            alert("회원가입에 성공했습니다!!!\n로그인 후 응모해주세요!!!");
            _eventSenderGA("Submitting", "Click User-Register Button", "register page");
            props.setMode("login");
        })
        .catch((err) => {
            if(err.response.data.errors[0].type === `unique violation`) {
                alert('이미 존재하는 아이디예요 ㅠㅠ');
            } else {
                alert("회원가입에 실패했습니다 ㅠㅠ");;
            }
        })
    }

    return (
        <div className="metapang-register-page-bg-div">
                    <div className='metapang-register-page-btn-div'>
                        <button onClick={() => {props.setMode("register")}} className="metapang-register-page-rgbtn" style={{'color':'black'}}>회원가입</button>
                        <button onClick={() => {props.setMode("login")}} className="metapang-register-page-loginbtn" style={{'color':'black'}}>로그인</button>
                    </div>
                    <form
                        className='metapang-register-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <p className='metapang-register-page-memo-comment'>* 한번 가입한 아이디와 비밀번호는 다시 찾기가<br></br>불가능하니 꼭 메모해주세요!</p>
                        <label>닉네임*</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={onNicknameHandler}
                            placeholder='20자 이하'
                            required
                        />
                        <label>아이디*</label>
                        <input
                            type="text"
                            value={id}
                            onChange={onIDHandler}
                            placeholder='영문 소문자, 숫자4~20자'
                            pattern='[A-Za-z0-9+]{4,12}'
                            required
                        />
                        <label>이메일*</label>
                        <input
                            type="email"
                            value={email}
                            onChange={onEmailHandler}
                            placeholder='metapang@metapang.com'
                            required
                        />
                        <label>연락처*</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={onPhoneNumberHandler}
                            placeholder='ex) 01012345678'
                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                            maxLength={13}
                            required
                        />
                        <label>비밀번호*</label>
                        <input
                            type="password"
                            value={password}
                            onChange={onPasswordHandler}
                            placeholder='8자 이상 입력해주세요'
                            required
                        />
                        <label>비밀번호 확인*</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={onConfirmPasswordHandler}
                            placeholder='한번 더 입력해주세요'
                            required
                        />
                        <button type="submit" className="metapang-register-submit-btn">
                            회원가입
                        </button>
                    </form>
                </div>
    );
}

export default withRouter(RegisterPage);
