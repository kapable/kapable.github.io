import React, { useEffect } from 'react';

    const AdsenseAdvertiser = ({
        className = "adsbygoogle",
        client = "",
        slot = "",
        format = "",
        responsive = "",
        layoutKey = ""
    }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            if (process.env.NODE_ENV !== "production")
                console.error("AdvertiseError", e);
            }
    }, []);
    return (
        <ins class={className}
        style={{ display: "block" }}
        data-ad-client="ca-pub-2382342018701919"
        data-ad-slot="5663135072"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
};

export default AdsenseAdvertiser;