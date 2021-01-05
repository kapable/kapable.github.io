import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../k_test_logo.png'
import MAINHEADER from '../main-header.png'
import TESTS from '../api/TESTS'

class MainPage extends Component{
    constructor(props){
        super(props)
        let i = 0;
        let _all_tests_url = [];
        while (i<TESTS.length) {
        _all_tests_url.push(['/'+TESTS[i].info.mainUrl+'/', TESTS[i].info.mainImage, TESTS[i].info.mainTitle])
        i = i + 1;
        }
        this.state = {
            all_tests_url:_all_tests_url,
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <img className='logo-img' src={Logo} alt="logo"/>   
                    <img className='main-header' src={MAINHEADER} alt="K-test"/>
                </div>
                <div className="main-link-div">
                    {this.state.all_tests_url.map((item)=>(
                        <Link to={item[0]} className="main-link-block" key={item[0].replaceAll('/','')}>
                            <img className="test-main-img" src={item[1]}/>                               
                        </Link>
                    ))}
                </div>
            </Fragment>
            
        )       
    }
}

export default MainPage;