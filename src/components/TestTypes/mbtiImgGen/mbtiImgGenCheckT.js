import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { projectId } from '../../../tools/aiImgTools';

const MbtiImgGenCheckT = () => {
    let history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [images, setImages] = useState();
    // ?worktableId=ff06f601-761b-47fa-b455-9c2b9293c5f2
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
        }
        load();
    }, [load, history, worktableId]);

    return (
        <>
            {images?.map((image, i) => (
                <div key={i}>
                <div>
                    <img src={image} alt='aaa'/>
                </div>
                <div>
                    <a href={image} target="_blank" rel="noopener noreferrer" >
                    {image}
                    </a>
                </div>
                </div>
            ))}
        </>
    );
};

export default MbtiImgGenCheckT;