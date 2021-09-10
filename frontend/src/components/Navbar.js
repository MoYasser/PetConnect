import React, { Component } from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
import {View, Button, Text} from 'react-native'
import Signup from '../pages/Signup'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1><a href= "/home">Pet<span className= "petConnect">Connect</span></a></h1>
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/connect">Connect</a>
                    <a href="/about">About</a>
                    <a href="/login">Log In!</a>
                    <a href="/signup">Sign Up
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar
