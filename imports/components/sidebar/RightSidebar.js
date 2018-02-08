import React, {Component} from 'react';
import HistoriqueItem from "./HistoriqueItem";
import {connect} from "react-redux";

class RightSidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let previousTest = [{
            "title": "test Php 1",
            "desc": "super test pour votre code php",
            'testDate': "2018-12-05"
        }, {
            "title": "test Php 1",
            "desc": "super test pour votre code php",
            'testDate': "2018-12-05"
        }, {"title": "test Php 1", "desc": "super test pour votre code php", 'testDate': "2018-12-05"}];

        return (
            <div id="rightSidebar" className="right">
                <table className="table">
                    <tbody>
                    <tr className="input-field">
                        <td className="search col-md-9">
                            <div className="inner-addon right-addon">
                                <input className="col-md-12" type="search" placeholder="Search"/>
                                <i className="material-icons">search</i>
                            </div>
                        </td>
                        <th valign="middle" colSpan="2" className="text-center">
                            <i className="material-icons">refresh</i>
                        </th>
                    </tr>
                    <tr>
                        <td colSpan="2" className="type"><i className="material-icons">person</i> {this.props.user.email} </td>
                    </tr>

                    {previousTest.map((item, index) => {
                        return <HistoriqueItem key={index} test={item}/>;
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps)(RightSidebar);
