import React, { Component } from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

class Sidebar extends Component {
    isLogged = true;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <LeftSidebar/>
                {this.isLogged ? <RightSidebar/> : ''}
            </div>
        )
    }
}

export default Sidebar;