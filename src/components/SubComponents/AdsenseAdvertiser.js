import React, { useEffect } from 'react';

    const AdsenseAdvertiser = ({
        className = "adsbygoogle",
        client = "",
        slot = "",
        format = "",
        responsive = "",
    }) => {
    useEffect(() => {
        try {
            if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            if (process.env.NODE_ENV !== "production")
                console.error("AdvertiseError", e);
            }
    }, []);
    return (
        <ins
            className={className}
            style={{ display: "block" }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive}></ins>
    );
};

export default AdsenseAdvertiser;