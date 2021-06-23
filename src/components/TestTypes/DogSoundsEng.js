import React from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'
import { Fragment } from 'react'
import ReactGA from 'react-ga';

class DogSounds extends React.Component {
    constructor(props) {
    super(props)
    
    this.state = {
            recordState: null,
            audioData: null,
            stage:1,
            dogName:"",
            onRecord:false,
            resultNum:Math.floor(Math.random() * 183) + 1
        }
    this.pageRenderer = this.pageRenderer.bind(this);
    this._eventSenderGA = this._eventSenderGA.bind(this);
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

    _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    pageRenderer = () => {
        if(this.state.stage === 1) { // The first stage : input dog's name
            let _page = <div className="dog-sounds-input-div">
                            <h3>Please enter your dog's name!</h3>
                            <div>
                                <input onChange={function(e){
                                    e.preventDefault()
                                    this.setState({
                                        dogName: e.target.value
                                    })
                                }.bind(this)} className='dog-sounds-input' type="text"/>
                            </div>
                            <div>
                            <img
                            src="https://images.ktestone.com/bigDataTestImages/dogSoundsEng/goToRecord.png"
                            alt="Going to Record"
                            className="go-to-record-img"
                            onClick={function(e){
                                e.preventDefault()
                                if(this.state.dogName) {
                                    this.setState({
                                        stage: 2
                                    })
                                } else {
                                    alert("Please enter your dog's name!")
                                }
                            }.bind(this)}/>
                            </div>
                        </div>

            return _page
        } else if (this.state.stage === 2) { // The second stage : recording sounds
            let _page = <Fragment>
                    <div className='dog-sound-record-title-div'>
                        <img
                            src="https://images.ktestone.com/bigDataTestImages/dogSoundsEng/dogSounds-record-title.png"
                            alt="Please let me hear your dog's breathing, barking, etc."
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
                                alert("The recording is complete! Try analyzing your voice by pressing the Analyze button!")
                            } else {
                                this.setState({
                                    recordState: RecordState.START
                                })
                                setTimeout(function(){
                                    this.setState({
                                        recordState: RecordState.STOP,
                                        onRecord: !this.state.onRecord
                                    })
                                    alert("The recording is complete! Try analyzing your voice by pressing the Analyze button!")
                                }.bind(this), 5000)
                            }
                        }.bind(this)}>
                        {this.state.onRecord ? "STOP" : "START"}
                        </button>
                    </div>
                    <p className="dog-sounds-guidance">* The maximum recording time is 5 sec! *</p>
                    <div className="dog-sound-record-to-anlaysis">
                        <img
                        src="https://images.ktestone.com/bigDataTestImages/dogSoundsEng/goToAnalysis.png"
                        alt="Going to Analysis"
                        className="go-to-analysis-img"
                        onClick={function(e){
                            e.preventDefault()
                            if(this.state.audioData) {
                                this._eventSenderGA("Paging", "Click Go-to-Analyze Button", "upload page");
                                this.props.onChangeMode(this.state.dogName, this.state.resultNum, "loading") // go to loading page
                            } else {
                                alert("Please let me hear your dog's breathing, barking, etc.")
                            }
                        }.bind(this)}/>
                    </div>
                    <p className="dog-sounds-guidance">You can restart the recording by pressing [ START ] button.</p>
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