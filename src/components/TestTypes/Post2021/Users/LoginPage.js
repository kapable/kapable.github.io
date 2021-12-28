import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginPage(props) {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const api_url = 'https://api.ktestone.com';
    
    

    useEffect(() => {
        axios.post(api_url + '/auth/token',
            'grant_type=client_credentials&scope=all&client_id=ktest&client_secret=ktest')
            .then(function(res){
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            })
            .catch(err => {
                console.log(err);
            })
    }, [api_url])

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
            username: id,
            password: password
        }
        await axios.get(api_url+'/auth/me', body)
        .then(response => {
            axios.defaults.withCredentials = true;
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
        
        
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
