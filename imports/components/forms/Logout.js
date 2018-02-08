import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {disconnectUser} from "../../helpers/UserLogoutActions";

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.userLogout(this.props.user.token);
    }

    render() {
        return (<Redirect to={'/login'}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: (token) => {
            dispatch(disconnectUser(token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);