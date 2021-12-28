import React, { useState } from 'react';

function RegisterPage(props) {
    const [name, setName] = useState("");
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function onNameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
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

    function onSubmitHandler(e) {
        e.preventDefault();

        if(name.length > 8) {
            return alert("닉네임의 길이는 8자 이하여야 합니다.")
        }

        if(password.length < 8) {
            return alert("비밀번호의 길이는 여덟 글자 이상이어야 합니다.")
        }

        if(password !== confirmPassword) {
            return alert("비밀번호와 일치하지 않습니다.")
        }

        let body = {
            username: name,
            password: password
        }

    }
    return (
        <div>
                <h1>나에게 편지를 보내줘!</h1>
                <button onClick={() => {props.setMode("login")}}>로그인</button>
                <form
                    className='register-submit-form'
                    onSubmit={onSubmitHandler}
                >
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={name}
                        onChange={onNameHandler}
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
            </div>
    )
}

export default RegisterPage
