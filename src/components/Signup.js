import React, { Component } from 'react'
import Navbar from './Navbar'

export class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="signup">
                    <h1>Welcome to <span className="petconnect">Pet</span>Connect</h1>
                    <h2>Sign Up</h2>
                    <img style={{
                        position: 'fixed',
                        top:375,
                        left:600,
                        backgroundColor: 'transparent',
                    }}src={'../paws.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:375,
                        left:1318,
                        backgroundColor: 'transparent',
                    }}src={'../paws.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:245,
                        left:110,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:467,
                        left:110,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:245,
                        left:827,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} />
                    <img style={{
                        position: 'fixed',
                        top:467,
                        left:827,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} />
                    <div className="inputs">
                        <input type="email" name="" id="" placeholder="E-mail" />
                        <input type="date" name="" id="" placeholder="Birthdate"/>
                        <input type="text" placeholder="Username" />
                        <input type="number" name="" id="" placeholder="ID" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <input type="text" placeholder="Occupation"/>
                        <input type="password" name="" id="" placeholder="Re-Enter Password" /> 
                        <input type="text" placeholder="Address" />
                    </div>
                    <button>SIGN UP</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup
