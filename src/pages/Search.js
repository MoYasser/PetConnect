import React, { Component } from 'react';
import Navbar from '../components/Navbar';

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
                    <button>SEARCH</button>
            </div>
            </React.Fragment>
        )
    }
}



export default Search
