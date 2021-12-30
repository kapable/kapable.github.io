import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

function PostPage(props) {
    
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));
    const api_url = 'https://api.ktestone.com';

    function reloadPage() {
        var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
        var now = Date.now();
        var tenSec = 10 * 1000;
        var plusTenSec = currentDocumentTimestamp + tenSec;
        if (now > plusTenSec) { window.location.reload(); } else {}
    }

    const logoutHandler = () => {
        localStorage.removeItem("access_token");
        setIsLogin(false);
    }
    async function getList(props){
        console.log(props);
        await axios.get(api_url + `/post?userKey=${props.match.params.username}&page=${page}&amount=10`)
        .then(res => {
            console.log(res);
        })
    }

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
                        // state: props
                    })
                }}>
                    {/* <Link to=''>편지 보내기</Link> */}
                    편지 보내기
                </button>
                <button>
                    <Link to='/auth'>내 우편함 만들기</Link>
                </button>
                <button onClick={logoutHandler}>로그아웃</button>
            </div>
        )
        //  when user is logout
    } else {
        return (
            <div>
                <h1>2021 당신에게 나는?</h1>
                <h4>00님의 포스트</h4>
                <button>편지 보내기</button>
                <button>내 우편함 만들기</button>
            </div>
        )
    }
    
}

export default withRouter(PostPage);
