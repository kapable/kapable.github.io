import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MAINHEADER from '../../api/DefaultImg/main-header.png';
import OhterLangIconsMain from '../SubComponents/OhterLangIconsMain';
import ARTICLEBANNER from '../../api/DefaultImg/Ktest-funny.png';

class MainPage extends Component{

    render(){
        return (
            <Fragment>
                <div>
                    <img className='main-header' src={MAINHEADER} alt="K-test"/>
                </div>
                <OhterLangIconsMain />
                <Link to='/kfunny/' className="main-link-block" key="article-banner">
                    <img className="test-main-img" src={ARTICLEBANNER} alt="KTEST-Funny" />
                </Link>
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