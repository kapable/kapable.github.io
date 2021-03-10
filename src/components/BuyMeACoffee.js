import React, { Component } from 'react';

class BuyMeACoffee extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
              <div style={(window.location.href.includes('personalIncense') || window.location.href.includes('personalTaro')) ? {display: "none"} : {}}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.buymeacoffee.com/ktestone"
                    className="to-buymeacoffee-link"
                ><button
                    className="to-buymeacoffee-btn">
                    转到赞助服务器费用<br></br>
                    Feel free to server costs Sponsorship
                  </button>
                </a>
              </div>
            )
        }
    }

export default BuyMeACoffee;