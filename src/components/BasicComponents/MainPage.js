import React, { Fragment, useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';
import '../TestTypes/Post2021/Post2021.css';
import '../TestTypes/Post2021/PostPopup.css';
import '../TestTypes/Post2022/Post2022.css';
import KakaoPlusFriendBtn from '../SubComponents/KakaoPlusFriendBtn';
import AdsenseAdvertiser from '../SubComponents/AdsenseAdvertiser';
import CategoryIconsMain from '../SubComponents/CategoryIconsMain';
import { _eventSenderGA } from './ShareGroup';

function MainPage(props) {
    const { state } = useLocation();
    const [currentCategory, setCurrentCategory] = useState(state?.currentCategory);
    return (
        <Fragment>
            {/* Language Converting */}
            <OhterLangIconsMain />
            <div>
                <img className='main-header' src={(props.lang === 'Eng' || props.lang === 'JP' || props.lang === 'CN') ? `https://images.ktestone.com/default/main-header-2023${props.lang}.png` : `https://images.ktestone.com/default/main-header-2023${(props.lang === 'Kor' || !props.lang) ? '' : 'Eng'}.png`} alt="K-test"/>
            </div>

            {/* Category Converting */}
            <CategoryIconsMain lang={props?.lang} setCurrentCategory={setCurrentCategory} />

            <AdsenseAdvertiser
                client="ca-pub-2382342018701919"
                slot="2858791575"
                format="auto"
                responsive="true"
                style={{display:"inline-block",width:"100%",maxWidth:"450px"}}
            />

            {/* Go to DOODLING for Kor lang */}
            {(props.lang === 'Kor' || !props.lang) ? (
                <a href={`https://doodling.kr/`} target="_blank" rel='noreferrer noopener'>
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/go-to-doodling-thumb.jpeg`} alt='go-to-doodling' />
                </a>
            ) : null}

            {/* Life Interpreting Luck */}
            {(props.lang === 'Kor' || !props.lang) && (!currentCategory || currentCategory === "saju") ? (
                <Link to='/lifeInterpreting/' className="main-link-block" key="lifeInterpreting-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/lifeInterpreting-thumb.png`} alt="lifeInterpreting" />
                </Link>
            ) : null}

            {/* Lifetime SAJU */}
            {(props.lang === 'Kor' || !props.lang) && (!currentCategory || currentCategory === "saju") ? (
                <Link to='/lifetimeSaju/' className="main-link-block" key="lifetimeSaju-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/lifetimeSaju-thumb.png`} alt="lifetimeSaju" />
                </Link>
            ) : null}

            {/* TodayLuck */}
            {(props.lang === 'Kor' || !props.lang) && (!currentCategory || currentCategory === "saju") ? (
                <Link to='/todayLuck/' className="main-link-block" key="todayLuck-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/todayLuck-thumb.png`} alt="todayLuck" />
                </Link>
            ) : null}

            {/* Main Test Banners(Top) */}
            <div className="main-link-div">
                {props.all_tests_url.slice(0,2).map((item, idx)=>{
                    if(idx % 3 === 0) {
                        return(
                            <Fragment key={item[0].replaceAll('/','')+'fragment'}>
                                <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                    <img className="test-main-img" src={item[1]} alt={item[2]}/>
                                </Link>
                                <AdsenseAdvertiser
                                    key={item[0].replaceAll('/','')+'-adsense'}
                                    client="ca-pub-2382342018701919"
                                    slot="3780210756"
                                    format="auto"
                                    responsive="true"
                                    style={{display:"inline-block",width:"100%",maxWidth:"450px"}}
                                />
                            </Fragment>
                        )
                    } else {
                        return (
                            <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                <img className="test-main-img" src={item[1]} alt={item[2]}/>
                            </Link>
                        )
                    };
                })}
            </div>

            {/* Go to HaGender */}
            {((!currentCategory || currentCategory === "love") && props.lang === 'Kor')
            ? (
                <Link to={'/haGender/'} className="main-link-block" key="haGender-banner">
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/haGender-thumb.png`} alt='haGender' />
                </Link>
            ) : (
                null
            )}

            {/* Go to CoupleCharacter */}
            {((!currentCategory || currentCategory === "love") && props.lang === 'Kor')
            ? (
                <Link to={'/coupleCharacter/'} className="main-link-block" key="coupleCharacter-banner">
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/coupleCharacter-thumb.png`} alt='coupleCharacter' />
                </Link>
            ) : (
                (props.lang === 'Eng' || props.lang === 'CN')
                ? <Link to={`/coupleCharacter${props.lang}`} className="main-link-block" key="coupleCharacter-banner">
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/coupleCharacter${props.lang}-thumb.png`} alt='coupleCharacter' />
                </Link>:null
                
            )}

            {/* Go to LoveCharacter */}
            {((!currentCategory || currentCategory === "love") && props.lang === 'Kor')
            ? (
                <Link to={'/loveCharacter/'} className="main-link-block" key="loveCharacter-banner">
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/loveCharacter-thumb.png`} alt='loveCharacter' />
                </Link>
            ) : (
                (props.lang === 'Eng' || props.lang === 'CN'|| props.lang === 'JP'|| props.lang === 'ES'|| props.lang === 'Ger')
                ? <Link to={`/loveCharacter${props.lang}`} className="main-link-block" key="loveCharacter-banner">
                    <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/loveCharacter${props.lang}-thumb.png`} alt='loveCharacter' />
                </Link> : null
            )}

            {/* Main Test Banners(Middle) */}
            <div className="main-link-div">
                {props.all_tests_url.slice(2,11).map((item, idx)=>{
                    if(idx % 3 === 0) {
                        return(
                            <Fragment key={item[0].replaceAll('/','')+'fragment'}>
                                <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                    <img className="test-main-img" src={item[1]} alt={item[2]}/>
                                </Link>
                                <AdsenseAdvertiser
                                    key={item[0].replaceAll('/','')+'-adsense'}
                                    client="ca-pub-2382342018701919"
                                    slot="3780210756"
                                    format="auto"
                                    responsive="true"
                                    style={{display:"inline-block",width:"100%",maxWidth:"450px"}}
                                />
                            </Fragment>
                        )
                    } else {
                        return (
                            <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                <img className="test-main-img" src={item[1]} alt={item[2]}/>
                            </Link>
                        )
                    };
                })}
            </div>


            {/* RRR Car Test */}
            {(props.lang === 'Kor' || !props.lang) && (!currentCategory || currentCategory === "etc") ? (
                <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/401a25W" className="main-link-block" key="rrr-intro-banner" onClick={() => _eventSenderGA("Paging", "Click RRR Car Thumbnail", "main page")}>
                    <img className="test-main-img" src={`https://images.ktestone.com/introImages/RRR-intro.jpg`} alt="rrr-intro" />
                </a>
            ) : null}

            {/* Fortune Cookie */}
            {props.lang === 'Kor' && (currentCategory === '' || currentCategory === "saju") ? (
                <Link to='/fortuneCookie/' className="main-link-block" key="fortuneCookie-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/fortuneCookie-thumb.png`} alt="fortuneCookie" />
                </Link>
            ) : null}
            
            {props.lang === 'Kor' && (currentCategory === '' || currentCategory === "etc") ? (
                <>
                    {/* Go to FactPok */}
                    <Link to='/factPok/' className="main-link-block" key="factpok-banner">
                        <img className='test-main-img' src={"https://images.ktestone.com/main-thumbnail/factPok-thumb.png"} alt='factPok' />
                    </Link>

                    {/* Go to Acrostic */}
                    <Link to='/acrostic/' className="main-link-block" key="acrostic-banner">
                        <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/acrostic-thumb.png`} alt="Acrostic" />
                    </Link>

                    {/* Go to POST 2021 */}
                    <Link to='/post2021/' className="main-link-block" key="post2021-banner">
                        <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/post2021-thumb.png`} alt="POST-2021" />
                    </Link>
                </>
            ) : null}

            {/* Go to POST 2022 */}
            {props.lang === 'Kor' ? (
                <Link to='/post2022/' className="main-link-block" key="post2022-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/post2022-thumb.png`} alt="POST-2022" />
                </Link>
            ) : null}

            {/* Go to POST 2021 ENG */}
            {props.match.path !== '/Kor/' && (currentCategory === '' || currentCategory === "etc")
            ? (
                <Link to='/post2022Eng/' className="main-link-block" key="post2022Eng-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/post2022Eng-thumb.png`} alt="POST-2021" />
                </Link>
            )
            : null}

            {/* Main Test Banners(Bottom) */}
            <div className="main-link-div">
                {props.all_tests_url.slice(11).map((item, idx)=>{
                    if(idx % 3 === 0) {
                        return(
                            <Fragment key={item[0].replaceAll('/','')+'fragment'}>
                                <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                    <img className="test-main-img" src={item[1]} alt={item[2]}/>
                                </Link>
                                <AdsenseAdvertiser
                                    key={item[0].replaceAll('/','')+'-adsense'}
                                    client="ca-pub-2382342018701919"
                                    slot="3780210756"
                                    format="auto"
                                    responsive="true"
                                    style={{display:"inline-block",width:"100%",maxWidth:"450px"}}
                                />
                            </Fragment>
                        )
                    } else {
                        return (
                            <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                <img className="test-main-img" src={item[1]} alt={item[2]}/>
                            </Link>
                        )
                    };
                })}
            </div>
            
            {/* Go to metapangapply 2021 */}
            {/* <Link to='/metapangapply/' className="main-link-block" key="metapangapply-banner">
                <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/metaPangApply-thumb.png`} alt="POST-2021" />
            </Link> */}
            {/* Go to Jelling Games Banner */}
            {props.lang === 'Kor' && (currentCategory === '' || currentCategory === "etc") ? (
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href='https://jellinggame.com/'
                    className='to-jelling-banner'
                > <img src={JELLINGBANNERKOR} className='test-main-img' alt="go to Jelling games" /> </a>
            ) : null}
            <a
                target='_blank'
                rel="noopener noreferrer"
                href='https://jellinggame.com/'
                className='to-jelling-banner'
            > <img src={JELLINGBANNERENG} className='test-main-img' alt="go to Jelling games" /> </a>

            {/* Go to K-funny articles */}
            {/* <Link to='/kfunny/humor/' className="main-link-block" key="article-banner">
                <img className="test-main-img" src={ARTICLEBANNER} alt="KTEST-Funny" />
            </Link> */}

            {/** Floating Button for KakaoPlusFriend */}
            <KakaoPlusFriendBtn />
        </Fragment>
        
    )   
}

export default withRouter(MainPage);