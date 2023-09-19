import axios from 'axios';
axios.defaults.withCredentials = true;

let server_endpoint = '';
if(process.env.NODE_ENV === 'production') {
    server_endpoint = "https://server.ktestone.com";
} else {
    server_endpoint = "http://localhost:3065";
};
export const projectId = "7a4499ca-4644-45ee-9b3f-f63ea3d19e64";

export const favaActionUpload = async (uploadedUrl, gender) => {
    try {
        const favaActionUploadRes = await fetch(
            "https://bouns.io/api/action-rpc",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    args: {
                        gender: gender,
                        userImageDownUrls: uploadedUrl
                    },
                    where: {
                        projectId: projectId,
                        name: "ktest-fava-create"
                    }
                })
            }
        ).then(res => res.json());
        return favaActionUploadRes;
    } catch (error) {
        return alert("업로드 과정 중 문제가 발생했습니다.");
    };
};

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
                        projectId: projectId,
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
                        projectId: projectId,
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
        axios.post(server_endpoint + "/user", {
            hashId, email
        }, { withCredentials: true })
    } catch (error) {
        return alert("생성 과정 중 문제가 발생했습니다.");
    };
};

export const onCreateOrder = async (hashId, worktableId, productName) => {
    try {
        axios.post(server_endpoint + "/order", {
            hashId, worktableId, productName
        })
    } catch (error) {
        return alert("에러가 발생했습니다.");
    };
};

export const getOrdertList = async (hashId, productCategoryName) => {
    try {
        return await axios.get(server_endpoint + "/order/get-orders", {
            params: {
                hashId, productCategoryName
            },
        });
    } catch (error) {
        return alert("에러가 발생했습니다.");
    };
};

export const setSendingEmail = async (worktableId, sendingEmail) => {
    try {
        return await axios.post(server_endpoint + "/order/set-sendingEmail", {
            worktableId, sendingEmail
        })
    } catch (error) {
        return alert("에러가 발생했습니다.");
    }
}

export const setOrderPurchased = async (worktableId) => {
    try {
        return await axios.post(server_endpoint + "/order/set-purchased", {
            worktableId
        })
    } catch (error) {
        return alert("에러가 발생했습니다.");
    }
}

export const setOrderSended = async (worktableId, sendedUrl) => {
    try {
        return await axios.post(server_endpoint + '/order/set-sended', {
            worktableId, sendedUrl
        });
    } catch (error) {
        // return alert("setOrderSended");
        console.log(error);
    };
};

export const checkOrderUserMatched = async (worktableId, userId) => {
    try {
        return await axios.post(server_endpoint + '/order/check-order-user', {
            worktableId, userId
        });
    } catch (error) {
        // return alert("checkOrderUserMatched");
        console.log(error);
    };
};