import React, { Component } from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
    }

    render() {
        return (<div>
                    <input type="checkbox" className="checkbox" ></input> {this.props.label}
                </div>
        )
    }
}

export default Checkbox;