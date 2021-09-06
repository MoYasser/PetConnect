import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Results extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="cardbox">
                    <div className="infocard">
                        <div className="name">
                            <div className="pfp"></div>
                            <h1>Mohamed Yasser</h1>
                        </div>
                        <div className="info">
                            <h2>Age</h2>
                            <p>21</p>
                            <h2>Address</h2>
                            <p>6th October</p>
                            <h2>Fee</h2>
                            <p>100</p>
                            <h2>Rating</h2>
                            <p>4.3</p>
                        </div>
                        <button>CONNECT</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Results
