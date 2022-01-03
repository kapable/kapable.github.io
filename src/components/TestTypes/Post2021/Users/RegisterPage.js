import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../Post2021.css';

function RegisterPage(props) {
    const [nickname, setNickname] = useState("");
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const api_url = 'https://api.ktestone.com';

    const instance = axios.create({headers: {
        'Content-Type': 'application/json',
    },})

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

        if(nickname.length > 8) {
            return alert("닉네임의 길이는 8자 이하여야 합니다.")
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
            "nickname": nickname
        }

        await instance.post(api_url+`/auth/join`, body)
        .then(() => {
            alert("회원가입에 성공했습니다!!!");
            props.setMode("login");
        })
        .catch(() => {
            alert("회원가입에 실패했습니다 ㅠㅠ")
        })

    }
    return (
        <div className="register-page-bg-div" style={{'backgroundImage':`url('https://images.ktestone.com/PostImg/Background/background.png')`}}>
            <br></br>
            <h2 className='send-to-me-title'>나에게 편지를 보내줘!</h2>
                <div className='register-page-btn-div'>
                    <button className="register-page-rgbtn">회원가입</button>
                    <button onClick={() => {props.setMode("login")}} className="register-page-loginbtn">로그인</button>
                </div>
                <form
                    className='register-submit-form'
                    onSubmit={onSubmitHandler}
                >
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={onNicknameHandler}
                        className='register-nickname-form'
                        placeholder='8자 이하'
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
                <p className='name-footer'>©Coocie Rocket</p>
            </div>
    )
}

export default withRouter(RegisterPage);
