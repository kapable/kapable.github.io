import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MAINHEADER from '../../api/DefaultImg/main-header.png';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';
import ARTICLEBANNER from '../../api/DefaultImg/Ktest-funny.png';
import '../TestTypes/Post2021/Post2021.css';
import '../TestTypes/Post2021/PostPopup.css';
import styled from 'styled-components';

function MainPage(props) {
    const MainHeader = styled.img`
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        max-width: 450px;
        height: auto;
        margin-bottom: 1rem;
        ${() => {
            console.log(window.location.pathname);
            return window.location.pathname.split('/').includes('post2021') ? `display:none` : null;
        }}
    `

    return (
        <Fragment>
            <div>
                <MainHeader className='main-header' src={MAINHEADER} alt="K-test"/>
            </div>
            <OhterLangIconsMain />
            {/* Go to Jelling Games Banner */}
            <a
                target='_blank'
                rel="noopener noreferrer"
                href='https://jellinggame.com/'
                className='to-jelling-banner'
            > <img src={JELLINGBANNERKOR} className='test-main-img' alt="go to Jelling games" /> </a>
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

            {/* Go to POST 2021 */}
            <Link to='/post2021/' className="main-link-block" key="article-banner">
                <img className="test-main-img" src={ARTICLEBANNER} alt="POST-2021" />
            </Link>

            {/* Main Test Banners */}
            <div className="main-link-div">
                {props.all_tests_url.map((item)=>(
                    <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                        <img className="test-main-img" src={item[1]} alt={item[2]}/>                               
                    </Link>
                ))}
            </div>
        </Fragment>
        
    )   
}

export default withRouter(MainPage);