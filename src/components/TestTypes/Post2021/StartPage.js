import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import STARTBTN from '../../../api/PostImg/Background/Start_btn.png';

function Post2021() {
    return (
        <Fragment>
            <div className="start-page-bg-div">
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <img src={"https://images.ktestone.com/PostImg/Object/Postbox_startpg.png"} alt='MAINTITLE' className="start-page-postbox"/>
                <Link to="/auth/" ><img src={STARTBTN} alt="Start-btn" className="start-page-startbtn" /></Link>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </div>
        </Fragment>
    )
}

export default withRouter(Post2021);
