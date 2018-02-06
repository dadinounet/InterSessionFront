import React, { Component } from 'react';

class TestConfig extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="col-sm-8 offset-sm-2 align-self-center vcenter">
                    <div className="card">
                        <div className="card-header" data-background-color="blue">
                            <h4 className="title">Github Scanner</h4>
                        </div>
                        <div className="card-content table-responsive">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" required />
                                    <span className="form-highlight"></span>
                                    <span className="form-bar"></span>
                                    <label className="float-label" htmlFor="exampleInputEmail1">Enter your Github link</label>
                            </div>
                            <p><input type="checkbox" className="checkbox"/> Test 1</p>
                            <p><input type="checkbox" className="checkbox"/> Test 2</p>
                            <p><input type="checkbox" className="checkbox"/> Test 3</p>
                            <p><input type="checkbox" className="checkbox"/> Test 4</p>
                            <p className="text-center">
                                <input className="btn btn-primary" type="submit" id="do_login" value="START ANALYSIS" title="Get Started" />
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TestConfig;