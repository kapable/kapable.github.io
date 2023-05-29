import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Pagination from "react-js-pagination";
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const PostPage = (props) => {
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));
    const [mailList, setMailList] = useState([]);
    const [mailCount, setMailCount] = useState(0);
    const [userNickname, setUserNickname] = useState('');
    const [fromNickname, setFromNickname] = useState('');
    const [message, setMessage] = useState('');
    const letterOrder = ['red', 'blue', 'blue', 'red', 'red', 'blue', 'blue', 'red', 'red', 'blue'];
    const api_url = 'https://api.ktestone.com';
    const introImgSrc = "https://images.ktestone.com/PostImg2022/Intro/Intro.png"
    const [ShowPopup, setShowPopup] = useState(false);

    const [postListBackgroundImg, setPostListBackgroundImg] = useState("");
    const [alertBellImg, setAlertBellImg] = useState("");
    const [sendButtonImg, setSendButtonImg] = useState("");
    const [createBoxButtonImg, setCreateBoxButtonImg] = useState("");
    const [popupImg, setPopupImg] = useState("");
    const [shareMyBox, setShareMyBox] = useState("");

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
            const saju_url = 'https://saju.ktestone.com';
            await axios.get(saju_url + `/today/total`, {withCredentials:true})
                .then(res => {
                    console.log(res);
                })
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
    const metaTagRenderer = () => {
        return (
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>퍼스널 우체통 2022</title>
                <meta name="title" content="퍼스널 우체통 2022 - 케이테스트"/>
                <meta name="description" content="나만의 퍼스널 우체통 2022" data-react-helmet="true"/>
                <link rel="main-url" href="https://ktestone.com/kapable.github.io/post2022/"/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ktestone.com/kapable.github.io/post2022/"/>
                <meta property="og:title" content="퍼스널 우체통 2022 - 케이테스트"/>
                <meta property="og:description" content="나만의 퍼스널 우체통 2022"/>
                <meta property="og:image" content={introImgSrc}/>
                <meta property="og:image:alt" content="퍼스널 우체통 2022 - 케이테스트" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/post2022/"/>
                <meta property="twitter:title" content="퍼스널 우체통 2022 - 케이테스트"/>
                <meta property="twitter:description" content="나만의 퍼스널 우체통 2022"/>
                <meta property="twitter:image" content={introImgSrc}/>
                <meta property="twitter:image:alt" content="퍼스널 우체통 2022 - 케이테스트" />
            </Helmet>
        )
}

    const mailRenderer = (list, login) => {
        let mails = [];
        list.map((mail, ix) => (
            mails.push(<div
                            className='post2022-page-envelop-div'
                            key={`envelop-div-${mail.id}`}
                            onClick={() => {
                                if(login === true) {
                                    getMail(mail.id);
                                }
                            }}
                            >
                            <img loading="lazy"
                                src={`https://images.ktestone.com/PostImg2022/PostList/${letterOrder[ix]}Post.png`}
                                alt={`Envelop${ix}`}
                                key={`envelop-img-div-${mail.id}`}
                                className="post2022-page-envelop"
                            />
                            <p
                                className='post2022-page-nickname-onletter'
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
                className='post2022-pagination'
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

    const eachMail = <div className="post2022-popup">
                        <div className="post2022-popup-inner">
                            <img loading="lazy"
                                src={popupImg}
                                alt="letter"
                                className='post2022-popup-letter-form' />
                            <p className="post2022-popup-message">{message}</p>
                            <p className="post2022-popup-fromNickname">From : {`${fromNickname}`}</p>
                            <p className="post2022-popup-head">To: {`${userNickname}`}</p>
                            <button onClick={() => setShowPopup(false)} className='post2022-popup-close-btn'>X</button>
                        </div>
                    </div>

    useEffect(() => {
        setIsLogin(props.location.state === localStorage.getItem("access_token"));
        getList();
        setPostListBackgroundImg("https://images.ktestone.com/PostImg2022/PostList/postList_bg_long.png");
        setAlertBellImg("https://images.ktestone.com/PostImg2022/PostList/postList_bell.png");
        setSendButtonImg("https://images.ktestone.com/PostImg2022/PostList/postList_send_button.png");
        setCreateBoxButtonImg("https://images.ktestone.com/PostImg2022/PostList/postList_create_button.png");
        setPopupImg("https://images.ktestone.com/PostImg2022/PostList/postList_popup_.png");
        setShareMyBox("https://images.ktestone.com/PostImg2022/PostList/postList_share_my_box_btn.png")
    }, [props, getList])

    if (isLogin) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        return(
            <div className='post2022-page'>
                {metaTagRenderer()}
                {/* Background */}
                <img loading="lazy" src={postListBackgroundImg} alt="bg-img" className='post2022-long-bg-img'/>

                {/* Count Bell */}
                <img loading="lazy" src={alertBellImg} alt="alertBellImg" className='post2022-alert-bell-img' />
                <p className='post2022-page-mailcount'>{mailCount}</p>

                {/* User name */}
                <p className='post2022-page-whosname'>{`${userNickname}`}님의</p>

                <div className='post2022-page-btn-div'>
                    <CopyToClipboard text={`https://ktestone.com/kapable.github.io/post2022/${props.match.params.username}/`}>
                        <img loading="lazy" src={shareMyBox} alt="Share My Post" onClick={onShareBtnClick} className='post2022-page-share-mypost-btn' />
                    </CopyToClipboard>
                </div>             
                {/* Contents */}
                <div className='post2022-page-mails-div'>
                    {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                </div>
                {pageRenderer(page, mailCount)}
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
                {metaTagRenderer()}
                {/* Background */}
                <img loading="lazy" src={postListBackgroundImg} alt="bg-img" className='post2022-long-bg-img'/>

                {/* Count Bell */}
                <img loading="lazy" src={alertBellImg} alt="alertBellImg" className='post2022-alert-bell-img' />
                <p className='post2022-page-mailcount'>{mailCount}</p>

                {/* User name */}
                <p className='post2022-page-whosname'>{`${userNickname}`}님의</p>

                <div className='post2022-page-btn-div'>
                    <img loading="lazy" src={sendButtonImg} alt="Send Mail" className="post2022-page-send-mail-btn" onClick={() => {
                        _eventSenderGA("Paging", "Click Post-to-write Button", "post page");
                        props.history.push({
                            pathname:`/post2022/${props.match.params.username}/postwrite/`,
                        });
                    }} />
                    <img loading="lazy" src={createBoxButtonImg} alt="Go to My Post" onClick={() => {
                        _eventSenderGA("Paging", "Click Post-to-auth Button", "post page");
                        props.history.push({
                            pathname:`/postAuth2022/`,
                            state: {
                                language: 'Kor'
                            },
                        });
                    }} className='post2022-page-goto-mypost-btn' />
                </div>             
                {/* Contents */}
                <div className='post2022-page-mails-div'>
                    {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                </div>
                {pageRenderer(page, mailCount)}
                <div className="post2022-popup-div">
                    {ShowPopup ? 
                        eachMail
                        : null}
                </div>
            </div>
        );
    }

    
}

export default withRouter(PostPage);