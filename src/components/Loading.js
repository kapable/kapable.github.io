import React, { Component } from 'react';
import { Fragment } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../loading-animation.json'
import ScriptTag from 'react-script-tag'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

class Loading extends Component {
    render(){
        return(
            <Fragment>
                <ins className="kakao_ad_area" style={{display:"none"}} 
                data-ad-unit    = "DAN-rgfAOJhp6Faz2JFX" 
                data-ad-width   = "300" 
                data-ad-height  = "250"></ins> 
                <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
                <div className="loading" >
                    <Lottie options={defaultOptions} height={120} width={120}/>
                </div>
                
            </Fragment>
        )
    }
}

export default Loading;

// https://github.com/chenqingspring/react-lottie