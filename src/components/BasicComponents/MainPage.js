import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MAINHEADER from '../../api/DefaultImg/main-header.png';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import ARTICLEBANNER from '../../api/DefaultImg/Ktest-funny.png';
import JELLINGBANNERKOR from '../../api/DefaultImg/go-to-jelling-kor.png';
import JELLINGBANNERENG from '../../api/DefaultImg/go-to-jelling-eng.png';

class MainPage extends Component{

    render(){
        return (
            <Fragment>
                <div>
                    <img className='main-header' src={MAINHEADER} alt="K-test"/>
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
                <Link to='/kfunny/humor/' className="main-link-block" key="article-banner">
                    <img className="test-main-img" src={ARTICLEBANNER} alt="KTEST-Funny" />
                </Link>

                {/* Main Test Banners */}
                <div className="main-link-div">
                    {this.props.all_tests_url.map((item)=>(
                        <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                            <img className="test-main-img" src={item[1]} alt={item[2]}/>                               
                        </Link>
                    ))}
                </div>
            </Fragment>
            
        )       
    }
}

export default MainPage;