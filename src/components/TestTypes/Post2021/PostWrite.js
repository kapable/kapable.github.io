import React, { useEffect, useState, useCallback, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import LETTER1 from '../../../api/PostImg/MailForm/letter-1.png';
import COMPLETETOPOST from '../../../api/PostImg/Button/complete-to-postbox-btn.png';
import COMPLETECLOSE from '../../../api/PostImg/Button/complete-close-btn.png';
import COMPLETE from '../../../api/PostImg/Object/complete_send_mail.png';
import NICKNAMEINPUT from '../../../api/PostImg/MailForm/nickname-input.png';
import SENDMAIL from '../../../api/PostImg/Button/direct-send-mail-btn.png';

function PostWrite(props) {
    const api_url = 'https://api.ktestone.com';
    const [nickname, setNickname] = useState("")
    const [message, setMessage] = useState("");
    const key = decodeURIComponent(window.location.pathname.split('/')[3]);
    const [ShowPopup, setShowPopup] = useState(false);
    const [userNickname, setUserNickname] = useState('');
    const instance = axios.create({headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*',
        'x-powered-by': 'Express' 
    },})

    function onMessageHandler(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }

    function onNicknameHandler(e) {
        e.preventDefault();
        setNickname(e.target.value);
    }

    const getUserNickname = useCallback(
        async () => {
            await axios.get(api_url + `/post?userKey=${encodeURIComponent(key)}&page=1&amount=10`)
            .then(res => {
                setUserNickname(res.data.user.nickname);
            })
        },
        [key],
    )

    useEffect(() => {
        getUserNickname();
    }, [getUserNickname])

    let body = {
        "userkey": key,
        "nickname": nickname,
        "text": message,
    }

    const completePopup = <div className="popup">
                            <div className="popup-inner">
                                <img src={COMPLETE} alt="메시지 보내기 완료!" className='postwrite-send-complete-postbox'/>
                                <img
                                    src={COMPLETETOPOST}
                                    alt="내 우편함 만들기"
                                    className='postwrite-complete-to-postbox'
                                    onClick={() => {
                                        props.history.push({
                                            pathname:`/auth/`,
                                        })
                                    }}
                                />
                                <Link to={`/post2021/${encodeURIComponent(key)}/`} state={localStorage.getItem("access_token")}>
                                <img
                                    src={COMPLETECLOSE}
                                    alt="팝업 닫기"
                                    className='postwrite-complete-close'
                                    onClick={() => {
                                        setShowPopup(false);
                                    }}
                                />
                                </Link>
                            </div>
                        </div>

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(message === null || message === "" || message === false) {
            return alert("메시지를 입력해주세요!!")
        }

        if(nickname === null || nickname === "" || nickname === false) {
            return alert("닉네임을 입력해주세요!!")
        }

        instance.post(api_url+'/post', body)
        .then(() => {
            setShowPopup(true);
        })
        .catch(() => {
            alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ')
        })
    }

    return (
        <Fragment>
            <div className='write-page-div'>
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <div className='write-page-title-div'>
                    <h3 className='write-page-title'>편지를 보내주세요!</ h3>
                </div>
                <div className='write-page-postbox-div' >
                    <img src={LETTER1} alt="Writing a letter" className='write-page-letter-form-img' />
                    <h4 className='write-page-whosname'>{`${userNickname}`} 님에게</h4>
                    <form
                        className='write-page-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <textarea
                            placeholder='마음을 전달하세요(150자 이하)'
                            autoFocus
                            cols={30.5}
                            rows={11}
                            onChange={onMessageHandler}
                            maxLength={150}
                            className='write-page-textarea'
                        />
                        <img src={NICKNAMEINPUT} alt="Nickname input" className='write-page-nickname-input-img'/>
                        <input
                            placeholder='닉네임을 입력하세요(10자 이하)'
                            cols={20}
                            rows={10}
                            onChange={onNicknameHandler}
                            maxLength={10}
                            className='write-page-nickname-input'
                        />
                        <button type="submit" className='write-page-submit-btn'>
                            <img src={SENDMAIL} alt="submit letter" className='write-page-submit-btn-img' />
                        </button>
                    </form>
                </div>
                <div className="popup-div">
                    {ShowPopup ? 
                        completePopup
                        : null}
                </div>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
    
}

export default withRouter(PostWrite);
