import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

const RegisterPage = (props) => {
    const [nickname, setNickname] = useState("");
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const api_url = 'https://api.ktestone.com';
    const bgImgSrc = "https://images.ktestone.com/PostImg2022/Sign/sign_background.png";
    const buttonImgSrc = "https://images.ktestone.com/PostImg2022/Sign/signUp_button.png"

    const _eventSenderGA = (category, action, label) => {
        ReactGA4.event({
            category: category,
            action: action,
            label: label,
        });
    };

    const onNicknameHandler = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onIDHandler = useCallback((e) => {
        setID(e.target.value);
    }, []);

    const onPasswordHandler = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onConfirmPasswordHandler = useCallback((e) => {
        setConfirmPassword(e.target.value);
    }, []);

    async function onSubmitHandler(e) {
        e.preventDefault();

        if(nickname.length > 20) {
            return alert("닉네임의 길이는 20자 이하여야 합니다.\nThe length of Nickname must be under 20 characters.")
        };

        if(password.length < 8) {
            return alert("비밀번호의 길이는 여덟 글자 이상이어야 합니다.\nThe length of password must be over 8 digits.")
        };

        if(password !== confirmPassword) {
            return alert("비밀번호와 일치하지 않습니다.\nFail to confirm password.")
        };

        let body = {
            "id": id,
            "password": password,
            "nickname": nickname
        };

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
        });
    };

    return (
        <div className="post2022-register-page-bg-div">
            <img loading="lazy" src={bgImgSrc} alt='register-bg' className="post2022-register-page-bg-img"/>
            <div className='post2022-register-page-contents-div'>
                <div className='post2022-register-page-btn-div'>
                    <button className="post2022-register-page-rgbtn">회원가입</button>
                    <button onClick={() => {props.setMode("login")}} className="post2022-register-page-loginbtn" style={{'color':'black'}}>로그인</button>
                </div>
                <form
                    className='post2022-register-submit-form'
                    onSubmit={onSubmitHandler}
                >
                    <p className='post2022-register-page-memo-comment'>* 한번 가입한 아이디와 비밀번호는 다시 찾기가<br></br>불가능하니 꼭 메모해주세요!</p>
                    <label>닉네임</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={onNicknameHandler}
                        className='post2022-register-nickname-form'
                        placeholder='20자 이하'
                        required
                    />
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
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={onConfirmPasswordHandler}
                        className='post2022-register-passwordConfirm-form'
                        placeholder='한번 더 입력해주세요'
                        required
                    />
                    <button type="submit" className="post2022-register-submit-btn">
                        <img loading="lazy" src={buttonImgSrc} alt="submit" />
                    </button>
                </form>
            </div>
            <p className='post2022-name-footer'>© Cookie Rocket</p>
        </div>
    );
};

export default withRouter(RegisterPage);