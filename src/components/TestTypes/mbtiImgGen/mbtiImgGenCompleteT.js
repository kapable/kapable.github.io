import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';
import { setOrderPurchased } from '../../../tools/aiImgTools';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const MbtiImgGenComplete = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('orderId').split('/')[0];

    useEffect(() => {
        const setPurchased = async () => {
            await setOrderPurchased(orderId)
        };
        setPurchased();
    }, [orderId]);

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