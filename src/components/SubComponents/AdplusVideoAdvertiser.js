import React from 'react';
import ScriptTag from 'react-script-tag';

const AdplusVideoAdvertiser = () => {
    const text = `(function(){var s=document.querySelector('script[data-playerPro="current"]');s.removeAttribute("data-playerPro");(playerPro=window.playerPro||[]).push({id:"z2I717k6zq5b",after:s,appParams:{"C_NETWORK_CODE":"23131258305", "C_WEBSITE":"ktestone.com"}});})();`
    return (
        <>
            <ScriptTag async src="https://cdn.ad.plus/player/adplus.js"></ScriptTag>
            <ScriptTag data-playerPro="current">{text}</ScriptTag>
        </>
    );
};

export default AdplusVideoAdvertiser;