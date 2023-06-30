import React, { Fragment } from "react";
import ImageUploader from "react-images-upload";
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';

class FacialExpressionAnalyzerCN extends React.Component {
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
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
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
                    label="请上传照片。"
                    labelStyles={{"fontSize":"1.3rem", "margin":"1.5rem auto", "color":"grey"}}
                    fileSizeError="照片容量太大。"
                    fileTypeError="不支持的文件 。"
                    singleImage={true}
                    buttonStyles={{"height":"7rem","width":"7rem","borderRadius":"100%","fontSize":"3rem","background": "grey","border":"none", "boxShadow":"none", "overflow":"visible", "cursor":"pointer"}}
                />
                <p
                style={{"color":"lightgray", "fontSize":"0.8rem"}}
                >*照片绝对保存不了。</p>
                <div className="face-image-option-div">
                    <input type="radio" name="종류" value="dog" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="dog"className="face-image-option">小狗</label>
                    <input type="radio" name="종류" value="cat" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="cat"className="face-image-option">猫</label>
                    <input type="radio" name="종류" value="human" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="human"className="face-image-option">人儿</label>
                </div>
                <div className="face-image-to-anlaysis">
                    <img loading="lazy"
                    src="https://images.ktestone.com/bigDataTestImages/facialExpressionAnalyzerCN/facial-go-to-analyze-CN.png"
                    alt="去分析"
                    className="go-to-analysis-img"
                    style={{"margin":"3rem auto 0rem"}}
                    onClick={function(){
                        if(this.state.pictures && this.state.option) {
                            this._eventSenderGA("Paging", "Click Go-to-Analyze Button", "upload page");
                            this.props.onChangeMode(URL.createObjectURL(this.state.pictures), this.state.option, this.state.resultNum, "loading")
                        } else if(this.state.pictures === null || this.state.pictures === undefined) {
                            alert("请上传照片")
                        } else if (!this.state.option) {
                            alert("请从狗/猫/人中选择！")
                        } else {
                            alert("有什么问题。 请从头再来。")   
                        }
                    }.bind(this)}
                    />
                </div>
            </Fragment>
            );
    }
}

export default FacialExpressionAnalyzerCN;