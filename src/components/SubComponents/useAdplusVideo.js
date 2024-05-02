import { useEffect } from 'react'

const useAdplusVideo = () => {
    useEffect(() => {
        const script0 = document.createElement('script');
        script0.async = true;
        script0.src = "https://cdn.ad.plus/player/adplus.js";

        const script = document.createElement('script');
        script.setAttribute('data-playerPro', 'current');
        script.text = `(function(){
                var s=document.querySelector('script[data-playerPro="current"]');
                s.removeAttribute("data-playerPro");
                (playerPro=window.playerPro||[]).push({
                    id:"z2I717k6zq5b",
                    after:s,
                    appParams:{"C_NETWORK_CODE":"23131258305", "C_WEBSITE":"ktestone.com"}
                });}
            )();`
        document.body.appendChild(script0);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script0);
            document.body.removeChild(script);
        }
    }, []);
};

export default useAdplusVideo;