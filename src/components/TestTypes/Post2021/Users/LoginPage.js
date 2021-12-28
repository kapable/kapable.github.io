import React, { useState } from 'react';
import axios from 'axios';

function LoginPage(props) {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const api_url = 'https://api.ktestone.com';

    function onIDHandler(e) {
        e.preventDefault();
        setID(e.target.value);
    }

    function onPasswordHandler(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        let body = {
            id:id,
            password: password
        }

        // let header = {headers: {
        //     client_id: 'ktest',
        //     client_secret: 'ktest'
        // }}

        const response = await axios.get(api_url+'/auth/me?client_id=ktest', body)
        console.log(response);

    }
    
    return (
        <div>
                <h1>나에게 편지를 보내줘!</h1>
                <button onClick={() => {props.setMode("register")}}>회원가입</button>
                <form
                    className='register-submit-form'
                    onSubmit={onSubmitHandler}
                >
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
                    <button type="submit" className="register-submit-btn">
                        로그인
                    </button>
                </form>
            </div>
    )
        
}

export default LoginPage
