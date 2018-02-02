import React, { Component } from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <RightSidebar/>
                <LeftSidebar/>
            </div>
        )
    }
}

export default Sidebar;