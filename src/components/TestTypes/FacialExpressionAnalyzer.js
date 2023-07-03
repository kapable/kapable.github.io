import React, { Fragment } from "react";
import ImageUploader from "react-images-upload";
import { _eventSenderGA } from "../../tools/tools";

class FacialExpressionAnalyzer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures:null,
            option:"",
            resultNum:Math.floor(Math.random() * 183) + 1,
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles) {
        this.setState({
            pictures: pictureFiles[0]
        });
    };

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
                    label="사진을 올려주세요."
                    labelStyles={{"fontSize":"1.3rem", "margin":"1.5rem auto", "color":"grey"}}
                    fileSizeError="사진 용량이 너무 커요."
                    fileTypeError="지원하지 않는 파일입니다."
                    singleImage={true}
                    buttonStyles={{"height":"7rem","width":"7rem","borderRadius":"100%","fontSize":"3rem","background": "grey","border":"none", "boxShadow":"none", "overflow":"visible", "cursor":"pointer"}}
                />
                <p
                style={{"color":"lightgray", "fontSize":"0.8rem"}}
                >*사진은 절대로 저장되지 않습니다.</p>
                <div className="face-image-option-div">
                    <input type="radio" name="종류" value="dog" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="dog"className="face-image-option">강아지</label>
                    <input type="radio" name="종류" value="cat" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="cat"className="face-image-option">고양이</label>
                    <input type="radio" name="종류" value="human" onClick={function(e){
                        this.setState({
                            option:e.target.value
                        })
                    }.bind(this)} className="face-image-option"/>
                    <label htmlFor="human"className="face-image-option">사람</label>
                </div>
                <div className="face-image-to-anlaysis">
                    <img loading="lazy"
                    src="https://images.ktestone.com/bigDataTestImages/facialExpressionAnalyzer/facial-go-to-analyze.png"
                    alt="분석 하러가기"
                    className="go-to-analysis-img"
                    style={{"margin":"3rem auto 0rem"}}
                    onClick={function(){
                        if(this.state.pictures && this.state.option) { 
                            _eventSenderGA("Paging", "Click Go-to-Analyze Button", "upload page");
                            this.props.onChangeMode(URL.createObjectURL(this.state.pictures), this.state.option, this.state.resultNum, "loading")
                        } else if(this.state.pictures === null || this.state.pictures === undefined) {
                            alert("사진을 업로드 해주세요")
                        } else if (!this.state.option) {
                            alert("강아지 / 고양이 / 사람 중 선택해주세요!")
                        } else {
                            alert("뭔가 문제가 있는디요. 처음부터 다시 시도해주세요.")   
                        }
                    }.bind(this)}
                    />
                </div>
            </Fragment>
            );
    }
}

export default FacialExpressionAnalyzer;