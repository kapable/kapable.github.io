import React, { Fragment, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../../api/DefaultImg/ktest-nav-logo.png';
import ReactGA from 'react-ga';

function CenterMenu({ page }) {
    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onLogoClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Nav to Home Logo", `${page} page`);
    }, [page]);

    return (
        <Fragment>
            <a href="/" onClick={_onLogoClick}>
                <img src={Logo} alt="ketst-logo" className="nav-logo"/>
            </a>
        </Fragment>
    );
};

export default withRouter(CenterMenu);