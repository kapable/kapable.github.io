import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
} from "react-share";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { _eventSenderGA } from '../../tools/tools';

const ShareGroupDiv = styled.div`
        display: flex;
        justify-content: center;
        margin: 0 auto 2.5rem;
    `;
const URLShareButton = styled.button`
    padding: 0;
    width: 48px;
    height: 48px;
    color: white;
    border-radius: 24px;
    border: 0px;
    margin: 0 0.5rem;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
    background-color: #5996F0;
    &:hover {
        background-color: #B2CCF2;
    }
    `;

const ShareGroup = ({ link, testTitle }) => {

    const _onShareButtonClick = useCallback(() => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "result page");
        alert("링크가 복사됐어요!");
    }, []);

    const _onFacebookButtonClick = useCallback(() => {
        _eventSenderGA("Sharing", "Click Facebook-share Button", "result page");
    }, []);

    const _onTwitterButtonClick = useCallback(() => {
        _eventSenderGA("Sharing", "Click Twitter-share Button", "result page");
    }, []);

    return (
        <ShareGroupDiv>
            <FacebookShareButton url={link} quote={testTitle} hashtag={'#'+testTitle.replace(/\s/g,'')}>
                <FacebookIcon onClick={_onFacebookButtonClick} size={48} round={true} style={{ padding:"0 0.5rem" }}/>
            </FacebookShareButton>
            <TwitterShareButton url={link} title={testTitle}>
                <TwitterIcon onClick={_onTwitterButtonClick} size={48} round={true} style={{ padding:"0 0.5rem" }}/>
            </TwitterShareButton>
            <CopyToClipboard text={link}>
                <URLShareButton onClick={_onShareButtonClick}>URL</URLShareButton>
            </CopyToClipboard>
        </ShareGroupDiv>
    );
};

export default ShareGroup;

ShareGroup.propTypes = {
    link: PropTypes.string.isRequired,
    testTitle: PropTypes.string.isRequired,
};