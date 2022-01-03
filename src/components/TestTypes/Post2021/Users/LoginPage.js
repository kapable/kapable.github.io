import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../Post2021.css';

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
        await axios.post(api_url + '/auth/token',
        `grant_type=password&username=${id}&password=${password}&client_id=ktest&client_secret=ktest`,
        )
        .then(res => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            localStorage.setItem("access_token", res.data.accessToken);
        })
        .then(() => {
            axios.get(api_url + '/auth/me')
            .then(response => {
                props.history.push({
                    pathname:`/post2021/${encodeURIComponent(response.data.key)}`,
                    state: response.data.accessToken
                });
            })
        })
        .catch(() => {
            alert('로그인에 실패했습니다!');
        });
    };
    
    return (
        <Fragment>
            <div className="login-page-bg-div" style={{'backgroundImage':`url('https://images.ktestone.com/PostImg/Background/background.png')`}}>
                <br></br>
                    <h2 className='send-to-me-title'>나에게 편지를 보내줘!</h2>
                    <div className='register-page-btn-div'>
                        <button onClick={() => {props.setMode("register")}} className="login-page-rgbtn">회원가입</button>
                        <button onClick={() => {props.setMode("login")}} className="login-page-loginbtn">로그인</button>
                    </div>
                    
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
                        <button type="submit" className="login-submit-btn">
                            로그인
                        </button>
                    </form>
                    <p className='name-footer'>©Coocie Rocket</p>
                </div>
            </Fragment>
    )
        
}

export default withRouter(LoginPage)
