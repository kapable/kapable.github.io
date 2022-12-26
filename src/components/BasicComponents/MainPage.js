import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MAINHEADER from '../../api/DefaultImg/main-header.png';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';
import '../TestTypes/Post2021/Post2021.css';
import '../TestTypes/Post2021/PostPopup.css';
import '../TestTypes/Post2022/Post2022.css';
import KakaoPlusFriendBtn from '../SubComponents/KakaoPlusFriendBtn';

function MainPage(props) {

    return (
        <Fragment>
            <div>
                <img className='main-header' src={MAINHEADER} alt="K-test"/>
            </div>
            <OhterLangIconsMain />
            {/* Go to POST 2022 */}
            {props.lang === 'Kor' ? (
                <Link to='/post2022/' className="main-link-block" key="post2022-banner">
                    <img className="test-main-img" src={`https://images.ktestone.com/main-thumbnail/post2022-thumb.png`} alt="POST-2022" />
                </Link>
            ) : null}

            {/* Main Test Banners(Top) */}
            <div className="main-link-div">
                {props.all_tests_url.map((item, idx)=>{
                    if(idx < 11) {
                        return(
                            <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                <img className="test-main-img" src={item[1]} alt={item[2]}/>
                            </Link>
                        )
                    };
                    return null;
                })}
            </div>
            
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
                {props.all_tests_url.map((item, idx)=>{
                    if(idx >= 11) {
                        return(
                            <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                                <img className="test-main-img" src={item[1]} alt={item[2]}/>
                            </Link>
                        )
                    };
                    return null;
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