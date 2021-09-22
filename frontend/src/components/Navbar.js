import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {View, Button, Text} from 'react-native'
import Signup from '../pages/Signup'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1><a href= "/">Pet<span className= "petConnect">Connect</span></a></h1>
                <div className="links">
                    <Link to="/forgot">Forgot</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/results">Result</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar
