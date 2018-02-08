import React, {Component} from 'react';
import {requestTest} from "../../helpers/TestsActions";
import {connect} from "react-redux";

class TestConfig extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        github: '',
        test1: true,
        test2: true,
        test3: true,
        test4: true,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitGithubLink(this.state);
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
                                    this.setState({test1: !!event.target.checked})
                                }} checked={this.state.test1 ? "checked" : ""}/>Test 1</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({test2: !!event.target.checked})
                                }} checked={this.state.test2 ? "checked" : ""}/> Test 2</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({test3: !!event.target.checked})
                                }} checked={this.state.test3 ? "checked" : ""}/> Test 3</p>
                                <p><input type="checkbox" className="checkbox" onChange={(event) => {
                                    this.setState({test4: !!event.target.checked})
                                }} checked={this.state.test4 ? "checked" : ""}/> Test 4</p>
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
        test: state.testReducer
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