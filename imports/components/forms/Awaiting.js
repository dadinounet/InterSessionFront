import React, { Component } from 'react';
import Progressbar from "./Progressbar";

class Awaiting extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <h2 id="title-await">Analysis in progress</h2>
                <br/>
                <Progressbar/>
            </div>

        );
    }
}

export default Awaiting;