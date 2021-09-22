import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";

export class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="searchcard">
                    <h2>Book Your Pets Home Now!</h2>
                    <input type="text" placeholder="Username" />
                    <input 
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}
                    placeholder="Check Out" />
                    <input type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}
                    placeholder="Check In" />
                    <input type="text" placeholder="City" />
                    <Link to="/results"><button>SEARCH</button></Link>
                    <img style={{
                        margin:-100,
                        position: 'fixed',
                        top:90,
                        left:750,
                        backgroundColor: 'transparent',
                    }}src={'../photoset.svg'} />
            </div>
            </React.Fragment>
        )
    }
}



export default Search
