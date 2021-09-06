import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Image from "../images/aboutbg.jpg";

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <body className="aboutbody" style={{ backgroundImage: 'url(' + Image + ')'}}>
                <Navbar/>
                <div className="textdiv">
                    <h1>What is <span>Pet</span>Connect?</h1>
                    <h2>OUR MISSION:</h2>
                    <p>
                        Our goal is to provide a safe shelter
                        for all animals while their owners
                        are traveling.
                    </p>
                    <h2>HOW DOES IT WORK?</h2>
                    <p>
                        We connect you to thousands of
                        members of the PetConnect Family
                        that are willing to take in your pets
                        at an affordable price!
                    </p>
                </div>
                </body>
            </React.Fragment>
        )
    }
}

export default About
