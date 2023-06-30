import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';

function RegisterPage(props) {
    const lang = props.language;
    const [nickname, setNickname] = useState("");
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const api_url = 'https://api.ktestone.com';

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
        ReactGA4.event({
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
            return alert("닉네임의 길이는 20자 이하여야 합니다.\nThe length of Nickname must be under 20 characters.")
        }

        if(password.length < 8) {
            return alert("비밀번호의 길이는 여덟 글자 이상이어야 합니다.\nThe length of password must be over 8 digits.")
        }

        if(password !== confirmPassword) {
            return alert("비밀번호와 일치하지 않습니다.\nFail to confirm password.")
        }

        let body = {
            "id": id,
            "password": password,
            "nickname": nickname
        }

        await axios.post(api_url+`/auth/join`, body)
        .then(() => {
            alert("회원가입에 성공했습니다!!!");
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
    if (lang === `Eng`) {
        return (
            <div className="register-page-bg-div">
                <br></br>
                <h2 className='send-to-me-title'>Send me Your letter!</h2>
                    <div className='register-page-btn-div'>
                        <button className="register-page-rgbtn" style={{'color':'black'}}>Register</button>
                        <button onClick={() => {props.setMode("login")}} className="register-page-loginbtn" style={{'color':'black'}}>Login</button>
                    </div>
                    <form
                        className='register-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <p className='register-page-memo-comment'>*You can't find the ID and password that you signed up for once, so please write it down!</p>
                        <label>Nickname</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={onNicknameHandler}
                            className='register-nickname-form'
                            placeholder='Under 20 characters'
                            required
                        />
                        <label>ID</label>
                        <input
                            type="text"
                            value={id}
                            onChange={onIDHandler}
                            className='register-nickname-form'
                            placeholder='Eng lower/upper, Num 4~20 digits'
                            pattern='[A-Za-z0-9+]{4,12}'
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={onPasswordHandler}
                            className='register-password-form'
                            placeholder='Over 8 digits'
                            required
                        />
                        <label>Password confirm</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={onConfirmPasswordHandler}
                            className='register-passwordConfirm-form'
                            placeholder='Insert once more'
                            required
                        />
                        <button type="submit" className="register-submit-btn">
                            Register
                        </button>
                    </form>
                    <p className='name-footer'>©Cookie Rocket</p>
                </div>
        )
    } else {
        return (
            <div className="register-page-bg-div">
                <br></br>
                <h2 className='send-to-me-title'>나에게 편지를 보내줘!</h2>
                    <div className='register-page-btn-div'>
                        <button className="register-page-rgbtn" style={{'color':'black'}}>회원가입</button>
                        <button onClick={() => {props.setMode("login")}} className="register-page-loginbtn" style={{'color':'black'}}>로그인</button>
                    </div>
                    <form
                        className='register-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <p className='register-page-memo-comment'>* 한번 가입한 아이디와 비밀번호는 다시 찾기가<br></br>불가능하니 꼭 메모해주세요!</p>
                        <label>닉네임</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={onNicknameHandler}
                            className='register-nickname-form'
                            placeholder='20자 이하'
                            required
                        />
                        <label>아이디</label>
                        <input
                            type="text"
                            value={id}
                            onChange={onIDHandler}
                            className='register-nickname-form'
                            placeholder='영문 소문자, 숫자4~20자'
                            pattern='[A-Za-z0-9+]{4,12}'
                            required
                        />
                        <label>비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={onPasswordHandler}
                            className='register-password-form'
                            placeholder='8자 이상 입력해주세요'
                            required
                        />
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={onConfirmPasswordHandler}
                            className='register-passwordConfirm-form'
                            placeholder='한번 더 입력해주세요'
                            required
                        />
                        <button type="submit" className="register-submit-btn">
                            회원가입
                        </button>
                    </form>
                    <p className='name-footer'>©Cookie Rocket</p>
                </div>
        )
    }
    
}

export default withRouter(RegisterPage);
