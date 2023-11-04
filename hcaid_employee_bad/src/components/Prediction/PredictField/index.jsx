import React from 'react'
import "./index.css";



function PredictField(props) {
    return (
        <div className="predictField">
            <label >{props.question}</label>
            <input type="text" onChange={function(event){props.setValue(event.target.value)}}/>
        </div >
    )
}

export default PredictField