import ReactGA4 from 'react-ga4';

const projectId = "7a4499ca-4644-45ee-9b3f-f63ea3d19e64";

export const _eventSenderGA = (category, action, label) => {
    ReactGA4.event({
        category: category,
        action: action,
        label: label
    });
};

export const onClickLogin = async (windowLocation) => {
    const redirectUri = windowLocation.protocol + "//" + windowLocation.host + windowLocation.pathname;

    const queryString = new URLSearchParams({
        client_id: projectId,
        redirect_uri: redirectUri,
    }).toString();
    
    const loginUrl = `https://bouns.io/login?${queryString}`;

    windowLocation.href = loginUrl;
};

export const verifyAccessToken = async (accessToken) => {
    return await fetch(
        `https://bouns.io/api/jwt-verify?`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: accessToken,
                projectId: projectId,
            })
        }
    ).then((res) => res.json())
}

export const getRefreshedToken = async (refreshToken) => {
    return await fetch(
        `https://bouns.io/api/refresh-token?`,
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refreshToken: refreshToken,
        })
        }
    ).then(async (res) => {
        const result = await res.json();
        const accessToken = result?.accessToken;
        return accessToken;
    });
}