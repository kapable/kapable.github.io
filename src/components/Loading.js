import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as loading from '../loading-animation.json'

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
            <div className="loading" >
                <Lottie options={defaultOptions} height={120} width={120}/>
            </div>
        )
    }
}

export default Loading;

// https://github.com/chenqingspring/react-lottie