import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ImageUploader from "react-images-upload";
import ProgressBar from "@ramonak/react-progress-bar";
import './MbtiImgGen.css';
import { favaActionUpload, onAiUpload, onCreateOrder, setSendingEmail } from '../../../tools/aiImgTools';
import { _eventSenderGA, nowFormatter, onClickLogin, verifyAccessToken } from '../../../tools/tools';
import { Button, Modal, Progress } from 'antd';
import { Cookies } from 'react-cookie';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const cookies = new Cookies();

const MbtiImgGenUpload = ({ lang }) => {
    const { query } = useLocation(); // from MyPage yet-purchased order
    const [mode, setMode] = useState(query ? query.premode : 'upload');
    const [orderId, setOrderId] = useState(query ? query.preWorktableId : '');
    const [currentUser, setCurrentUser] = useState({});
    const [pictures, setPictures] =useState([]);
    const [uploadedCount, setUploadedCount] = useState(0);
    const [uploadedUrl, setUploadedUrl] = useState([]);
    const [email, setEmail] = useState("");
    const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const minimunImgNumber = 10;
    const [stateLangs, setStateLangs] = useState([`20장의 사진을 넘어섰습니다.${<br />}새로고침을 눌러 최대 20장까지 업로드해주세요.`, '사진 용량이 너무 커요.', '지원하지 않는 파일입니다.', '사진 업로드', '확인', '이메일을 입력해 주세요.', '결제하기']);

    useEffect(() => {
        if(lang === 'Eng') {
            setStateLangs([`It's over 20 photos.${<br />}Please click Refresh to upload up to 20 pages.`, 'The photo capacity is too large.', 'Unsupported file.', 'Uploading Photos', 'Check', 'Please enter your email.' ,'Payment']);
        } else if (lang === 'JP') {
            setStateLangs([`20枚の写真を超えました。${<br />}リロードを押して最大20枚までアップロードしてください。`, '写真の容量が大きすぎます。', 'サポートされていないファイルです。', '写真アップロード', '確認.', 'メールを入力してください。', '決済する']);
        }
    }, [lang]);

    useEffect(() => {
        // Only logged-In user can access this page
        if(cookies.get('accessToken')) {
            verifyAccessToken(cookies.get('accessToken'))
            .then(res => setCurrentUser(res));
        } else {
            if(lang === '') {
                alert('로그인이 필요합니다!');
            } else if(lang === 'Eng') {
                alert('Log In needed');
            } else if(lang === 'JP') {
                alert('ログインが必要です！');
            }
            onClickLogin(window.location);
        };
    }, [lang]);

    const onClickUpload = useCallback(() => {
        if(pictures?.length < minimunImgNumber) {
            if(lang === '') {
                return alert(`${minimunImgNumber}장 이상 업로드 해주세요!`);
            } else if (lang === 'Eng') {
                return alert(`More than ${minimunImgNumber} images needed!`);
            } else if (lang === 'JP') {
                return alert(`${minimunImgNumber}枚以上アップロードしてください!`);
            }
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
    }, [pictures, minimunImgNumber, lang]);

    const onDrop = (pictureFiles) => {
        setPictures(pictureFiles);
    };

    const onEmailHandler = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onEmailSubmit = useCallback(async () => {
        let checkComment = '';
        let confirmComment = ''
        if (lang === '') {
            checkComment = '이메일을 입력해주세요!';
            confirmComment = '입력하신 이메일이 정확한가요?';
        } else if (lang === 'Eng') {
            checkComment = 'Insert your Email address!';
            confirmComment = 'Is your addrees correct?';
        } else if (lang === 'JP') {
            checkComment = 'メールを入力してください';
            confirmComment = '入力されたメールは正確ですか？';
        }
        if(!email) {
            return alert(checkComment);
        };
        if(window.confirm(`${email}\n${confirmComment}`)) {
            await setSendingEmail(orderId, email)
            .then(res => {
                if(res.status === 201) {
                    _eventSenderGA("Confirming", `Click Fifteen Email Confirm Button`, "upload page");
                    setIsEmailConfirmed(true);
                }
            })
        }
    }, [orderId, email, lang]);

    const emailComment = (lang) => {
        if(lang === '') {
            return (
                <>
                    <button type="button" onClick={onEmailSubmit} className='mbtiImgGen-email-submit-button'>이메일 확인</button>
                    <p className='mbtiImgGen-email-comment-p'>
                        이메일이 다르거나 전송이 불가한<br />이메일의 경우 사진전송이 불가할 수 있습니다.<br />이메일을 다시 한번 확인 부탁드립니다.
                    </p>
                </>
            )
        } else if (lang === 'Eng') {
            return (
                <>
                    <button type="button" onClick={onEmailSubmit} className='mbtiImgGen-email-submit-button'>Check</button>
                    <p className='mbtiImgGen-email-comment-p'>
                        For different or undeliverable emails<br />We may not be able to send your photos. Please check your email again.
                    </p>
                </>
            )
        } else if (lang === 'JP') {
            return (
                <>
                    <button type="button" onClick={onEmailSubmit} className='mbtiImgGen-email-submit-button'>確認</button>
                    <p className='mbtiImgGen-email-comment-p'>
                        メールアドレスが異なる、または途信できないメールの場合<br />写真送信ができない場合があります。メールをもう一度ご確認ください。
                    </p>
                </>
            )
        }
    }

    const handleOkOrCancel = useCallback(async () => {
        setIsModalOpen(false);
        await favaActionUpload(
            uploadedUrl
        ).then(async (res) => {
            setOrderId(res.id);
            await onCreateOrder(
                currentUser.userId, res.id, "fifteenAiTheme"
            )}
        );
        setMode('email');
    }, [uploadedUrl, currentUser]);

    const onImgUploadClick = () => {
        _eventSenderGA("Uploading", `Click Fifteen Upload Button`, "upload page");
    }

    const onPayBtnClick = () => {
        _eventSenderGA("Paging", `Click Fifteen Payment Button`, "upload page");
    }

    if(mode === 'upload') {
        return (
            <>
                <img className='mbtiImgGen-upload-upper-banner' src={`https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen${lang}-upload-upper-banner.png`} alt='mbtiImgGen-upload-upper-banner' />
                <div className='mbtiImgGen-upload-btn-div' onClick={() => onClickUpload()}>
                    <img onClick={onImgUploadClick} className='mbtiImgGen-upload-btn' src={`https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen${lang}-upload-btn.png`} alt='mbtiImgGen-upload-btn' />
                </div>
                <div style={{ maxWidth: "30rem", margin: "0 auto" }}>
                    <ProgressBar
                            completed={pictures?.length / 20 * 100}
                            isLabelVisible={false} baseBgColor='#fbf7f2' bgColor='#E62381'
                            height='10px' width='70%' transitionDuration='.3s' margin='1rem auto 1rem'/>
                </div>
                <p>{pictures?.length}/{20}</p>
                {pictures?.length > 20 ? <p>{stateLangs[0]}</p> : null}
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
                        fileSizeError={stateLangs[1]}
                        fileTypeError={stateLangs[2]}
                        singleImage={false}
                        fileContainerStyle={{"position":"block", padding: "0", height: '50rem'}}
                        buttonStyles={{"height":"4rem","width":"4rem","borderRadius":"5%","fontSize":"2rem","color":"#606060", "background": "#E8E8E8","border":"none", "boxShadow":"none", "overflow":"visible", "cursor":"pointer"}}
                    />
                ) : (null)}
                <Modal title={stateLangs[3]} open={isModalOpen} onOk={handleOkOrCancel} onCancel={handleOkOrCancel} footer={isUploading ? null : [
                    <Button onClick={handleOkOrCancel}>{stateLangs[4]}</Button>
                ]}>
                    <Progress type='circle' percent={parseInt(uploadedCount / pictures?.length * 100)} />
                </Modal>
            </>
        );
    } else if (mode === 'email') {
        return (
            <>
            {/* upload count progress bar */}
            <div className='mbtiImgGen-email-logo-div'>
                <img className='mbtiImgGen-email-logo' src={`https://images.ktestone.com/meta/mbtiImgGen/mbtiImgGen-email-logo.png`} alt='mbtiImgGen-email-logo' />
            </div>
            <input
                onChange={onEmailHandler}
                type="email"
                id="email"
                placeholder={stateLangs[5]}
                className='mbtiImgGen-email-input'
                required />
            {emailComment(lang)}
            {isEmailConfirmed && (
                <a href={`https://ktest.bouns.me/_pay/ktestai-live/?name=fifteenAI&price=6900&worktable_id=${orderId}&buyer_email=${email}&success_url=${encodeURIComponent(window.location.origin + '/fifteenTheme/complete/?orderId='+orderId+'/')}`}>
                <button type="button" onClick={onPayBtnClick}
                    className='mbtiImgGen-email-purchase-button'>
                    {stateLangs[6]}
                </button></a>
            )}
        </>
        )
    }
};

export default withRouter(MbtiImgGenUpload);