import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function PostWrite(props) {
    const api_url = 'https://api.ktestone.com';
    const [nickname, setNickname] = useState("")
    const [message, setMessage] = useState("");
    const key = decodeURIComponent(window.location.pathname.split('/')[3]);
    const instance = axios.create({headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*',
        'x-powered-by': 'Express' 
    },})

    useEffect(() => {
    }, [])

    function onMessageHandler(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }

    function onNicknameHandler(e) {
        e.preventDefault();
        setNickname(e.target.value);
    }

    let body = {
        "userkey": key,
        "nickname": nickname,
        "text": message,
    }

    const onSubmitHandler = (e) => {
        console.log(body);
        e.preventDefault();
        instance.post(api_url+'/post', body)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

        alert('제출 되었습니다!')
    }

    return (
        <div>
            <form
                className='write-submit-form'
                onSubmit={onSubmitHandler}
            >
                <textarea
                    placeholder='마음을 전달하세요(150자 이하)'
                    autoFocus
                    cols={40}
                    rows={10}
                    onChange={onMessageHandler}
                    maxLength={150}
                />
                <input
                    placeholder='닉네임을 입력하세요(10자 이하)'
                    cols={40}
                    rows={10}
                    onChange={onNicknameHandler}
                    maxLength={10}
                />
                <button type="submit" className='write-submit-btn'>
                    편지 보내기
                </button>
            </form>
            
        </div>
    )
    
}

export default withRouter(PostWrite);
