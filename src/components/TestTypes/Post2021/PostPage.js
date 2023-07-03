import axios from 'axios';
import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled, { createGlobalStyle } from 'styled-components';
import ScriptTag from 'react-script-tag'
import Pagination from "react-js-pagination";
import ReactGA4 from 'react-ga4';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';

function PostPage(props) {
    const lang = props.language;
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

    const [upbarBtnImg, setUpbarBtnImg] = useState(``);
    const [mainTitleImg, setMainTitleImg] = useState(``);
    const postBoxImg = "https://images.ktestone.com/PostImg/Object/Postbox.png"
    const [sendMailImg, setSendMailImg] = useState(``);
    const [shareMyPostImg, setShareMyPostImg] = useState(``);
    const [goToMyPostImg, setGoToMyPostImg] = useState(``);
    const nickNameInput = "https://images.ktestone.com/PostImg/MailForm/nickname-input.png";

    // about Coupang Button
    const [coupangCookies, setCoupangCookie] = useCookies(['coupang']);
    const [isOpened, setIsOpened] = useState(false);
    let adProb = 1.1 >= Math.random();
    const coupangLink = "https://link.coupang.com/a/l7x1e";

    const onCoupangButtonClick = () => {
        const cookieAges = (24 - new Date().getHours()) <= 12 ? 60*60*(24 - new Date().getHours()) : 60*60*12;
        _eventSenderGA("Paging", "Click go-to-Coupang Button", "post page");
        setIsOpened(true);
        return setCoupangCookie('coupang', true, { path: '/', maxAge: cookieAges, secure: true });
    }

    const affiliateRenderer = (comment) => (
        <div className='post-adCover-div-1'>
            <div className='post-adCover-div-2'>
                <a href={coupangLink} target="_blank" rel='noreferrer noopener'>
                    <button className='post-result-coupang-button' type="primary" shape='round' style={{ width: '15rem', height: '3.5rem'}} onClick={onCoupangButtonClick}>
                        쿠팡 보고 편지 {comment}<br /><p style={{ fontSize: '0.5rem', color: 'lightgray' }}>원치 않을 경우 뒤로 가기를 눌러주세요</p>
                    </button>
                </a>
                <p className='post-result-coupang-comment'>* 이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.</p>
            </div>
        </div>
    )
    
    function _eventSenderGA(category, action, label){
        ReactGA4.event({
            category: category,
            action: action,
            label: label
        });
    }

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
        _eventSenderGA("Sharing", "Click Copy-link Button", "post page");
        lang === `Eng` ? alert("link copied to clipboard!") : alert("링크가 복사됐어요!")
    }

    const onPostToKtestBtnClick = () => {
        _eventSenderGA("Paging", "Click Post-to-Ktest Button", "post page");
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
                            <img loading="lazy"
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
            <div className='post-page-null-maillist'>{lang === `Eng` ? `Nothing...` : `텅! 비었어요...`}</div>
        )
    }

    const metaTagRenderer = () => {
            return (
                <Helmet>
                    {/* <!-- Primary Meta Tags --> */}
                    <title>퍼스널 우체통</title>
                    <meta name="title" content="퍼스널 우체통 - 케이테스트"/>
                    <meta name="description" content="나만의 퍼스널 우체통" data-react-helmet="true"/>
                    <link rel="main-url" href="https://ktestone.com/kapable.github.io/post2021/"/>

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://ktestone.com/kapable.github.io/post2021/"/>
                    <meta property="og:title" content="퍼스널 우체통 - 케이테스트"/>
                    <meta property="og:description" content="나만의 퍼스널 우체통"/>
                    <meta property="og:image" content="https://images.ktestone.com/meta/post2021/post2021-meta.png"/>
                    <meta property="og:image:alt" content="퍼스널 우체통 - 케이테스트" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/post2021/"/>
                    <meta property="twitter:title" content="퍼스널 우체통 - 케이테스트"/>
                    <meta property="twitter:description" content="나만의 퍼스널 우체통"/>
                    <meta property="twitter:image" content="https://images.ktestone.com/meta/post2021/post2021-meta.png"/>
                    <meta property="twitter:image:alt" content="퍼스널 우체통 - 케이테스트" />
                </Helmet>
            )
    }

    const eachMail = <div className="popup">
                        <div className="popup-inner">
                            <button onClick={() => setShowPopup(false)} className='popup-close-btn'>X</button>
                            <img loading="lazy"
                                src={`https://images.ktestone.com/PostImg/MailForm/letter-${letterOrder[mailNum]}.png`}
                                alt="letter"
                                className='popup-letter-form' />
                            <h4 className="popup-head">{`${userNickname}`}{lang === `Eng` ? '' : '에게'}</h4>
                            <p className="popup-message">{message}</p>
                            <img loading="lazy" src={nickNameInput} className='popup-nickname-input' alt="popup-nickname-input"/>
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
            _eventSenderGA("Viewing", "Click Each-mail Button", "post page");
            setFromNickname(res.data.nickname);
            setMessage(res.data.text);
            setShowPopup(true);
        })
    }

    useEffect(() => {
        setIsLogin(props.location.state === localStorage.getItem("access_token"));
        getList();
        if(props.language === `Kor`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/Background/up_bg_bar.png");
            setMainTitleImg("https://images.ktestone.com/PostImg/Background/main_title_2022.png");
            setSendMailImg("https://images.ktestone.com/PostImg/Button/send-mail-btn.png");
            setShareMyPostImg("https://images.ktestone.com/PostImg/Button/share-mypost-btn.png");
            setGoToMyPostImg("https://images.ktestone.com/PostImg/Button/go-to-mypost-btn.png");
        } else if(props.language === `Eng`) {
            setUpbarBtnImg("https://images.ktestone.com/PostImg/English/Button/up_bg_bar.png");
            setMainTitleImg("https://images.ktestone.com/PostImg/English/Background/main_title.png");
            setSendMailImg("https://images.ktestone.com/PostImg/English/Button/send-mail-btn.png");
            setShareMyPostImg("https://images.ktestone.com/PostImg/English/Button/share-mypost-btn.png");
            setGoToMyPostImg("https://images.ktestone.com/PostImg/English/Button/go-to-mypost-btn.png");
        }
    }, [props, getList,])
    
    // when user is login
    if (isLogin) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        return(
            <div className='post-page'>
                {metaTagRenderer()}
                <GlobalStyle />
                <img loading="lazy" src={upbarBtnImg} alt="UPBAR" className="start-page-upbar"/>
                <PageBackground className='post-page-bg-div' >
                    <img loading="lazy" src={mainTitleImg} alt="당신에게 나는 어떤 사람인가요?" className='post-page-maintitle' />
                    <div className="post-page-postbox-div">
                        <img loading="lazy" src={postBoxImg} alt="POSTBOX" className="post-page-postbox"/>
                        <h4 className='post-page-whosname'>{`${userNickname}`} {lang === `Eng` ? `'s` : `님의`}<br></br>POST</h4>
                        <h4 className='post-page-mailcount'>{mailCount}{lang === `Eng` ? ` letters` : `개의 편지`}</h4>
                    </div>
                    {/* Coupang or Mails */}
                    {adProb && (!isOpened || !coupangCookies) && false
                    ? affiliateRenderer('보기')
                    :<>
                        <div className='post-page-btn-div'>
                            <img loading="lazy" src={sendMailImg} alt="Send Mail" className="post-page-send-mail-btn" onClick={() => {
                                _eventSenderGA("Paging", "Click Post-to-write Button", "post page");
                                if(lang === `Eng`) {
                                    props.history.push({
                                        pathname:`/post2022Eng/${props.match.params.username}/postwrite/`,
                                    })
                                } else {
                                    props.history.push({
                                        pathname:`/post2021/${props.match.params.username}/postwrite/`,
                                    })
                                }
                            }} />
                            <CopyToClipboard text={`https://ktestone.com/kapable.github.io/post2021/${props.match.params.username}/`}>
                                <img loading="lazy" src={shareMyPostImg} alt="Share My Post" onClick={onShareBtnClick} className='post-page-share-mypost-btn' />
                            </CopyToClipboard>
                        </div>             
                        <div className='post-page-mails-div'>
                            {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                        </div>
                        {pageRenderer(page, mailCount)}
                    </>}
                    <br></br>
                </PageBackground>
                <div className="popup-div">
                    {ShowPopup ? 
                        eachMail
                        : null}
                </div>
                {adTagRenderer()}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://ktestone.com/kapable.github.io/Kor/"}
                    onClick={onPostToKtestBtnClick}
                ><img loading="lazy" src={"https://images.ktestone.com/PostImg/Button/post-to-ktest-btn.jpeg"} alt="Go To Ktest >> " className="post-to-ktest-btn" /></a>
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        )
        //  when user is logout
    } else {
        return(
            <div className='post-page'>
                {metaTagRenderer()}
                <GlobalStyle />
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <div className='post-page-bg-div'>
                    <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/main_title.png"} alt="당신에게 나는 어떤 사람이었나요?" className='post-page-maintitle' />
                    <div className="post-page-postbox-div">
                        <img loading="lazy" src={postBoxImg} alt="POSTBOX" className="post-page-postbox"/>
                        <h4 className='post-page-whosname'>{`${userNickname}`} {lang === `Eng` ? `'s` : `님의`}<br></br>POST</h4>
                        <h4 className='post-page-mailcount'>{mailCount}{lang === `Eng` ? ` letters` : `개의 편지`}</h4>
                    </div>
                    {/* Coupang or Mails */}
                    {adProb && (!isOpened || !coupangCookies) && false
                    ? affiliateRenderer('보내기')
                    :<>
                    <div className='post-page-btn-div'>
                        <img loading="lazy" src={sendMailImg} alt="Send Mail" className="post-page-send-mail-btn" onClick={() => {
                            _eventSenderGA("Paging", "Click Post-to-write Button", "post page");
                            if(lang === `Eng`) {
                                props.history.push({
                                    pathname:`/post2022Eng/${props.match.params.username}/postwrite/`,
                                })
                            } else {
                                props.history.push({
                                    pathname:`/post2021/${props.match.params.username}/postwrite/`,
                                })
                            }
                        }} />
                        <img loading="lazy" src={goToMyPostImg} alt="Go to My Post" onClick={() => {
                            _eventSenderGA("Paging", "Click Post-to-auth Button", "post page");
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
                        }} className='post-page-goto-mypost-btn' />
                    </div>
                    <div className='post-page-mails-div'>
                        {mailList.length === 0 ? nullMailRenderer() : mailRenderer(mailList, isLogin)}
                    </div>
                        {pageRenderer(page, mailCount)}
                        <br></br>
                    </>}
                </div>
                
                {adTagRenderer()}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://ktestone.com/kapable.github.io/Kor/"}
                    onClick={onPostToKtestBtnClick}
                ><img loading="lazy" src={"https://images.ktestone.com/PostImg/Button/post-to-ktest-btn.jpeg"} alt="Go To Ktest >> " className="post-to-ktest-btn" /></a>
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        )
    }
}

export default withRouter(PostPage);
