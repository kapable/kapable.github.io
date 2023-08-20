import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';

const MbtiImgGen = () => {
    const [mode, setMode] = useState('intro');

    if(mode === 'intro') {
        return (
            <div className='mbtiImgGen-intro-div'>
                <img className='mbtiImgGen-intro' src='https://images.ktestone.com/introImages/mbtiImgGen-intro.jpg' alt='mbtiImgGen-intro' />
                <div className='mbtiImgGen-intro-btn-div' onClick={() => setMode('guide')}>
                    <img className='mbtiImgGen-intro-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-intro-btn.png' alt='mbtiImgGen-intro-btn' />
                </div>
            </div>
        );
    } else if (mode === 'guide') {
        return (
            <div className='mbtiImgGen-guide-div'>
                <img className='mbtiImgGen-guide' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide.jpg' alt='mbtiImgGen-guide' />
                <Link to='/mbtiImgGen/upload'>
                    <div className='mbtiImgGen-guide-btn-div' onClick={() => setMode('intro')}>
                        <img className='mbtiImgGen-guide-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-guide-btn.png' alt='mbtiImgGen-guide-btn' />
                    </div>
                </Link>
            </div>
        );
    };
};

export default withRouter(MbtiImgGen);