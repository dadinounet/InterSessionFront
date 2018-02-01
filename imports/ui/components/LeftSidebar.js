import React, { Component } from 'react';
import LeftSideItem from './LeftSideItem';

class LeftSidebar extends Component {
    isLogged = false;
    render() {
        return (
            <div className="left">
                <LeftSideItem icon="dashboard" label="DASHBOARD" />
                <LeftSideItem icon="list" label="Tests list" />
                {this.isLogged ? '' : <LeftSideItem icon="person_add" label="Register" /> }
                {this.isLogged ? '<LeftSideItem icon="output" label="Logout" />' : <LeftSideItem icon="input" label="Login" /> }
                { /*this.isLogged ? '' : <LeftSideItem icon="delete" label="Delete" /> */ }
            </div>
        );
    }
}

export default LeftSidebar;