import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

function PostPage(props) {
    
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));
    const [mailList, setMailList] = useState([]);
    const [mailCount, setMailCount] = useState(0);
    const api_url = 'https://api.ktestone.com';

    function reloadPage() {
        var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
        var now = Date.now();
        var tenSec = 10 * 1000;
        var plusTenSec = currentDocumentTimestamp + tenSec;
        if (now > plusTenSec) { window.location.reload(); } else {}
    }

    const onShareBtnClick = () => {
        alert("링크가 복사됐어요!");
    }

    const logoutHandler = () => {
        localStorage.removeItem("access_token");
        setIsLogin(false);
    }
    async function getList(props){
        console.log(props);
        await axios.get(api_url + `/post?userKey=${props.match.params.username}&page=${page}&amount=10`)
        .then(res => {
            setMailList(res.data.rows);
            setMailCount(res.data.count);
            console.log(res);
        })
    }

    // async function getMail(postid) {
    //     console.log(postid);
    //     await axios.get(api_url + `/post/${postid}`)
    //     .then(res => {
    //         console.log(res);
    //     })
    // }

    useEffect(() => {
        getList(props);
        reloadPage();
    }, [props])

    // when user is login
    if (isLogin) {
        return (
            <div>
                <h1>2021 당신에게 나는?</h1>
                <h4>00님의 포스트</h4>
                <button onClick={() => {
                    props.history.push({
                        pathname:`/post2post/${props.match.params.username}/postwrite`,
                    })
                }}>
                    편지 보내기
                </button>
                <CopyToClipboard text={`https://ktestone.com/kapable.github.io/post2post/${props.match.params.username}`}>
                    <button onClick={onShareBtnClick}>
                        공유하기
                    </button>
                </CopyToClipboard>
                
                <button onClick={logoutHandler}>로그아웃</button>
                <p>{mailCount}</p>
                {mailList.map((mail)=>(
                    <button
                        key={mail.id}
                        onClick={() => {
                            axios.get(api_url + `/post/${mail.id}`)
                            .then(res => {
                                console.log(res);
                            })
                        }}
                    >{mail.nickname}</button>
                ))}
            </div>
        )
        //  when user is logout
    } else {
        return (
            <div>
                <h1>2021 당신에게 나는?</h1>
                <h4>00님의 포스트</h4>
                <button>
                    <Link to={`/post2post/${props.match.params.username}/postwrite`}>편지 보내기</ Link>
                </button>
                <button>
                    <Link to="/auth" >내 우편함 만들기</Link>
                </button>
                <p>{mailCount}</p>
                {mailList.map((mail)=>(
                    <button key={mail.id} >{mail.nickname}</button>
                ))}
            </div>
        )
    }
    
}

export default withRouter(PostPage);
