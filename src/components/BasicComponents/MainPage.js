import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MAINHEADER from '../../api/DefaultImg/main-header-2023.png';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';
import '../TestTypes/Post2021/Post2021.css';
import '../TestTypes/Post2021/PostPopup.css';
import '../TestTypes/Post2022/Post2022.css';
import KakaoPlusFriendBtn from '../SubComponents/KakaoPlusFriendBtn';
import AdsenseAdvertiser from '../SubComponents/AdsenseAdvertiser';

function MainPage(props) {

    return (
        <Fragment>
            <div>
                <img className='main-header' src={MAINHEADER} alt="K-test"/>
            </div>
            <OhterLangIconsMain />

            <AdsenseAdvertiser
                client="ca-pub-2382342018701919"
                slot="2858791575"
                format="auto"
                responsive="true"
                style={{display:"inline-block",width:"100%",maxWidth:"450px"}}
            />

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

            {/* Go to LoveCharacter */}
            <Link to={props.lang === 'Kor' ? '/loveCharacter/' : `/loveCharacter${props.lang}`} className="main-link-block" key="loveCharacter-banner">
                <img className='test-main-img' src={`https://images.ktestone.com/main-thumbnail/loveCharacter${props.lang === 'Kor' ? '' : props.lang}-thumb.png`} alt='loveCharacter' />
            </Link>
            

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

            {/* Fortune Cookie */}
            {props.lang === 'Kor' ? (
                <Link to='/fortuneCookie/' className="main-link-block" key="fortuneCookie-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/fortuneCookie-thumb.png`} alt="POST-2022" />
                </Link>
            ) : null}
            
            {props.lang === 'Kor' ? (
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
            {props.match.path !== '/Kor/'
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
            {props.lang === 'Kor' ? (
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