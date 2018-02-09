import React, { Component } from 'react';
import Line from "./Line";

class Progressbar extends Component {
    constructor() {
        super();
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const percent = this.state.percent + 1;
        if (percent > 100) {
            clearTimeout(this.tm);
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 50);
    }

    restart() {
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }

    render() {
        return (
                <div className="col-sm-12">
                    <Line strokeWidth="1" strokeLinecap="butt" percent={this.state.percent} />
                </div>
        );
    }
}

export default Progressbar;