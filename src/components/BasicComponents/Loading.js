import React, { Component } from 'react';
import { Fragment } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../loading-animation.json';

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
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render(){
      let ppl_list = ['personalTaro']
      if((window.location.href.includes("localhost") || window.location.href.includes("ktestone.com")) && (!ppl_list.includes(this.props.test))) {
          return(
            <Fragment>
              <div className="loading" >
                  <Lottie options={defaultOptions} height={120} width={120}/>
              </div>
            </Fragment>
          )
        } else if(window.location.href.includes("https://kapable.github.io/")) {
          return(
            <Fragment>
              <div className="loading" >
                  <Lottie options={defaultOptions} height={120} width={120}/>
              </div>
            </Fragment>
          )
        } else if(window.location.href.includes("niair.xyz")) {
          return(
            <Fragment>
              {/* 로딩 중앙 */}
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
