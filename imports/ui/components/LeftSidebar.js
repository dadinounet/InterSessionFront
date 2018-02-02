import React, { Component } from 'react';
import LeftSideItem from './LeftSideItem';

class LeftSidebar extends Component {
    isLogged = false;
    render() {
        return (
            <div className="left card">
                <LeftSideItem icon="dashboard" label="DASHBOARD" class="item text-center item-no-hover"/>
                <LeftSideItem icon="list" label="Tests list" class="item active"/>
                {this.isLogged ? '' : <LeftSideItem icon="person_add" label="Register" class="item"/>}
                {this.isLogged ? '<LeftSideItem icon="output" label="Logout" class="item" />' : <LeftSideItem icon="input" label="Login" class={"item"}/>}
                { /*this.isLogged ? '' : <LeftSideItem icon="delete" label="Delete" /> */ }
            </div>
        );
    }
}

export default LeftSidebar;