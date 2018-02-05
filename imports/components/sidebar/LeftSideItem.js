import React, {Component} from 'react';

class LeftSideItem extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <i className="material-icons list-icon">{this.props.icon}</i> {this.props.label}
            </div>
        );
    }
}

export default LeftSideItem;

