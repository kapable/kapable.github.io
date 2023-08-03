import ReactGA4 from 'react-ga4';
import axios from 'axios';

const projectId = "7a4499ca-4644-45ee-9b3f-f63ea3d19e64";

export const _eventSenderGA = (category, action, label) => {
    ReactGA4.event({
        category: category,
        action: action,
        label: label
    });
};

export const onClickLogin = async (windowLocation) => {
    const redirectUri = windowLocation.protocol + "//" + windowLocation.host;

    const queryString = new URLSearchParams({
        client_id: projectId,
        redirect_uri: redirectUri,
    }).toString();
    
    const loginUrl = `https://bouns.io/login?${queryString}`;

    windowLocation.href = loginUrl;
};

export const verifyAccessToken = async (accessToken) => {
    // await fetch(
    //     `https://bouns.io/api/jwt-verify?`,
    // {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
	// 	body: JSON.stringify({
    //         token: accessToken,
    //         projectId: projectId,
    //     })
    // }
    // ).then(async (res) => {
    //     console.log(res);
    // });

    axios.post(`https://bouns.io/api/jwt-verify?`, {
        token: accessToken,
        projectId: projectId,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(async (res) => {
        console.log(res);
    });
}

