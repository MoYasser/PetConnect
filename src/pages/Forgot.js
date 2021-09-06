import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Forgot extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="inputcard">
                    <h2>Forgot Password</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="New Password" />
                    <button>RESET</button>
                    <img style={{
                        position: 'fixed',
                        top:415,
                        left:-550,
                        backgroundColor: 'transparent',
                    }}src={'../walkdog.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:373,
                        left:710,
                        backgroundColor: 'transparent',
                    }}src={'../bones.svg'} />
            </div>
            </React.Fragment>
        )
    }
}

export default Forgot
