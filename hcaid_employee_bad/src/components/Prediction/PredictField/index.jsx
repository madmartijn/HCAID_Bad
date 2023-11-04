import React from 'react'
import "./index.css";



function PredictField(props) {
    return (
        <div className="predictField">
            <label >{props.question}</label>
            <input type="text" />
        </div >
    )
}

export default PredictField