import React from 'react'
import BadTreeD1 from '../../assets/images/BadTree_D1.png'
import BadTreeD2 from '../../assets/images/BadTree_D2.png'
import BadTree from '../../assets/images/BadTree.svg'
import "./index.css";


function ModelExplainer(props) {
    return (
        <div className="howItWorks">
            <h1>How it works!</h1>
            <p>On this page is a short explanation of how the app works and how the model generates a result.</p>
            <p>On the predict page, you as user can use our model to see if a employee will leave.</p>
            <p>To use the AI-model you only have to answer the questions on the predict page. With this information our model can make a prediction.</p>
            <p>The type of AI-model that we used is DecisionTree. Like the name says this model makes a tree of decisions.</p>
            <p>To get a prediction you got to follow the tree and look at the decision. It's not that hard!</p>
            <p>The first decision made by the tree is to tell you all women will leave.</p>
            <img src={BadTreeD1} alt="First decision of the tree" width="300" height="300"></img>
            <p>The tree also makes other decision which you can look for yourself.</p>
            <img src={BadTreeD2} alt="Second decision of the tree" width="400" height="400"></img>
            <p>The full DecisionTree can be found at the following link:  
                <a href={BadTree} target="_blank">Model</a>
            </p>
        </div >
    )
}

export default ModelExplainer