
import React, { Component } from 'react';

class Navbar extends Component {

    isLogged = false;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <header>
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button className="navbar-toggle btn-hamburger" data-toggle="collapse" data-target="#navbar-collapse">
                                    <i className="material-icons">menu</i>
                                </button>
                                <a href="#" className="navbar-brand"><i className="material-icons">security</i> Security Scanner</a>
                            </div>
                            <div id="navbar-collapse" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><div className="item nav-item"><i className="material-icons list-icon">dashboard</i> Register</div></li>
                                    <li><div className="item nav-item"><i className="material-icons list-icon">input</i> Login</div></li>
                                    {this.isLogged ? <li><div className="item nav-item"><i className="material-icons">history</i> Historique</div></li> : ''}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar;