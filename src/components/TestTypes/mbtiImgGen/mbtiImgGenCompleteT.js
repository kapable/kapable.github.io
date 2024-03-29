import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MbtiImgGen.css';
import { setOrderPurchased } from '../../../tools/aiImgTools';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { _eventSenderGA } from '../../../tools/tools';

const MbtiImgGenComplete = ({ conceptType, lang }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('orderId').split('/')[0];

    useEffect(() => {
        const setPurchased = async () => {
            await setOrderPurchased(orderId)
        };
        setPurchased();
    }, [orderId]);

    const onGoToHomeClick = () => {
        _eventSenderGA("Paging", `Click ${conceptType}-to-home Button`, "complete page");
    }

    return (
        <div className='mbtiImgGen-complete-div'>
            <img className='mbtiImgGen-complete' src={`https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen${lang.route}-complete.jpg`} alt='mbtiImgGen-complete' />
            <Link to={`/${lang.route}`}>
                <img onClick={onGoToHomeClick} className='mbtiImgGen-complete-btn' src={`https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen${lang.route}-complete-btn.png`} alt='mbtiImgGen-complete-btn' />
            </Link>
        </div>
    );
};

export default withRouter(MbtiImgGenComplete);