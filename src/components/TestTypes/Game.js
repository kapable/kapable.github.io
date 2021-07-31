import React, { useState } from 'react'
import { Fragment } from 'react'
import { useHistory } from "react-router-dom";

export default function Game(props) {
    // eslint-disable-next-line
    const [mode, setMode] = useState('game')
    let history = useHistory();
    return (
        <Fragment>
            <iframe
                title={props.gameTitle}
                src={props.gameUrl}
                style={{
                    "position":"absolute",
                    "display":"block",
                    "zIndex":"1",
                    "padding":"0",
                    "margin":"0",

                    "top":"0",
                    "left":"0",

                    "width": "100%",
                    "height": "90%"
                }}
                ></iframe>
            <div>
            <button
                onClick={function(e) {
                    e.preventDefault();
                    setMode('main')
                    history.goBack()
                }}
                style={{
                    "position":'relative',
                    "zIndex":"1",
                    "top":"-210px"
                }}
                >메인으로</button>
            </div>
        </Fragment>
    )
}
