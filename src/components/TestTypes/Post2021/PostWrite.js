import React, { useEffect, useState, useCallback, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { _eventSenderGA } from '../../../tools/tools';

function PostWrite(props) {
    const lang = props.language;
    const api_url = 'https://api.ktestone.com';
    const [nickname, setNickname] = useState("")
    const [message, setMessage] = useState("");
    const key = decodeURIComponent(window.location.pathname.split('/')[3]);
    const [ShowPopup, setShowPopup] = useState(false);
    const [userNickname, setUserNickname] = useState('');
    const [upbarBtnImg, setUpbarBtnImg] = useState(``);
    const [sendMailBtnImg, setSendMailBtnImg] = useState(``);
    const [completePopupBg, setCompletePopupBg] = useState(``)
    const [completeToPostbox, setCompleteToPostbox] = useState(``)
    const [completeToClose, setCompleteToClose] = useState(``)
    const nickNameInput = "https://images.ktestone.com/PostImg/MailForm/nickname-input.png"
    const letterForm = "https://images.ktestone.com/PostImg/MailForm/letter-1.png"
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
        if(props.language === `Kor`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/Background/up_bg_bar.png");
            setSendMailBtnImg("https://images.ktestone.com/PostImg/Button/direct-send-mail-btn.png");
            setCompleteToPostbox("https://images.ktestone.com/PostImg/Button/complete-to-postbox-btn.png");
            setCompleteToClose("https://images.ktestone.com/PostImg/Button/complete-close-btn.png");
            setCompletePopupBg("https://images.ktestone.com/PostImg/Object/complete_send_mail.png");
        } else if(props.language === `Eng`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/English/Button/up_bg_bar.png");
            setSendMailBtnImg("https://images.ktestone.com/PostImg/English/Button/send-mail-btn.png");
            setCompleteToPostbox("https://images.ktestone.com/PostImg/English/Button/complete-to-postbox-btn.png");
            setCompleteToClose("https://images.ktestone.com/PostImg/English/Button/complete-close-btn.png");
            setCompletePopupBg("https://images.ktestone.com/PostImg/English/Object/complete_send_mail.png");
        }
    }, [getUserNickname, props]);

    let body = {
        "userkey": key,
        "nickname": nickname,
        "text": message,
    };

    const completePopup = <div className="popup">
                            <div className="popup-inner">
                                <img loading="lazy" src={completePopupBg} alt="메시지 보내기 완료!" className='postwrite-send-complete-postbox'/>
                                <img loading="lazy"
                                    src={completeToPostbox}
                                    alt="내 우편함 만들기"
                                    className='postwrite-complete-to-postbox'
                                    onClick={() => {
                                        _eventSenderGA("Paging", "Click write-to-auth Button", "post write page");
                                        if(lang === `Eng`) {
                                            props.history.push({
                                                pathname:`/auth/`,
                                                state: {
                                                    language: lang
                                                },
                                            })
                                        } else {
                                            props.history.push({
                                                pathname:`/auth/`,
                                                state: {
                                                    language: lang
                                                },
                                            })
                                        }
                                    }}
                                />
                                <Link to={
                                    lang === `Eng`
                                    ? `/post2022Eng/${encodeURIComponent(key)}/`
                                    : `/post2021/${encodeURIComponent(key)}/`
                                } state={localStorage.getItem("access_token")}>
                                <img loading="lazy"
                                    src={completeToClose}
                                    alt="팝업 닫기"
                                    className='postwrite-complete-close'
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
            return alert("메시지를 입력해주세요!!\nInsert your Message!!")
        }

        if(nickname === null || nickname === "" || nickname === false) {
            return alert("닉네임을 입력해주세요!!\nInsert your nickname!!")
        }

        instance.post(api_url+'/post', body)
        .then(() => {
            _eventSenderGA("Submitting", "Click Post-send Button", "post write page");
            setShowPopup(true);
        })
        .catch(() => {
            alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ\nError while convey the message,,')
        })
    }

    return (
        <Fragment>
            <div className='write-page-div'>
                <img loading="lazy" src={upbarBtnImg} alt="UPBAR" className="start-page-upbar"/>
                <div className='write-page-title-div'>
                    <h3 className='write-page-title'>{lang === `Eng` ? 'Send me Your letter!' : '편지를 보내주세요!'}</ h3>
                </div>
                <div className='write-page-postbox-div' >
                    <img loading="lazy" src={letterForm} alt="Writing a letter" className='write-page-letter-form-img' />
                    <h4 className='write-page-whosname'>{`${userNickname}`} {lang === `Eng` ? '' : '님에게'}</h4>
                    <form
                        className='write-page-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <textarea
                            placeholder={lang === `Eng` ? 'Convey your heart(under 150 characters)' : '마음을 전달하세요(150자 이하)'}
                            autoFocus
                            cols={30.5}
                            rows={11}
                            onChange={onMessageHandler}
                            maxLength={150}
                            className='write-page-textarea'
                        />
                        <img loading="lazy" src={nickNameInput} alt="Nickname input" className='write-page-nickname-input-img'/>
                        <input
                            placeholder={lang === `Eng` ? 'Your nickname(under 10 characters)' : '닉네임을 입력하세요(10자 이하)'}
                            cols={20}
                            rows={10}
                            onChange={onNicknameHandler}
                            maxLength={10}
                            className='write-page-nickname-input'
                        />
                        <button type="submit" className='write-page-submit-btn'>
                            <img loading="lazy" src={sendMailBtnImg} alt="submit letter" className='write-page-submit-btn-img' />
                        </button>
                    </form>
                </div>
                <div className="popup-div">
                    {ShowPopup ? 
                        completePopup
                        : null}
                </div>
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
    
}

export default withRouter(PostWrite);
