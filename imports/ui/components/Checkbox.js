import React, { Component } from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
    }

    render() {
        return (
            <p>
                <input type="checkbox" className="checkbox" /> {this.props.label}
            </p>
        )
    }
}

export default Checkbox;