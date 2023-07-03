import React, { Fragment, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../../api/DefaultImg/ktest-nav-logo.png';
import { _eventSenderGA } from '../../../tools/tools';

function CenterMenu({ page }) {
    const _onLogoClick = useCallback(() => {
        _eventSenderGA("Paging", "Click Nav to Home Logo", `${page} page`);
    }, [page]);

    return (
        <Fragment>
            <a href="/" onClick={_onLogoClick}>
                <img loading="lazy" src={Logo} alt="ketst-logo" className="nav-logo"/>
            </a>
        </Fragment>
    );
};

export default withRouter(CenterMenu);