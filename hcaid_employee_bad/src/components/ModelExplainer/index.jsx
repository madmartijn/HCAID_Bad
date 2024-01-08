import React from 'react'
import BadTreeD1 from '../../assets/images/BadTree_D1.png'
import BadTreeD2 from '../../assets/images/BadTree_D2.png'
import BadTree from '../../assets/images/BadTree.svg'
import "./index.css";


function ModelExplainer(props) {
    return (
        <div className="howItWorks">
            <h1>How it works!</h1>
            <p>The type of AI-model that we used is DecisionTree. Like the name says this model makes a tree of decisions.</p>
            <p>To get a prediction you got to follow the tree and look at the decision. It's not that hard!</p>
            <p>The first decision made by the tree is to tell you all women will leave.</p>
            <img src={BadTreeD1} alt="First decision of the tree" width="300" height="300"></img>
            <p>The full DecisionTree can be found at the following link:  
                <a href={BadTree} target="_blank">Model</a>
            </p>
        </div >
    )
}

export default ModelExplainer