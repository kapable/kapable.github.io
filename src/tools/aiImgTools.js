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
                    projectId: process.env.REACT_APP_BOUNCE_PROJECT_ID,
                    name: "bouns-test",
                },
            }),
        }
    ).then((res) => res.json());
    
    try {
        await fetch(presignedPutUrl, {
            method: "PUT",
            body: file[0],
        });
    } catch (error) {
        return alert("업로드 과정 중 문제가 발생했습니다.");
    };

    try {
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
                        projectId: process.env.REACT_APP_BOUNCE_PROJECT_ID,
                        name: "bouns-test",
                    },
                }),
            }
        ).then((res) => res.json());
        if(presignedGetUrl) {
            alert('사진이 정상정으로 업로드 되었습니다!');
            return presignedGetUrl;
        }
    } catch (error) {
        return alert("업로드 과정 중 문제가 발생했습니다.");
    }
};
