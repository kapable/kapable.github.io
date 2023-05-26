import React, { Fragment, useCallback } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import ReactGA from 'react-ga';

const GoToHomeBtn = ({ page }) => {
    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onButtonClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Nav to Home Logo", `${page} page`);
    }, [page]);

    return (
        <Fragment>
            <div className="go-to-home-btn-container" onClick={_onButtonClick}>
                <a href="/" rel="noopener noreferrer">
                    <HomeOutlined className='bottom-fixed-go-to-home-button' style={{color:"#E71C83"}}/>
                </a>
            </div>
        </Fragment>
    );
};

export default GoToHomeBtn;