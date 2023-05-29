import React, { Fragment } from 'react';

const KakaoPlusFriendBtn = () => {
    return (
        <Fragment>
            <div className="kakao-plusfriend-comment-container">
                <img loading="lazy"
                    src="https://images.ktestone.com/default/kakao-plus-friends-comment.png"
                    alt="kakao-plusfriend-comment"
                    className="kakao-plusfriend-comment-image"/>
            </div>
            <div className="kakao-plusfriend-btn-container" >
                <a href="https://pf.kakao.com/_IxnRfb" target="_blank" rel="noopener noreferrer">
                    <img loading="lazy"
                        src="https://images.ktestone.com/default/kakao-plus-friends-btn.png"
                        alt="kakao-plusfriend-btn"
                        className="kakao-plusfriend-btn-image"/>
                </a>
            </div>
        </Fragment>
    );
};

export default KakaoPlusFriendBtn;