import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

const LoginPage = (props) => {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const api_url = 'https://api.ktestone.com';
    const bgImgSrc = "https://images.ktestone.com/PostImg2022/Sign/sign_background.png";
    const buttonImgSrc = "https://images.ktestone.com/PostImg2022/Sign/signIn_button.png"

    const _eventSenderGA = (category, action, label) => {
        ReactGA4.event({
            category: category,
            action: action,
            label: label,
        });
    };

    const onIDHandler = useCallback((e) => {
        setID(e.target.value);
    }, []);

    const onPasswordHandler = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    async function onSubmitHandler(e) {
        e.preventDefault();
        await axios.post(api_url + '/auth/token',
        `grant_type=password&username=${id}&password=${password}&client_id=ktest&client_secret=ktest`,
        )
        .then(res => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            localStorage.setItem("access_token", res.data.accessToken);
        })
        .then(() => {
            _eventSenderGA("Submitting", "Click Log-in Button", "login page");
            axios.get(api_url + '/auth/me')
            .then(response => {
                props.history.push({
                    pathname:`/post2022/${encodeURIComponent(response.data.key)}/`,
                    state: response.data.accessToken
                });
            })
        })
        .catch(() => {
            alert('로그인에 실패했습니다!');
        });
    };

    return (
        <div className="post2022-login-page-bg-div">
            <img loading="lazy" src={bgImgSrc} alt='register-bg' className="post2022-register-page-bg-img"/>
            <div className='post2022-login-page-contents-div'>
                <div className='post2022-register-page-btn-div'>
                    <button onClick={() => {props.setMode("register")}} className="post2022-login-page-rgbtn" >회원가입</button>
                    <button onClick={() => {props.setMode("login")}} className="post2022-login-page-loginbtn" >로그인</button>
                </div>
                
                <form
                    className='post2022-register-submit-form'
                    onSubmit={onSubmitHandler}
                >
                    <label>아이디</label>
                    <input
                        type="text"
                        value={id}
                        onChange={onIDHandler}
                        className='post2022-register-nickname-form'
                        placeholder='영문 소문자, 숫자4~20자'
                        pattern='[A-Za-z0-9+]{4,12}'
                        required
                    />
                    <label>비밀번호</label>
                    <input
                        type="password"
                        value={password}
                        onChange={onPasswordHandler}
                        className='post2022-register-password-form'
                        placeholder='8자 이상 입력해주세요'
                        required
                    />
                    <button type="submit" className="post2022-login-submit-btn">
                        <img loading="lazy" src={buttonImgSrc} alt="submit" />
                    </button>
                </form>
            </div>
            <p className='post2022-name-footer'>©Coocie Rocket</p>
        </div>
    );
};

export default withRouter(LoginPage);