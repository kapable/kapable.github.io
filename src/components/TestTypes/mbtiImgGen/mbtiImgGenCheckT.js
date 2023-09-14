import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { checkOrderUserMatched, projectId, setOrderSended } from '../../../tools/aiImgTools';
import { Cookies } from 'react-cookie';
import { urlToFile, verifyAccessToken } from '../../../tools/tools';
import { Button, Col, Modal, Progress, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';
import dayjs from 'dayjs';

const cookies = new Cookies();

const MbtiImgGenCheckT = () => {
    let history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [images, setImages] = useState([]);
    const [downloadCount, setDownloadCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [worktableId] = useState(searchParams.get('worktableId'));
    const bucketName = "bouns-test";
    const actionName = "ktest-fava-worktable";
    const fileManagerName = "bouns-test";

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
            alert('잘못된 경로입니다.');
            history.push('/mbtiImgGenT');
        };
        if(cookies.get('accessToken')) {
            try {
                verifyAccessToken(cookies.get('accessToken'))
                    .then(res => {
                        checkOrderUserMatched(worktableId, res.userId)
                        .then(res => {
                            if(!res.data.matched) {
                                alert('본인의 이미지만 확인할 수 있습니다.')
                                history.push('/mbtiImgGenT');
                            }
                        })
                    })
            } catch (error) {
                alert('로그인이 필요합니다.')
                history.replace("/");
            }
        } else {
            alert('로그인이 필요합니다.')
            history.replace("/");
        };
        load();
    }, [load, history, worktableId]);

    useEffect(() => {
        const setSended = async () => {
            await setOrderSended(worktableId, window.location.href)
        };
        setSended();
    }, [worktableId]);

    const onImagesDownload = useCallback(() => {
        try {
            setIsModalOpen(true);
            images.map((image, idx) => {
                let fileName = idx+1+'_'+dayjs().format('YYYYMMDD_HHmmss')+'.jpg';
                setDownloadCount(idx+1);
                // const theFile = urlToFile(image, fileName)
                // saveAs(image, fileName)
            })
        } catch (error) {
            alert('다운로드 중 에러가 발생했습니다');
        };
    }, [images]);

    return (
        <>  
            {images.length > 0 ? (
                // images fetched successfully
                <div style={{width: "100%", maxWidth:"20rem", margin: "2rem auto"}}>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                        {images.map((image) => (
                            <Col span={12} key={image}>
                                <img src={image} alt='aaa' style={{width:"100%", maxWidth: "30rem"}} />
                            </Col>
                        ))
                        }
                    </Row>
                    <button className='image-check-page-download-button' onClick={onImagesDownload}>이미지 다운로드</button>
                    <Modal title="사진 다운로드" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)} footer={<Button onClick={() => setIsModalOpen(false)}>확인</Button>}>
                        <Progress type='circle' percent={downloadCount / images?.length * 100} />
                        {downloadCount === images.length ? <p>다운로드 완료</p> : null}
                    </Modal>
                </div>
            ) : (
                // in case that images not fetched yet
                <div style={{ margin: "5rem auto", fontSize: "3rem" }}>
                    <LoadingOutlined />
                    <p>loading...</p>
                </div>
            )}
        </>
    );
};

export default MbtiImgGenCheckT;