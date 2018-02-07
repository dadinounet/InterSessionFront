import React, {Component} from 'react';
import LeftSideItem from './LeftSideItem';
import {Link} from 'react-router-dom';

class LeftSidebar extends Component {
    isLogged = false;

    render() {
        return (
            <div className="left card">
                <LeftSideItem icon="dashboard" label="DASHBOARD" class="item text-center item-no-hover"/>
                {this.isLogged ? <LeftSideItem icon="list" label="Tests list" class="item active"/> : ''}
                {this.isLogged ? '' : <Link to={`/register`}><LeftSideItem icon="person_add" label="Register" class="item"/></Link>}
                {this.isLogged ? <Link to={`/logout`}><LeftSideItem icon="output" label="Logout" class="item"/></Link> : <Link to={`/login`}><LeftSideItem icon="input" label="Login" class={"item"}/></Link>}
                <Link to={`/scanner`}><LeftSideItem icon="format_list_bulleted" label="List" class="item"/></Link>
                <a target="_blank" href="https://paypal.me/itakedemy"><LeftSideItem icon="payment" label="Donate" class="item"/></a>
            </div>
        );
    }
}

export default LeftSidebar;