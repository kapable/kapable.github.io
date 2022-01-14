import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

function LoginPage(props) {
    const lang = props.language;
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
                if(lang === `Eng`) {
                    props.history.push({
                        pathname:`/post2022Eng/${encodeURIComponent(response.data.key)}/`,
                        state: response.data.accessToken
                    });
                } else {
                    props.history.push({
                        pathname:`/post2021/${encodeURIComponent(response.data.key)}/`,
                        state: response.data.accessToken
                    });
                }
            })
        })
        .catch(() => {
            if(lang === `Eng`) {
                alert('Fail to login!');
            } else {
                alert('로그인에 실패했습니다!');
            }
        });
    };
    if (lang === `Eng`) {
        return (
            <Fragment>
                <div className="login-page-bg-div">
                    <br></br>
                        <h2 className='send-to-me-title'>Send me Your letter!</h2>
                        <div className='register-page-btn-div'>
                            <button onClick={() => {props.setMode("register")}} className="login-page-rgbtn" style={{'color':'black'}}>Register</button>
                            <button onClick={() => {props.setMode("login")}} className="login-page-loginbtn" style={{'color':'black'}}>Login</button>
                        </div>
                        
                        <form
                            className='register-submit-form'
                            onSubmit={onSubmitHandler}
                        >
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
                            <button type="submit" className="login-submit-btn">
                                Login
                            </button>
                        </form>
                        <p className='name-footer'>©Cookie Rocket</p>
                    </div>
                </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className="login-page-bg-div">
                    <br></br>
                        <h2 className='send-to-me-title'>나에게 편지를 보내줘!</h2>
                        <div className='register-page-btn-div'>
                            <button onClick={() => {props.setMode("register")}} className="login-page-rgbtn" style={{'color':'black'}}>회원가입</button>
                            <button onClick={() => {props.setMode("login")}} className="login-page-loginbtn" style={{'color':'black'}}>로그인</button>
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
    
        
}

export default withRouter(LoginPage)
