import React, { Component } from 'react';
import { Fragment } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../loading-animation.json'
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
  componentDidMount(){
    // if condition for Adsense domain
    if(window.location.href.includes("niair.xyz")){
        if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  render(){
      let ppl_list = ['personalTaro']
      if((window.location.href.includes("localhost") || window.location.href.includes("ktestone.com")) && (!ppl_list.includes(this.props.test))) {
          return(
            <Fragment>
              <ins className="kakao_ad_area" style={{display:"none"}}
              data-ad-unit    = "DAN-M3XcjSrV4BrUGCJG"
              data-ad-width   = "300"
              data-ad-height  = "250"></ins>
              <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
              <div className="loading" >
                  <Lottie options={defaultOptions} height={120} width={120}/>
              </div>
            </Fragment>
          )
        } else if(window.location.href.includes("https://kapable.github.io/")) {
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
        } else if(window.location.href.includes("niair.xyz")) {
          return(
            <Fragment>
              {/* 로딩 중앙 */}
              <ins className="adsbygoogle"
                  style={{display:"block"}}
                  data-ad-client="ca-pub-2382342018701919"
                  data-ad-slot="4650135764"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
              <div className="loading" >
                  <Lottie options={defaultOptions} height={120} width={120}/>
              </div>
            </Fragment>
          )
        } else { // for PPL case for blocking Adfit banner
          return(
            <Fragment>
              <div className="loading" >
                  <Lottie options={defaultOptions} height={120} width={120}/>
              </div>
            </Fragment>
          )
        }
  }
}

export default Loading;

// https://github.com/chenqingspring/react-lottie
