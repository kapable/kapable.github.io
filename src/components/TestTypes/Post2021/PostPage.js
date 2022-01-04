import axios from 'axios';
import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import MAINTITLE from '../../../api/PostImg/Background/main_title.png';
import UPBAR from '../../../api/PostImg/Background/up_bg_bar.png';
import DOWNBAR from '../../../api/PostImg/Background/down_bg_bar.png';
import POSTBOX from '../../../api/PostImg/Object/Postbox.png';
import GOTOMYPOST from '../../../api/PostImg/Button/go-to-mypost-btn.png';
import SENDMAIL from '../../../api/PostImg/Button/send-mail-btn.png';
import SHAREMYPOST from '../../../api/PostImg/Button/share-mypost-btn.png';
import ENVELOP1 from '../../../api/PostImg/Envelop/envelop-1.png';
import ENVELOP2 from '../../../api/PostImg/Envelop/envelop-2.png';
import ENVELOP3 from '../../../api/PostImg/Envelop/envelop-3.png';
import ENVELOP4 from '../../../api/PostImg/Envelop/envelop-4.png';
import ENVELOP5 from '../../../api/PostImg/Envelop/envelop-5.png';
import ENVELOP6 from '../../../api/PostImg/Envelop/envelop-6.png';
import LETTER1 from '../../../api/PostImg/MailForm/letter-1.png';
import NICKNAMEINPUT from '../../../api/PostImg/MailForm/nickname-input.png';
import Pagination from "react-js-pagination";

function PostPage(props) {
    
    const [page, setPage] = useState(1);
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));
    const [mailList, setMailList] = useState([]);
    const [mailCount, setMailCount] = useState(0);
    const [userNickname, setUserNickname] = useState('');
    const [fromNickname, setFromNickname] = useState('');
    const [message, setMessage] = useState('');
    const mailOrder = [ENVELOP1, ENVELOP2, ENVELOP3, ENVELOP4, ENVELOP5, ENVELOP6, ENVELOP1, ENVELOP2, ENVELOP3, ENVELOP4];
    const api_url = 'https://api.ktestone.com';
    const [ShowPopup, setShowPopup] = useState(false);

    const onShareBtnClick = () => {
        alert("링크가 복사됐어요!");
    }

    const logoutHandler = () => {
        localStorage.removeItem("access_token");
        setIsLogin(false);
    }

    const mailRenderer = (list, pg, login) => {
        let mails = [];
        list.map((mail, ix) => {
            mails.push(<div className='post-page-envelop-div' key={`envelop-div-${mail.id}`}>
                            <img
                            src={mailOrder[ix]}
                            alt={`Envelop${ix}`}
                            key={`envelop-img-div-${mail.id}`}
                            onClick={() => {
                                if(login === true) {
                                    getMail(mail.id)
                                }
                            }}
                            className="post-page-envelop"
                        />
                        <p className='post-page-nickname-onletter' key={`envelop-nickname-div-${mail.id}`}>{isLogin ? `${mail.nickname}` : null}</p>
                    </div>
            )
        })
        return(mails.slice(pg*10-10, pg*10+1))
    }

    const eachMail = <div className="popup">
                        <div className="popup-inner">
                            <button onClick={() => setShowPopup(false)} className='popup-close-btn'>X</button>
                            <img src={LETTER1} alt="letter" className='popup-letter-form' />
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
                onChange={(page) => {setPage(page)}} />
        )        
    }

    const getList = useCallback(
        async () => {
            await axios.get(api_url + `/post?userKey=${props.match.params.username}&page=${page}&amount=10`)
            .then(res => {
                setMailList(res.data.rows);
                setMailCount(res.data.rows.length);
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
        getList(props);
        console.log(props.history);
        // props.history.push({
        //     pathname:`/post2021/${props.match.params.username}/postwrite/`,
        // })
        props.history.goBack()
    }, [props, getList, ])
    
    // when user is login
    if (isLogin) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${props.location.state}`;
        return (
            <Fragment>
            {/* <img src={} alt="bg" className='post-page-bg-img' /> */}
            <img src={UPBAR} alt="UPBAR" className="start-page-upbar"/>
            <div className='post-page-bg-div' >
                <img src={MAINTITLE} alt="당신에게 나는 어떤 사람이었나요?" className='post-page-maintitle' />
                <div className="post-page-postbox-div">
                    <img src={POSTBOX} alt="POSTBOX" className="post-page-postbox"/>
                    <h4 className='post-page-whosname'>{`${userNickname}`} 님의<br></br>POST</h4>
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
                    {mailRenderer(mailList, page, isLogin)}
                </div>
                {pageRenderer(page, mailCount)}
                <br></br>
            </div>
            <div className="popup-div">
                {ShowPopup ? 
                    eachMail
                    : null}
            </div>
            <img src={DOWNBAR} alt="DOWNBAR" className="start-page-downbar"/>
            </Fragment>
        )
        //  when user is logout
    } else {
        return (
            <Fragment>
                <img src={UPBAR} alt="UPBAR" className="start-page-upbar"/>
                <div className='post-page-bg-div'>
                    <img src={MAINTITLE} alt="당신에게 나는 어떤 사람이었나요?" className='post-page-maintitle' />
                    <div className="post-page-postbox-div">
                        <img src={POSTBOX} alt="POSTBOX" className="post-page-postbox"/>
                        <h4 className='post-page-whosname'>{`${userNickname}`} 님의<br></br>POST</h4>
                    </div>
                <div className='post-page-btn-div'>
                    <img src={SENDMAIL} alt="Send Mail" className="post-page-send-mail-btn" onClick={() => {
                        props.history.push({
                            pathname:`/post2021/${props.match.params.username}/postwrite/`,
                        })
                    }} />
                    <img src={GOTOMYPOST} alt="Go to My Post" onClick={() => {
                        props.history.push({
                            pathname:`/auth/`,
                        })
                    }} className='post-page-goto-mypost-btn' />
                </div>
                <div className='post-page-mails-div'>
                    {mailRenderer(mailList, page, isLogin)}
                </div>
                {pageRenderer(page, mailCount)}
                <br></br>
            </div>
            <img src={DOWNBAR} alt="DOWNBAR" className="start-page-downbar"/>
            </Fragment>
        )
    }
}

export default withRouter(PostPage);
