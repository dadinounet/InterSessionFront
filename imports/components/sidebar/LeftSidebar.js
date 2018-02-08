import React, {Component} from 'react';
import LeftSideItem from './LeftSideItem';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class LeftSidebar extends Component {
    render() {
        return (
            <div className="left card">
                <LeftSideItem icon="dashboard" label="DASHBOARD" class="item text-center item-no-hover"/>
                {this.props.user.isAuthenticated ? '' : <Link to={`/register`}><LeftSideItem icon="person_add" label="Register" class="item"/></Link>}
                {this.props.user.isAuthenticated ? <Link to={`/logout`}><LeftSideItem icon="exit_to_app" label="Logout" class="item"/></Link> : <Link to={`/login`}><LeftSideItem icon="input" label="Login" class={"item"}/></Link>}
                <Link to={`/scanner`}><LeftSideItem icon="format_list_bulleted" label="List" class="item"/></Link>
                <a target="_blank" href="https://paypal.me/itakedemy"><LeftSideItem icon="payment" label="Donate" class="item"/></a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps)(LeftSidebar);