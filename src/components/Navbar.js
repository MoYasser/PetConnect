import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1><a href= "/home">Pet<span className= "petConnect">Connect</span></a></h1>
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/connect">Connect</a>
                    <a href="/about">About</a>
                    <a href="/login">Log On!</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>
        )
    }
}

export default Navbar
