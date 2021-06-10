import React from 'react'

import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'

class DogSounds extends React.Component {
    constructor(props) {
    super(props)

    this.state = {
            recordState: null,
            audioData: null
        }
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

    render() {
        const { recordState } = this.state

        return (
                <div>
                    <AudioReactRecorder
                        state={recordState}
                        onStop={this.onStop}
                        backgroundColor='rgb(255,255,255)'
                    />
                    <audio
                        id='audio'
                        controls
                        src={this.state.audioData ? this.state.audioData.url : null}
                    ></audio>
                    <button id='record' onClick={this.start}>
                        Start
                    </button>
                    <button id='stop' onClick={this.stop}>
                        Stop
                    </button>
                    <button onClick={function(e){
                        e.preventDefault()
                        if(this.state.audioData) {
                            this.props.onChangeMode(1, "loading") // go to loading page // random variable generating
                        } else {
                            alert("강아지의 음성을 들려주세요~")
                        }
                    }.bind(this)}>Submit</button>
                </div>
            )
        }
    }

export default DogSounds