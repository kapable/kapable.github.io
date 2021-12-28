import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function PostPage() {
    const [userData, setUserData] = useState(false);
    // when user is logout
    if (userData === false) {
        return (
            <div>
                <h1>2021 당신에게 나는?</h1>
                <h4>00님의 포스트</h4>
                <button>
                    <Link to='/postwrite'>편지 보내기</Link>
                </button>
                <button>
                    <Link to='/auth'>내 우편함 만들기</Link>
                </button>
                <button onClick={() => {setUserData({'json':'good'})}}>로긴</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>2021 당신에게 나는?</h1>
                <h4>00님의 포스트</h4>
                <button>내 우편함 공유</button>
                <button onClick={() => {setUserData(false)}}>로가웃</button>
            </div>
        )
    }
    
}

export default PostPage
