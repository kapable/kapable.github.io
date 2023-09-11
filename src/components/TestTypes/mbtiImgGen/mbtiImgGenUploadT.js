import React, { useCallback, useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import ImageUploader from "react-images-upload";
import ProgressBar from "@ramonak/react-progress-bar";
import './MbtiImgGen.css';
import { favaActionUpload, onAiUpload, onCreateOrder } from '../../../tools/aiImgTools';
import { nowFormatter, verifyAccessToken } from '../../../tools/tools';
import { Button, Modal, Progress } from 'antd';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const MbtiImgGenUpload = () => {
    let history = useHistory();
    const [mode, setMode] =useState('upload');
    const [currentUser, setCurrentUser] = useState({});
    const [pictures, setPictures] =useState([]);
    const [uploadedCount, setUploadedCount] = useState(0);
    const [uploadedUrl, setUploadedUrl] = useState([]);
    const [email, setEmail] = useState("");
    const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const minimunImgNumber = 10;

    useEffect(() => {
        // Only logged-In user can access this page
        if(cookies.get('accessToken')) {
            verifyAccessToken(cookies.get('accessToken'))
            .then(res => setCurrentUser(res));
        } else {
            alert('로그인이 필요합니다!');
            history.replace("/");
        };
    }, [history]);

    const onClickUpload = useCallback(() => {
        if(pictures?.length < 1) {
            return alert(`${minimunImgNumber}장 이상 업로드 해주세요!`);
        };
        const now = new Date();
        const nowFormat = nowFormatter(now);
        let aiUrlsCount = 0;
        let aiUlrs = [];
        setIsModalOpen(true);
        setIsUploading(true);
        pictures.map(async (pic, idx) => {
            // ADD FILE NAME WITH USER ID
            const aiUrl = await onAiUpload(pic, nowFormat + '_' + idx);
            if(aiUrl) {
                aiUlrs.push(aiUrl);
                setUploadedCount(aiUrlsCount += 1);
            }
            if(pictures.length === idx + 1) {
                setIsUploading(false);
            }
        });
        setUploadedUrl(aiUlrs);
    }, [pictures, minimunImgNumber]);

    const onDrop = (pictureFiles) => {
        setPictures(pictureFiles);
    };

    const onEmailHandler = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onEmailSubmit = useCallback(() => {
        if(!email) {
            return alert('이메일을 입력해주세요!');
        };
        if(window.confirm(`${email}\n입력하신 이메일이 정확한가요?`)) {
            setIsEmailConfirmed(true);
        }
    }, [email]);

    const onClickPurchase = useCallback(() => {
        setIsPurchased(true);
    }, []);

    const onSubmitHandler = useCallback(async () => {
        if(!email) {
            return alert('이메일을 입력해주세요!');
        };
        if(!isPurchased) {
            return alert('구매 이후 이용해주세요!');
        };
        history.replace("/mbtiImgGenT/complete");
    }, [email, isPurchased, history]);

    const handleOkOrCancel = useCallback(async () => {
        setIsModalOpen(false);
        await favaActionUpload(
            uploadedUrl
        ).then(async (res) => await onCreateOrder(
            currentUser.userId, res.id, "fifteenAiTheme"
        ));
        setMode('email');
    }, [uploadedUrl, currentUser]);

    if(mode === 'upload') {
        return (
            <>
                <img className='mbtiImgGen-upload-upper-banner' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-upload-upper-banner.png' alt='mbtiImgGen-upload-upper-banner' />
                <div className='mbtiImgGen-upload-btn-div' onClick={() => onClickUpload()}>
                    <img className='mbtiImgGen-upload-btn' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-upload-btn.png' alt='mbtiImgGen-upload-btn' />
                </div>
                <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
                    <ProgressBar
                            completed={pictures?.length / 20 * 100}
                            isLabelVisible={false} baseBgColor='#fbf7f2' bgColor='#E62381'
                            height='10px' width='70%' transitionDuration='.3s' margin='1rem auto 1rem'/>
                </div>
                <p>{pictures?.length}/{20}</p>
                {pictures?.length > 20 ? <p>20장의 사진을 넘어섰습니다.</p> : null}
                {pictures?.length < 20 ? (
                    <ImageUploader
                        className="mbtiImgGen-image-uploader"
                        withIcon={false}
                        withPreview={true}
                        onChange={onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                        maxFileSize={5242880}
                        buttonText="+"
                        withLabel={false}
                        fileSizeError="사진 용량이 너무 커요."
                        fileTypeError="지원하지 않는 파일입니다."
                        singleImage={false}
                        fileContainerStyle={{"position":"block", padding: "0", height: '50rem'}}
                        buttonStyles={{"height":"4rem","width":"4rem","borderRadius":"5%","fontSize":"2rem","color":"#606060", "background": "#E8E8E8","border":"none", "boxShadow":"none", "overflow":"visible", "cursor":"pointer"}}
                    />
                ) : (null)}
                <Modal title="사진 업로드" open={isModalOpen} onOk={handleOkOrCancel} onCancel={handleOkOrCancel} footer={isUploading ? null : [
                    <Button onClick={handleOkOrCancel}>확인</Button>
                ]}>
                    <Progress type='circle' percent={uploadedCount / pictures?.length * 100} />
                </Modal>
            </>
        );
    } else if (mode === 'email') {
        return (
            <>
            {/* upload count progress bar */}
            <div className='mbtiImgGen-email-logo-div'>
                <img className='mbtiImgGen-email-logo' src='https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-email-logo.png' alt='mbtiImgGen-email-logo' />
            </div>
            <input
                onChange={onEmailHandler}
                type="email"
                id="email"
                placeholder="이메일을 입력해 주세요."
                className='mbtiImgGen-email-input'
                required />
            <button type="button" onClick={onEmailSubmit} className='mbtiImgGen-email-submit-button'>
                이메일 확인
            </button>
            <p className='mbtiImgGen-email-comment-p'>
                이메일이 다르거나 전송이 불가한<br />이메일의 경우 사진전송이 불가할 수 있습니다.<br />이메일을 다시 한번 확인 부탁드립니다.
            </p>
            {isEmailConfirmed && !isPurchased ? (
                <button type="button" onClick={onClickPurchase} className='mbtiImgGen-email-purchase-button'>
                    결제하기
                </button>
            ) : (
                isPurchased ? (
                    <button type="button" onClick={onSubmitHandler} className='mbtiImgGen-email-purchase-button'>
                        최종 생성 요청
                    </button>
                ) : null
            )}
        </>
        )
    }
};

export default withRouter(MbtiImgGenUpload);