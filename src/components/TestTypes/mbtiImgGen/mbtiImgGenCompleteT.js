import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';

const MbtiImgGenComplete = () => {
    return (
        <div className='mbtiImgGen-complete-div'>
            <img className='mbtiImgGen-complete' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-complete.jpg' alt='mbtiImgGen-complete' />
            <Link to='/'>
                <img className='mbtiImgGen-complete-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-complete-btn.png' alt='mbtiImgGen-complete-btn' />
            </Link>
        </div>
    );
};

export default withRouter(MbtiImgGenComplete);