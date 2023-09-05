import axios from 'axios';
axios.defaults.withCredentials = true;

let server_endpoint = '';
if(process.env.NODE_ENV === 'production') {
    server_endpoint = "https://server.ktestone.com";
} else {
    server_endpoint = "http://localhost:3065";
}

export const onAiUpload = async (file, fileName) => {
    const presignedPutUrl = await fetch(
        "https://bouns.io/api/file-manager-rpc",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            args: ["bouns-test", fileName],
            operation: "presignedPutObject",
            where: {
                    projectId: "7a4499ca-4644-45ee-9b3f-f63ea3d19e64",
                    name: "bouns-test",
                },
            }),
        }
    ).then((res) => res.json());
    
    try {
        await fetch(presignedPutUrl, {
            method: "PUT",
            body: file,
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
                    args: ["bouns-test", fileName],
                    operation: "presignedGetObject",
                    where: {
                        projectId: "7a4499ca-4644-45ee-9b3f-f63ea3d19e64",
                        name: "bouns-test",
                    },
                }),
            }
        ).then((res) => res.json());
        if(presignedGetUrl) {
            return presignedGetUrl;
        }
    } catch (error) {
        return alert("업로드 과정 중 문제가 발생했습니다.");
    }
};

export const onCreateUser = async (hashId, email) => {
    try {
        console.log();
        axios.post(server_endpoint + "/user", {
            hashId, email
        }, { withCredentials: true })
        .then((res) => console.log(res));
    } catch (error) {
        return alert("생성 과정 중 문제가 발생했습니다.");
    };
};