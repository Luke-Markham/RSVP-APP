import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink className="nav-a" exact to="/">Details</NavLink></li>
                    <li><NavLink className="nav-a" to="/ImComing">I'm Coming</NavLink></li>
                    <li><NavLink className="nav-a" to="/WhosGoing">Who's Going</NavLink></li>
                    <li><NavLink className="nav-a" to="/Playlist">Playlist</NavLink></li>
                </ul>
            </nav>
        );
    }
}


export default Navigation