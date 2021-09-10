import React, { Component } from 'react'
import Image from "../images/mainbg.jpg";
import StepsImage from "../images/steps.png";

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <body className="doublebody">
                    <div className="maindiv" style={{ backgroundImage: 'url(' + Image + ')'}}>
                        <label ><span>Pet</span>Connect</label>
                        <p>Leave Your Pet In Responsible Hands!</p>
                        <button>CONNECT</button>
                    </div>
                    <div className="stepsdiv">
                        <label>How Do I <span>Pet</span>Connect?</label>
                        <div className="imageflex">
                    <img className="stepssize" src={StepsImage} />
                    </div>
                        <button className="left">LOGIN</button>
                        <button className="right">REGISTER</button>
                    </div>
                </body>
            </React.Fragment>
        )
    }
}

export default Main
