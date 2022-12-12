import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ScriptTag from 'react-script-tag'
import Pagination from "react-js-pagination";
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';

const PostPage = (props) => {
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

    const postListBackgroundImg = "https://images.ktestone.com/PostImg2022/PostList/postList_bg_long.png"
    const [mainTitleImg, setMainTitleImg] = useState("https://images.ktestone.com/PostImg/Background/main_title_2022.png");
    const postBoxImg = "https://images.ktestone.com/PostImg/Object/Postbox.png"
    const [sendMailImg, setSendMailImg] = useState("https://images.ktestone.com/PostImg/Button/send-mail-btn.png");
    const [shareMyPostImg, setShareMyPostImg] = useState("https://images.ktestone.com/PostImg/Button/share-mypost-btn.png");
    const [goToMyPostImg, setGoToMyPostImg] = useState("https://images.ktestone.com/PostImg/Button/go-to-mypost-btn.png");
    const nickNameInput = "https://images.ktestone.com/PostImg/MailForm/nickname-input.png";

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        });
    };

    const onShareBtnClick = () => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "post page");
        alert("링크가 복사됐어요!");
    };

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
    );

    async function getMail(postid) {
        await axios.get(api_url + `/post/${postid}`)
        .then(res => {
            _eventSenderGA("Viewing", "Click Each-mail Button", "post page");
            setFromNickname(res.data.nickname);
            setMessage(res.data.text);
            setShowPopup(true);
        })
    }

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
    };

    const nullMailRenderer = () => {
        return(
            <div className='post-page-null-maillist'>{`텅! 비었어요...`}</div>
        )
    };

    const eachMail = <div className="popup">
                        <div className="popup-inner">
                            <button onClick={() => setShowPopup(false)} className='popup-close-btn'>X</button>
                            <img
                                src={`https://images.ktestone.com/PostImg/MailForm/letter-${letterOrder[mailNum]}.png`}
                                alt="letter"
                                className='popup-letter-form' />
                            <h4 className="popup-head">{`${userNickname}`}{'에게'}</h4>
                            <p className="popup-message">{message}</p>
                            <img src={nickNameInput} className='popup-nickname-input' alt="popup-nickname-input"/>
                            <p className="popup-fromNickname">{`from ${fromNickname}`}</p>
                        </div>
                    </div>

    useEffect(() => {
        setIsLogin(props.location.state === localStorage.getItem("access_token"));
        getList();
    }, [props, getList])

    if (isLogin) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        return(
            <div className='post2022-page'>
                <img src={postListBackgroundImg} alt="bg-img" className='post2022-long-bg-img'/>
                <div className='post2022-page-bg-div' >
                    {/* <img src={mainTitleImg} alt="당신에게 나는 어떤 사람인가요?" className='post2022-page-maintitle' /> */}
                    <div className="post2022-page-postbox-div">
                        {/* <img src={postBoxImg} alt="POSTBOX" className="post2022-page-postbox"/> */}
                        <h4 className='post2022-page-whosname'>{`${userNickname}`} {`님의`}<br></br>POST</h4>
                        <h4 className='post2022-page-mailcount'>{mailCount}{`개의 편지`}</h4>
                    </div>
                    {/* Coupang or Mails */}
                    <>
                        <div className='post2022-page-btn-div'>
                            <img src={sendMailImg} alt="Send Mail" className="post2022-page-send-mail-btn" onClick={() => {
                                _eventSenderGA("Paging", "Click Post-to-write Button", "post page");
                                props.history.push({
                                    pathname:`/post2022/${props.match.params.username}/postwrite/`,
                                })
                            }} />
                            <CopyToClipboard text={`https://ktestone.com/kapable.github.io/post2021/${props.match.params.username}/`}>
                                <img src={shareMyPostImg} alt="Share My Post" onClick={onShareBtnClick} className='post2022-page-share-mypost-btn' />
                            </CopyToClipboard>
                        </div>             
                        <div className='post2022-page-mails-div'>
                            {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                        </div>
                        {pageRenderer(page, mailCount)}
                    </>
                    <br></br>
                </div>
                <div className="post2022-popup-div">
                    {ShowPopup ? 
                        eachMail
                        : null}
                </div>
            </div>
        );
    } else {
        return (
            <div className='post2022-page'>
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <div className='post2022-page-bg-div'>
                    <img src={"https://images.ktestone.com/PostImg/Background/main_title.png"} alt="당신에게 나는 어떤 사람이었나요?" className='post2022-page-maintitle' />
                    <div className="post2022-page-postbox-div">
                        <img src={postBoxImg} alt="POSTBOX" className="post2022-page-postbox"/>
                        <h4 className='post2022-page-whosname'>{`${userNickname}`} {`님의`}<br></br>POST</h4>
                        <h4 className='post2022-page-mailcount'>{mailCount}{`개의 편지`}</h4>
                    </div>
                    {/* Coupang or Mails */}
                    <>
                        <div className='post2022-page-btn-div'>
                            <img src={sendMailImg} alt="Send Mail" className="post2022-page-send-mail-btn" onClick={() => {
                                _eventSenderGA("Paging", "Click Post-to-write Button", "post page");
                                props.history.push({
                                    pathname:`/post2022/${props.match.params.username}/postwrite/`,
                                });
                            }} />
                            <img src={goToMyPostImg} alt="Go to My Post" onClick={() => {
                                _eventSenderGA("Paging", "Click Post-to-auth Button", "post page");
                                props.history.push({
                                    pathname:`/postAuth2022/`,
                                    state: {
                                        language: 'Kor'
                                    },
                                });
                            }} className='post2022-page-goto-mypost-btn' />
                        </div>
                        <div className='post2022-page-mails-div'>
                            {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                        </div>
                            {pageRenderer(page, mailCount)}
                    </>
                </div>
            </div>
        );
    }

    
}

export default withRouter(PostPage);