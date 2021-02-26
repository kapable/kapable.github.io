import React, { Component } from 'react';

class BuyMeACoffee extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
              <div style={window.location.href.includes('personalIncense') ? {display: "none"} : {}}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.buymeacoffee.com/ktestone"
                    className="to-buymeacoffee-link"
                ><button
                    className="to-buymeacoffee-btn">
                      Buy Me A Coffee, Click!
                  </button>
                </a>
              </div>
            )
        }
    }

export default BuyMeACoffee;