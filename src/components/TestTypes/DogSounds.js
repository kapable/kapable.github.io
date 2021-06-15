import React from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'
import { Fragment } from 'react'

class DogSounds extends React.Component {
    constructor(props) {
    super(props)
    
    this.state = {
            recordState: null,
            audioData: null,
            stage:1,
            input_img_src: 'https://images.ktestone.com/bigDataTestImages/dogSounds/inputName.png',
            dogName:"",
            onRecord:false,
            resultNum:Math.floor(Math.random() * 183) + 1
        }
    this.pageRenderer = this.pageRenderer.bind(this)
    }

    start = () => {
    this.setState({
        recordState: RecordState.START
        })
    }

    stop = () => {
    this.setState({
        recordState: RecordState.STOP
        })
    }

    onStop = (data) => {
    this.setState({
        audioData: data
        })
    }

    pageRenderer = () => {
        if(this.state.stage === 1) { // The first stage : input dog's name
            let _page = <div className="dog-sounds-input-div">
                            <div>
                                {/* <img src={this.state.input_img_src} className='dog-sounds-input-img' alt="강아지 이름을 입력해주세요."></img> */}
                                <input onChange={function(e){
                                    e.preventDefault()
                                    this.setState({
                                        dogName: e.target.value
                                    })
                                }.bind(this)} className='dog-sounds-input' type="text" placeholder="강아지 이름을 넣어주세요~"/>
                            </div>
                            <div>
                            <img
                            src="https://images.ktestone.com/bigDataTestImages/dogSounds/goToRecord.png"
                            alt="녹음 하러가기"
                            className="go-to-record-img"
                            onClick={function(e){
                                e.preventDefault()
                                if(this.state.dogName) {
                                    this.setState({
                                        stage: 2
                                    })
                                } else {
                                    alert("강아지 이름을 입력해주세요!")
                                }
                            }.bind(this)}/>
                            </div>
                        </div>

            return _page
        } else if (this.state.stage === 2) { // The second stage : recording sounds
            let _page = <Fragment>
                    <div className='dog-sound-record-title-div'>
                        <img
                            src="https://images.ktestone.com/bigDataTestImages/dogSounds/dogSounds-record-title.png"
                            alt="내 강아지의 숨소리, 짖는소리 등을 들려주세요."
                            className='dog-sound-record-title-img'
                            />
                    </div>
                    <div className="dog-sound-record-start-div">
                        <button id='record' className="dog-sound-record-start-btn" onClick={function(e){
                            e.preventDefault()
                            this.setState({
                                onRecord: !this.state.onRecord
                            })
                            if(this.state.onRecord) {
                                this.setState({
                                    recordState: RecordState.STOP,
                                    onRecord: !this.state.onRecord
                                })
                                alert("녹음이 완료되었습니다! 분석하기 버튼을 눌러서 음성을 분석해보세요!")
                            } else {
                                this.setState({
                                    recordState: RecordState.START
                                })
                                setTimeout(function(){
                                    this.setState({
                                        recordState: RecordState.STOP,
                                        onRecord: !this.state.onRecord
                                    })
                                    alert("녹음이 완료되었습니다! 분석하기 버튼을 눌러서 음성을 분석해보세요!")
                                }.bind(this), 5000)
                            }
                        }.bind(this)}>
                        {this.state.onRecord ? "녹음 중지" : "녹음 시작"}
                        </button>
                    </div>
                    <p className="dog-sounds-guidance">* 녹음 시간은 최대 5초예요! *</p>
                    <div className="dog-sound-record-to-anlaysis">
                        <img
                        src="https://images.ktestone.com/bigDataTestImages/dogSounds/goToAnalysis.png"
                        alt="분석 하러가기"
                        className="go-to-analysis-img"
                        onClick={function(e){
                            e.preventDefault()
                            if(this.state.audioData) {
                                this.props.onChangeMode(this.state.dogName, this.state.resultNum, "loading") // go to loading page
                            } else {
                                alert("강아지의 음성을 들려주세요~")
                            }
                        }.bind(this)}/>
                    </div>
                    <p className="dog-sounds-guidance">[ 녹음 시작 ] 버튼을 눌러 다시 녹음할 수 있어요.</p>
                    <div className="dog-sound-record-display-div">
                        <AudioReactRecorder
                            state={this.state.recordState}
                            onStop={this.onStop}
                            backgroundColor='#ededed'
                            foregroudnColor="#B8CD87"
                        />
                        <audio
                            id='audio'
                            className="dog-sounds-display"
                            // controls
                            // src={this.state.audioData ? this.state.audioData.url : null} 
                        ></audio>
                    </div>
                </Fragment>

            return _page
        }
        return this._page
    }

    render() {

        return (
                <Fragment>
                    {this.pageRenderer()}
                </Fragment>
            )
        }
    }

export default DogSounds