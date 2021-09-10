import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Forgot extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="loginbody">
                <div className="inputcard">
                    <h2>Forgot Password</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="New Password" />
                    <button>RESET</button>
                    <img style={{
                        position: 'fixed',
                        top:580,
                        left:-10,
                        backgroundColor: 'transparent',
                    }}src={'../walkdog.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:535,
                        left:1300,
                        backgroundColor: 'transparent',
                    }}src={'../bonesrot.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:150,
                        left:120,
                        transform: 'rotate(45 140 105)',
                        backgroundColor: 'transparent',
                    }}src={'../bones.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:150,
                        left:1000,
                        transform: 'rotate(45 140 105)',
                        backgroundColor: 'transparent',
                    }}src={'../bonesrot1.svg'} />
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Forgot
