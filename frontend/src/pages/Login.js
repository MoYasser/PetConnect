import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="loginbody">
                    <div className="inputcard">
                        <h1>Welcome</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>LOGIN</button>
                        <div className="links">
                            <a href="/signup" className="signup">Sign Up Now!</a>
                            <a href="/forgotpass" className="forgot">Forgot Password?</a>
                        </div>
                    </div>
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
            </React.Fragment>
        )
    }
}

export default Login
