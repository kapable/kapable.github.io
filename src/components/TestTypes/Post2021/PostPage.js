import axios from 'axios';
import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled, { createGlobalStyle } from 'styled-components';
import ScriptTag from 'react-script-tag'
import POSTBOX from '../../../api/PostImg/Object/Postbox.png';
import GOTOMYPOST from '../../../api/PostImg/Button/go-to-mypost-btn.png';
import SENDMAIL from '../../../api/PostImg/Button/send-mail-btn.png';
import SHAREMYPOST from '../../../api/PostImg/Button/share-mypost-btn.png';
import NICKNAMEINPUT from '../../../api/PostImg/MailForm/nickname-input.png';
import Pagination from "react-js-pagination";

function PostPage(props) {
    
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));
    const [mailList, setMailList] = useState([]);
    const [mailCount, setMailCount] = useState(0);
    const [mailNum, setMailNum] = useState(0);
    const [userNickname, setUserNickname] = useState('');
    const [fromNickname, setFromNickname] = useState('');
    const [message, setMessage] = useState('');
    const letterOrder = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4]
    const api_url = 'https://api.ktestone.com';
    const [ShowPopup, setShowPopup] = useState(false);

    const PageBackground = styled.div` 
        background-image: url("https://images.ktestone.com/PostImg/Background/background.png");
        justify-content: center;
        align-items: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    `

    const GlobalStyle = createGlobalStyle`
        .main-header {
            display: none;
        }
    `

    function adTagRenderer(){
        return(
            <Fragment>
                <div id="protag-in_article_video"></div>
                    <ScriptTag type="text/javascript">
                        {`window.googletag = window.googletag || { cmd: [] };
                        window.protag = window.protag || { cmd: [] };
                        window.protag.cmd.push(function () {
                            window.protag.display("protag-in_article_video");
                        });`}
                    </ScriptTag>
            </Fragment>
        )
    }

    const onShareBtnClick = () => {
        alert("링크가 복사됐어요!");
    }

    // const logoutHandler = () => {
    //     localStorage.removeItem("access_token");
    //     setIsLogin(false);
    // }

    const mailRenderer = (list, login) => {
        let mails = [];
        list.map((mail, ix) => (
            mails.push(<div
                            className='post-page-envelop-div'
                            key={`envelop-div-${mail.id}`}
                            onClick={() => {
                                if(login === true) {
                                    getMail(mail.id);
                                    setMailNum(ix);
                                }
                            }}
                            >
                            <img
                                src={`https://images.ktestone.com/PostImg/Envelop/envelop-${letterOrder[ix]}.png`}
                                alt={`Envelop${ix}`}
                                key={`envelop-img-div-${mail.id}`}
                                className="post-page-envelop"
                            />
                            <p
                                className='post-page-nickname-onletter'
                                key={`envelop-nickname-div-${mail.id}`}
                            >{isLogin ? `${mail.nickname}` : null}</p>
                        </div>
            )
            ))
        return mails
    }

    const nullMailRenderer = () => {
        return(
            <div className='post-page-null-maillist'>텅! 비었어요...</div>
        )
    }

    const eachMail = <div className="popup">
                        <div className="popup-inner">
                            <button onClick={() => setShowPopup(false)} className='popup-close-btn'>X</button>
                            <img
                                src={`https://images.ktestone.com/PostImg/MailForm/letter-${letterOrder[mailNum]}.png`}
                                alt="letter"
                                className='popup-letter-form' />
                            <h4 className="popup-head">{`${userNickname}에게`}</h4>
                            <p className="popup-message">{message}</p>
                            <img src={NICKNAMEINPUT} className='popup-nickname-input' alt="popup-nickname-input"/>
                            <p className="popup-fromNickname">{`from ${fromNickname}`}</p>
                        </div>
                    </div>

    const pageRenderer = (page, mailCount) => {
        return(
            <Pagination
                className='pagination'
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={mailCount}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={(page) => {
                    setPage(page);
                    getList();
                }} />
        )        
    }

    const getList = useCallback(
        async () => {
            await axios.get(api_url + `/post?userKey=${props.match.params.username}&page=${page}&amount=10`)
            .then(res => {
                setMailList(res.data.rows);
                setMailCount(res.data.count);
                setUserNickname(res.data.user.nickname);
            })
        },
        [props, page],
    )

    async function getMail(postid) {
        await axios.get(api_url + `/post/${postid}`)
        .then(res => {
            setFromNickname(res.data.nickname);
            setMessage(res.data.text);
            setShowPopup(true);
        })
    }

    useEffect(() => {
        setIsLogin(props.location.state === localStorage.getItem("access_token"));
        getList();
    }, [props, getList,])
    
    // when user is login
    if (isLogin) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        return (
            <div className='post-page'>
                <GlobalStyle />
                {/* <img src={} alt="bg" className='post-page-bg-img' /> */}
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <PageBackground className='post-page-bg-div' >
                    <img src={"https://images.ktestone.com/PostImg/Background/main_title.png"} alt="당신에게 나는 어떤 사람인가요?" className='post-page-maintitle' />
                    <div className="post-page-postbox-div">
                        <img src={POSTBOX} alt="POSTBOX" className="post-page-postbox"/>
                        <h4 className='post-page-whosname'>{`${userNickname}`} 님의<br></br>POST</h4>
                        <h4 className='post-page-mailcount'>{mailCount}개의 편지</h4>
                    </div>
                    <div className='post-page-btn-div'>
                        <img src={SENDMAIL} alt="Send Mail" className="post-page-send-mail-btn" onClick={() => {
                            props.history.push({
                                pathname:`/post2021/${props.match.params.username}/postwrite/`,
                            })
                        }} />
                        <CopyToClipboard text={`https://ktestone.com/kapable.github.io/post2021/${props.match.params.username}/`}>
                            <img src={SHAREMYPOST} alt="Share My Post" onClick={onShareBtnClick} className='post-page-share-mypost-btn' />
                        </CopyToClipboard>
                    </div>             
                    {/* <button className='post-page-logout-btn' onClick={logoutHandler}></button> */}
                    <div className='post-page-mails-div'>
                        {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                    </div>
                    {pageRenderer(page, mailCount)}
                    <br></br>
                </PageBackground>
                <div className="popup-div">
                    {ShowPopup ? 
                        eachMail
                        : null}
                </div>
                {adTagRenderer()}
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        )
        //  when user is logout
    } else {
        return (
            <div className='post-page'>
                <GlobalStyle />
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <div className='post-page-bg-div'>
                    <img src={"https://images.ktestone.com/PostImg/Background/main_title.png"} alt="당신에게 나는 어떤 사람이었나요?" className='post-page-maintitle' />
                    <div className="post-page-postbox-div">
                        <img src={POSTBOX} alt="POSTBOX" className="post-page-postbox"/>
                        <h4 className='post-page-whosname'>{`${userNickname}`} 님의<br></br>POST</h4>
                        <h4 className='post-page-mailcount'>{mailCount}개의 편지</h4>
                    </div>
                <div className='post-page-btn-div'>
                    <img src={SENDMAIL} alt="Send Mail" className="post-page-send-mail-btn" onClick={() => {
                        props.history.push({
                            pathname:`/post2021/${props.match.params.username}/postwrite/`,
                        })
                    }} />
                    <img src={GOTOMYPOST} alt="Go to My Post" onClick={() => {
                        if(localStorage.getItem("access_token")) {
                            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
                            axios.get(api_url + `/auth/me`)
                            // go to my page when the token is valid
                            .then(res => {
                                props.history.push({
                                    pathname:`/post2021/${encodeURIComponent(res.data.key)}`,
                                    state: localStorage.getItem("access_token")
                                });
                            })
                            // if token error, go to auth page
                            .catch(() => {
                                alert('로그인이 만료 되었습니다!!')
                                props.history.push({
                                    pathname:`/auth/`,
                                })
                            })
                        // go to auth page unless token exist
                        } else {
                            props.history.push({
                                pathname:`/auth/`,
                            })
                        }
                    }} className='post-page-goto-mypost-btn' />
                </div>
                <div className='post-page-mails-div'>
                    {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                </div>
                {pageRenderer(page, mailCount)}
                <br></br>
            </div>
            {adTagRenderer()}
            <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
        </div>
        )
    }
}

export default withRouter(PostPage);
