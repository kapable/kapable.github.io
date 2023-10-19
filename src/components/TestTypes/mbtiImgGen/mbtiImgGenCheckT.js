import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { checkOrderUserMatched, projectId, setOrderSended } from '../../../tools/aiImgTools';
import { Cookies } from 'react-cookie';
import { _eventSenderGA, onClickLogin, verifyAccessToken } from '../../../tools/tools';
import { Button, Col, Modal, Progress, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import JSZip from 'jszip';

const cookies = new Cookies();

const MbtiImgGenCheckT = ({ conceptType }) => {
    let history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [images, setImages] = useState([]);
    const [downloadCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [worktableId] = useState(searchParams.get('worktableId'));
    const [lang, setLang] = useState('Kor');
    const [langComments, setLangComments] = useState(['잘못된 경로입니다.', '본인의 이미지만 확인할 수 있습니다.', '메일 확인 후 2시간 이내만 확인할 수 있습니다.', '로그인이 필요합니다.', '이미지 정보를 볼러올 수 없습니다.', '다운로드 중 에러가 발생했습니다', '전체 이미지 다운로드', '다운로드 완료', '사진 다운로드', '확인']);

    const bucketName = "bouns-test";
    const actionName = "ktest-fava-worktable";
    const fileManagerName = "bouns-test";
    const imgCheckableHour = 2000;

    const languageIconRenderer = () => {
        return(
            <div>
                <img onClick={() => setLang("Kor")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/kor-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ 한국어 버전으로 하러가기 ]" />
                <img onClick={() => setLang("Eng")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/usa-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ Go to the English version ]" />
                <img onClick={() => setLang("JP")} loading="lazy" src='https://images.ktestone.com/default/languageIcon/japan-icon.png' style={{ width: "2rem", display: "inline", margin: "0 0.5rem", cursor: "pointer" }} alt="[ 日本語バージョンをやりに行く。 ]" />
            </div>
        )
    };

    useEffect(() => {
        if(lang === 'Eng') {
            setLangComments(['Wrong path', 'You can check only your images', 'You can check your images within 2 hours after the mail checked.', 'LogIn needed', `Can't find image's paths`, 'Error ocurred while downloading', 'Download all images', 'Download complete', 'Download images', 'Okay']);
        } else if (lang === 'JP') {
            setLangComments(['間違ったルートです。', '本人の画像のみ確認できます。', 'メール確認後2時間以内のみ確認できます。', 'ログインが必要です。', '画像情報を読みに来られません。', 'ダウンロード中にエラーが発生しました。', 'すべての画像ダウンロード', 'ダウンロード完了', '写真ダウンロード', '確認.']);
        } else if (lang === 'Kor') {
            setLangComments(['잘못된 경로입니다.', '본인의 이미지만 확인할 수 있습니다.', '메일 확인 후 2시간 이내만 확인할 수 있습니다.', '로그인이 필요합니다.', '이미지 정보를 볼러올 수 없습니다.', '다운로드 중 에러가 발생했습니다', '전체 이미지 다운로드', '다운로드 완료', '사진 다운로드', '확인']);
        }
    }, [lang]);

    const downloadComment = useCallback(() => {
        if(lang === 'Kor') {
            return (
                <p style={{fontSize:"0.7rem", marginBottom: "1rem"}}>전체 다운로드 시 <strong>압축파일 형태</strong>로 다운로드 됩니다.<br /><strong>개별 다운로드</strong>는 사진을 1초 정도 누르면 다운로드 가능합니다</p>
            )
        } else if (lang === 'Eng') {
            return (
                <p style={{fontSize:"0.7rem", marginBottom: "1rem"}}>It is downloaded in <strong>a compressed file format</strong> when it is completely downloaded.<br />You can <strong>download individually</strong> by pressing the photo for about 1 second</p>
            )
        } else if (lang === 'JP') {
            return (
                <p style={{fontSize:"0.7rem", marginBottom: "1rem"}}>フルダウンロード時に<strong>圧縮ファイル形式</strong>でダウンロードされます。<br /><strong>個別ダウンロード</strong>は写真を1秒ほど押すとダウンロードできます。</p>
            )
        }
    }, [lang]);

    const load = useCallback(async () => {
        const favaWorktable = await fetch("https://bouns.io/api/action-rpc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            args: {
            worktableId: worktableId, // FAVA AI 의 worktableId
            },
            where: {
            projectId: projectId,
            name: actionName, // 실행할 액션 이름
            },
        }),
        }).then((res) => res.json());

        const fileManagerObjects = favaWorktable.fileManagerObjects;

        const presignedGetUrls = fileManagerObjects.map(
        async (objectName) => {
            const presignedGetUrl = await fetch(
            "https://bouns.io/api/file-manager-rpc",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                args: [bucketName, objectName],
                operation: "presignedGetObject",
                where: {
                    projectId: projectId,
                    name: fileManagerName,
                },
                }),
            }
            ).then((res) => res.json());

            return presignedGetUrl;
        }
        );

        setImages(await Promise.all(presignedGetUrls));
    }, [worktableId]);

    useEffect(() => {
        if(!worktableId) {
            alert(langComments[0]);
            history.push(`/${conceptType}`);
        };
        if(cookies.get('accessToken')) {
            try {
                verifyAccessToken(cookies.get('accessToken'))
                    .then(res => {
                        checkOrderUserMatched(worktableId, res.userId)
                        .then(resChecked => {
                            if(!resChecked.data.matched) {
                                alert(langComments[1])
                                history.push(`/${conceptType}`);
                            }
                            if(dayjs().diff(dayjs(resChecked.data.imgCheckDate), 'hours') > imgCheckableHour) {
                                alert(langComments[2])
                                history.push(`/${conceptType}`);
                            }
                        })
                    })
            } catch (error) {
                if(window.confirm(langComments[3])) {
                    onClickLogin(window.location);
                }
            }
        } else {
            if(window.confirm(langComments[3])) {
                onClickLogin(window.location);
            }
        };
        load();
    }, [load, history, worktableId, langComments, conceptType]);

    useEffect(() => {
        const setSended = async () => {
            await setOrderSended(worktableId, window.location.href)
        };
        setSended();
    }, [worktableId]);

    const downloadZip = useCallback((file) => {
        const anchor = document.createElement("a");
        anchor.download = `${conceptType}AIImg.zip`;
        const url = URL.createObjectURL(file);
        anchor.href = url;

        anchor.style.display = "none";

        document.body.appendChild(anchor);

        anchor.click();
        anchor.remove();

        URL.revokeObjectURL(url);
    }, [conceptType]);

    const onImagesDownload = useCallback(async (imgs) => {
        if(!imgs || imgs.length === 0) {
            return alert(langComments[4]);
        };
        try {
            _eventSenderGA("Downloading", `Click ${conceptType} Download Button`, "check page");
            const streams = await Promise.all(
                imgs.map(async (url) => {
                    return (
                        await fetch(url, {
                            cache:"no-cache"
                        }).then((r) => r.blob())
                    )
                })
            )
            const zip = new JSZip();
            streams.forEach((blob, index) => {
                zip.file(`images${index}.jpg`, blob);
            })
            const zipFile = await zip.generateAsync({ type: 'blob' });

            downloadZip(zipFile);

        } catch (error) {
            alert(langComments[5]);
        };
    }, [conceptType, downloadZip, langComments]);

    return (
        <>
            <div><img style={{width: "100%", maxWidth: "25rem", margin: "0 auto"}} src="https://images.ktestone.com/aiImgGen/resultCheck/upper-banner.png" alt="upper-side-img" /></div>
            <div style={{display: "flex"}}>
                <div className='image-check-page-left-side-div'>
                    <div className='image-check-page-left-side-div'>
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/left-banner.png" alt="left-side-img" />
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/left-banner.png" alt="left-side-img" />
                    </div>
                    <div className='image-check-page-left-side-div'>
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/left-banner.png" alt="left-side-img" />
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/left-banner.png" alt="left-side-img" />
                    </div>
                </div>
                {images.length >= 0 ? (
                    // images fetched successfully
                    <div style={{width: "100%", maxWidth:"20rem", margin: "0rem 1rem"}}>
                        {languageIconRenderer()}
                        <button className='image-check-page-download-button' onClick={() => onImagesDownload(images)}>{langComments[6]}</button>
                        {downloadComment()}
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                            {images.map((image) => (
                                <Col span={12} key={image}>
                                    <img src={image} alt='aaa' style={{width:"100%", maxWidth: "30rem"}} />
                                </Col>
                            ))
                            }
                        </Row>
                        <Modal title={langComments[8]} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)} footer={<Button onClick={() => setIsModalOpen(false)}>{langComments[9]}</Button>}>
                            <Progress type='circle' percent={downloadCount / images?.length * 100} />
                            {downloadCount === images.length ? <p>{langComments[7]}</p> : null}
                        </Modal>
                    </div>
                ) : (
                    // in case that images not fetched yet
                    <div style={{ margin: "5rem auto", fontSize: "3rem", color: "#E9277D" }}>
                        <LoadingOutlined />
                        <p>loading...</p>
                    </div>
                )}
                <div className='image-check-page-right-side-div'>
                    <div className='image-check-page-right-side-div'>
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/right-banner.png" alt="right-side-img" />
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/right-banner.png" alt="right-side-img" />
                    </div>
                    <div className='image-check-page-right-side-div'>
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/right-banner.png" alt="right-side-img" />
                        <img style={{width: '2rem'}} src="https://images.ktestone.com/aiImgGen/resultCheck/right-banner.png" alt="right-side-img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MbtiImgGenCheckT;