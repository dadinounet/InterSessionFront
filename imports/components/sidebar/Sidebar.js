import React, { Component } from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";

class Sidebar extends Component {
    isLogged = true;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar">
                <LeftSidebar/>
                {this.isLogged ? <RightSidebar /> : ''}
            </div>
        )
    }
}

export default Sidebar;