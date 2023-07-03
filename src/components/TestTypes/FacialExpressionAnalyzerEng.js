import React, { Fragment } from "react";
import ImageUploader from "react-images-upload";
import ReactGA4 from 'react-ga4';

class FacialExpressionAnalyzerEng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures:null,
            option:"",
            resultNum:Math.floor(Math.random() * 183) + 1,
        }
        this.onDrop = this.onDrop.bind(this);
        this._eventSenderGA = this._eventSenderGA.bind(this);
    }

    onDrop(pictureFiles) {
        this.setState({
            pictures: pictureFiles[0]
        });
    }

    _eventSenderGA(category, action, label){
        ReactGA4.event({
            category: category,
            action: action,
            label: label
        });
    }

    render() {
        return (
            <Fragment>
                <ImageUploader
                    className="face-image-uploader"
                    withIcon={false}
                    withPreview={true}
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                    maxFileSize={5242880}
                    buttonText="+"
                    withLabel={true}
                    label="Upload the photo"
                    labelStyles={{"fontSize":"1.3rem", "margin":"1.5rem auto", "color":"grey"}}
                    fileSizeError="This photo is too big!"
                    fileTypeError="Not supported file!"
                    singleImage={true}
                    buttonStyles={{"height":"7rem","width":"7rem","borderRadius":"100%","fontSize":"3rem","background": "grey","border":"none", "boxShadow":"none", "overflow":"visible", "cursor":"pointer"}}
                />
                <p
                style={{"color":"lightgray", "fontSize":"0.8rem"}}
                >*Photos are never saved.</p>
                <div className="face-image-option-div">
                    <input type="radio" name="종류" value="dog" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="dog"className="face-image-option">Dog</label>
                    <input type="radio" name="종류" value="cat" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="cat"className="face-image-option">Cat</label>
                    <input type="radio" name="종류" value="human" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="human"className="face-image-option">Human</label>
                </div>
                <div className="face-image-to-anlaysis">
                    <img loading="lazy"
                    src="https://images.ktestone.com/bigDataTestImages/facialExpressionAnalyzerEng/facial-go-to-analyze-eng.png"
                    alt="Go to Analize"
                    className="go-to-analysis-img"
                    style={{"margin":"3rem auto 0rem"}}
                    onClick={function(){
                        if(this.state.pictures && this.state.option) { 
                            this._eventSenderGA("Paging", "Click Go-to-Analyze Button", "upload page");
                            this.props.onChangeMode(URL.createObjectURL(this.state.pictures), this.state.option, this.state.resultNum, "loading")
                        } else if(this.state.pictures === null || this.state.pictures === undefined) {
                            alert("Upload your photo")
                        } else if (!this.state.option) {
                            alert("Choose one option among Dog / Cat / Human.")
                        } else {
                            alert("Something wrong. Start from the beginning")   
                        }
                    }.bind(this)}
                    />
                </div>
            </Fragment>
            );
    }
}

export default FacialExpressionAnalyzerEng;