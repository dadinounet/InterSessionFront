import React, {Component} from 'react';
import {requestTest} from "../../helpers/TestsActions";
import {connect} from "react-redux";

class TestConfig extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        github: '',
        TestPhploc: 1,
        TestPhpmd: 1,
        TestSecurityChecker: 1,
        TestPHPmnd: 1,
        TestPhpcodesniffer: 1,
        TestPhpcpd: 1
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitGithubLink(Object.assign({}, this.state, {token: this.props.user.token}));
    };

    render() {
        return (
            <div className="col-sm-8 offset-sm-2 align-self-center vcenter">
                <div className="card">
                    <div className="card-header" data-background-color="blue">
                        <h4 className="title">Github Scanner</h4>
                    </div>
                    <div className="card-content table-responsive">
                        <div className="form-group">
                            <form onSubmit={this.handleSubmit}>
                                <input type="github" className="form-control" id="github-link" required onChange={(event) => {
                                    this.setState({github: event.target.value})
                                }}/>
                                <span className="form-highlight"/>
                                <span className="form-bar"/>
                                <label className="float-label" htmlFor="github-link">Enter your Github link</label>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestPhploc: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestPhploc ? "checked" : ""}/>Test Phploc</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestPhpmd: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestPhpmd ? "checked" : ""}/>Test Phpmd</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestSecurityChecker: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestSecurityChecker ? "checked" : ""}/>Test SecurityChecker</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestPHPmnd: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestPHPmnd ? "checked" : ""}/>Test PHPmnd</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestPhpcodesniffer: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestPhpcodesniffer ? "checked" : ""}/>Test Phpcodesniffer</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({TestPhpcpd: !!event.target.checked ? 1 : 0})
                                }} checked={this.state.TestPhpcpd ? "checked" : ""}/>Test Phpcpd</p>
                                <p className="text-center">
                                    <input className="btn btn-primary" type="submit" id="do_login" value="START ANALYSIS" title="Get Started"/>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.testReducer,
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitGithubLink: (testInfo) => {
            dispatch(requestTest(testInfo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestConfig);