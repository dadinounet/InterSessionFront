import React, { Component } from 'react';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import {connect} from "react-redux";

class Sidebar extends Component {
    isLogged = true;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar">
                <LeftSidebar/>
                {this.props.user.isAuthenticated ? <RightSidebar/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps)(Sidebar);