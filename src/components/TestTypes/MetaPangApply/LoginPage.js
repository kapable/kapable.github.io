import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

function LoginPage(props) {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const api_url = 'https://api.ktestone.com';

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

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
                props.setMode("logined");
                props.setTok(response.data.accessToken);
            })
        })
        .catch(() => {
            alert('로그인에 실패했습니다!');
        });
    }

    return (
        <div className="metapang-login-page-bg-div">
            <div className='metapang-register-page-btn-div'>
                <button onClick={() => {props.setMode("register")}} className="metapang-login-page-rgbtn" style={{'color':'black'}}>회원가입</button>
                <button onClick={() => {props.setMode("login")}} className="metapang-login-page-loginbtn" style={{'color':'black'}}>로그인</button>
            </div>
            
            <form
                className='metapang-register-submit-form'
                onSubmit={onSubmitHandler}
            >
                <label>아이디</label>
                <input
                    type="text"
                    value={id}
                    onChange={onIDHandler}
                    placeholder='영문 소문자, 숫자4~20자'
                    pattern='[A-Za-z0-9+]{4,12}'
                    required
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordHandler}
                    placeholder='8자 이상 입력해주세요'
                    required
                />
                <button type="submit" className="metapang-login-submit-btn">
                    로그인
                </button>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);
