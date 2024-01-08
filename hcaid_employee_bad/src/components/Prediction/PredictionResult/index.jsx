import React from 'react'
import "./index.css";


function PredictionResult(props) {
    const prediction = props.predictionResult.prediction;

    return (
        <div className="predicitonResult">
            <h1>Prediciton Results</h1>
                <p>
                Congratulations on using our AI-powered prediction tool to assess whether an employee might leave the company!
                </p>
                <p>
                    <h4>Prediction Result: {prediction ? "True" : "False"}</h4>
                </p>
                <p>
                Please leave us feedback!
                </p>
        </div >
    )
}

export default PredictionResult
