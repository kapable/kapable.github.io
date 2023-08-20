import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';

const MbtiImgGenUpload = () => {
    const [mode, setMode] =useState('email');

    const onClickUpload = () => {
        setMode('email');
    };

    const onClickEmail = () => {

    };

    if(mode === 'upload') {
        return (
            <div className='mbtiImgGen-upload-div'>
                <div className='mbtiImgGen-upload-upper-banner-div'>
                    <img className='mbtiImgGen-upload-upper-banner' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-upload-upper-banner.png' alt='mbtiImgGen-upload-upper-banner' />
                </div>
                <img className='mbtiImgGen-upload' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-upload.jpg' alt='mbtiImgGen-upload' />
                <div className='mbtiImgGen-upload-btn-div' onClick={() => onClickUpload()}>
                    <img className='mbtiImgGen-upload-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-upload-btn.png' alt='mbtiImgGen-upload-btn' />
                </div>
            </div>
        );
    } else if (mode === 'email') {
        return (
            <div className='mbtiImgGen-email-div'>
                <div className='mbtiImgGen-email-logo-div'>
                    <img className='mbtiImgGen-email-logo' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-email-logo.png' alt='mbtiImgGen-email-logo' />
                </div>
                <img className='mbtiImgGen-email' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-email-form.jpg' alt='mbtiImgGen-email' />
                <Link to='/mbtiImgGen/complete'>
                    <div className='mbtiImgGen-email-btn-div' onClick={() => onClickEmail()}>
                        <img className='mbtiImgGen-email-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-email-btn.png' alt='mbtiImgGen-email-btn' />
                    </div>
                </Link>
            </div>
        )
    }
};

export default withRouter(MbtiImgGenUpload);