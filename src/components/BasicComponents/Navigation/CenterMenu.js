import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../../api/DefaultImg/ktest-nav-logo.png';

function CenterMenu() {
    return (
        <Fragment>
            <a href="/">
                <img src={Logo} alt="ketst-logo" className="nav-logo"/>
            </a>
        </Fragment>
    );
};

export default withRouter(CenterMenu);