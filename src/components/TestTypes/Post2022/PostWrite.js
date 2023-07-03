import React, { useEffect, useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { _eventSenderGA } from '../../../tools/tools';
import { Input } from 'antd';

const PostWrite = (props) => {
    const api_url = 'https://api.ktestone.com';
    const [nickname, setNickname] = useState("")
    const [message, setMessage] = useState("");
    const key = decodeURIComponent(window.location.pathname.split('/')[3]);
    const [ShowPopup, setShowPopup] = useState(false);
    const [userNickname, setUserNickname] = useState('');
    const letterForm = "https://images.ktestone.com/PostImg2022/postPaper/postPaper_background_.png";
    const completeToClose = "https://images.ktestone.com/PostImg2022/postPaper/close_button.png";
    const completePopupBg = "https://images.ktestone.com/PostImg2022/postPaper/complete_background.png";
    const completeToPostbox = "https://images.ktestone.com/PostImg2022/PostList/postList_create_button.png";
    const sendMailBtnImg = "https://images.ktestone.com/PostImg2022/PostList/postList_send_button.png";
    const instance = axios.create({headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*',
        'x-powered-by': 'Express' 
    },});

    function onMessageHandler(e) {
        e.preventDefault();
        setMessage(e.target.value);
    };

    function onNicknameHandler(e) {
        e.preventDefault();
        setNickname(e.target.value);
    };

    const getUserNickname = useCallback(
        async () => {
            await axios.get(api_url + `/post?userKey=${encodeURIComponent(key)}&page=1&amount=10`)
            .then(res => {
                setUserNickname(res.data.user.nickname);
            })
        },
        [key],
    );

    useEffect(() => {
        getUserNickname();
    }, [getUserNickname]);

    let body = {
        "userkey": key,
        "nickname": nickname,
        "text": message,
    };

    const completePopup = <div className="post2022-popup">
                            <div className="post2022-popup-inner">
                                <img loading="lazy" src={completePopupBg} alt="메시지 보내기 완료!" className='post2022-postwrite-send-complete-postbox'/>
                                <img loading="lazy"
                                    src={completeToPostbox}
                                    alt="내 우편함 만들기"
                                    className='post2022-postwrite-complete-to-postbox'
                                    onClick={() => {
                                        _eventSenderGA("Paging", "Click write-to-auth Button", "post write page");
                                        props.history.push({
                                            pathname:`/postAuth2022/`,
                                            state: {
                                                language: 'Kor'
                                            },
                                        })
                                    }}
                                />
                                <Link to={`/post2022/${encodeURIComponent(key)}/`} state={localStorage.getItem("access_token")}>
                                    <img loading="lazy"
                                        src={completeToClose}
                                        alt="팝업 닫기"
                                        className='post2022-postwrite-complete-close'
                                        onClick={() => {
                                            _eventSenderGA("Submitting", "Click write-popup-close Button", "post write page");
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
            _eventSenderGA("Submitting", "Click Post-send Button", "post write page");
            setShowPopup(true);
        })
        .catch(() => {
            alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ')
        })
    };

    return (
        <div className='post2022-write-page-div'>
                <div className='post2022-write-page-postbox-div' >
                    <img loading="lazy" src={letterForm} alt="Writing a letter" className='post2022-write-page-letter-form-img' />
                    <form
                        className='post2022-write-page-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <textarea
                            placeholder={'마음을 전달하세요(150자 이하)'}
                            autoFocus
                            cols={30.5}
                            rows={11}
                            onChange={onMessageHandler}
                            maxLength={150}
                            className='post2022-write-page-textarea'
                        />
                        <p className='post2022-write-page-whosname'>To: {`${userNickname}`}님에게</p>
                        <Input
                            prefix={"From: "}
                            size={"small"}
                            placeholder={'닉네임 입력(10자 이하)'}
                            onChange={onNicknameHandler}
                            maxLength={10}
                            className='post2022-write-page-nickname-input'
                        />
                        <button type="submit" className='post2022-write-page-submit-btn'>
                            <img loading="lazy" src={sendMailBtnImg} alt="submit letter" className='post2022-write-page-submit-btn-img' />
                        </button>
                    </form>
                </div>
                <div className="popup-div">
                    {ShowPopup ? 
                        completePopup
                        : null}
                </div>
            </div>
    )
}

export default withRouter(PostWrite);