import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import POSTBOX from '../../../api/PostImg/Object/Postbox_startpg.png';
import UPBAR from '../../../api/PostImg/Background/up_bg_bar.png';
import DOWNBAR from '../../../api/PostImg/Background/down_bg_bar.png';
import STARTBTN from '../../../api/PostImg/Background/Start_btn.png';

function Post2021() {
    return (
        <Fragment>
            <div className="start-page-bg-div">
                <img src={UPBAR} alt="UPBAR" className="start-page-upbar"/>
                <img src={POSTBOX} alt='MAINTITLE' className="start-page-postbox"/>
                <Link to="/auth" ><img src={STARTBTN} alt="Start-btn" className="start-page-startbtn" /></Link>
                <img src={DOWNBAR} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
}

export default withRouter(Post2021);
