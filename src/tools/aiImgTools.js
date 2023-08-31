import dotenv from 'dotenv';

dotenv.config();

export const onAiUpload = async (file) => {
    const presignedPutUrl = await fetch(
        "https://bouns.io/api/file-manager-rpc",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            args: ["bouns-test", "/test/1"],
            operation: "presignedPutObject",
            where: {
                    projectId: process.env.REACT_APP_REACT_APP_BOUNCE_PROJECT_ID,
                    name: "bouns-test",
                },
            }),
        }
    ).then((res) => res.json());

    await fetch(presignedPutUrl, {
        method: "PUT",
        body: file[0],
    });

    if (window.confirm("업로드에 성공했습니다. 파일을 확인하시겠습니까?")) {
        const presignedGetUrl = await fetch(
            "https://bouns.io/api/file-manager-rpc",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    args: ["bouns-test", "/test/1"],
                    operation: "presignedGetObject",
                    where: {
                        projectId: process.env.REACT_APP_REACT_APP_BOUNCE_PROJECT_ID,
                        name: "bouns-test",
                    },
                }),
            }
        ).then((res) => res.json());

        console.log(presignedGetUrl);
    }
};
