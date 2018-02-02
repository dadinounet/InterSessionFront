import React, { Component } from 'react';

class HistoriqueItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className="docs">
                    <p className="ndoc">{this.props.test.title}</p>
                    <p className="distr">{this.props.test.desc}</p>
                    <p className="storage">cscds</p>
                </td>
                <td className="docdate">{this.props.testDate}</td>
            </tr>
        )
    }
}

export default HistoriqueItem;