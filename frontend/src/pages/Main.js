import React, { Component } from 'react'
import Image from "../images/mainbg.jpg";
import StepsImage from "../images/steps.png";
import {Link } from "react-router-dom";

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
                        <Link to="/login"><button className="left">LOGIN</button></Link>
                        <Link to="/signup"><button className="right">REGISTER</button></Link>
                    </div>
                </body>
            </React.Fragment>
        )
    }
}

export default Main
