import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

const Post2022 = ({ language }) => {
    const introImgSrc = "https://images.ktestone.com/PostImg2022/Intro/Intro_.png"

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        });
    };

    return (
        <div className='post2022-intro-main-div'>
            <Link
                to={{
                    pathname: `/postAuth2022/`,
                    state: {
                        language: language
                    },}}
                onClick={() => {
                    _eventSenderGA("Paging", "Click Start-to-auth Button", "post start page");
                }}>
                <img src={introImgSrc} alt="intro-img" className='post2022-intro-img' />
            </Link>
        </div>
    );
};

export default withRouter(Post2022);