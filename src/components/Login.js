import React, { Component } from 'react'
import Navbar from './Navbar'

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className='login'>
                    <h1>Welcome</h1>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>LOGIN</button>
                    <div className="links">
                        <a href="/signup" className="signup">Sign Up Now!</a>
                        <a href="/forgotpass" className="forgot">Forgot Password?</a>
                    </div>
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

export default Login
