import React, { Component } from 'react';

class TestConfig extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="col-sm-6 offset-sm-1 vcenter">
                    <div className="card">
                        <div className="card-header" data-background-color="blue">
                            <h4 className="title">Github Scanner</h4>
                        </div>
                        <div className="card-content table-responsive">
                            <p>
                                <label htmlFor="github">Enter your Github link</label>
                                <input type="text" id="github" name="github" title="github" />
                            </p>
                            <p><input type="checkbox" className="checkbox"/> Test 1</p>
                            <p><input type="checkbox" className="checkbox"/> Test 2</p>
                            <p><input type="checkbox" className="checkbox"/> Test 3</p>
                            <p><input type="checkbox" className="checkbox"/> Test 4</p>
                            <p>
                                <input type="submit" id="do_login" value="START ANALYSIS" title="Get Started" />
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TestConfig;