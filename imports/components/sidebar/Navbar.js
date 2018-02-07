
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LeftSideItem from './LeftSideItem';


class Navbar extends Component {

    isLogged = true;

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
                                    {this.isLogged ? '' : <li className="nav-item"><Link to={`/register`}><LeftSideItem icon="person_add" label="Register" class="item"/></Link></li>}
                                    {this.isLogged ? <li className="nav-item"><Link to={`/logout`}><LeftSideItem icon="exit_to_app" label="Logout" class="item"/></Link></li> : <li className="nav-item"><Link to={`/login`}><LeftSideItem icon="input" label="Login" class={"item"}/></Link></li>}
                                    <li className="nav-item"><Link to={`/scanner`}><LeftSideItem icon="format_list_bulleted" label="List" class="item"/></Link></li>
                                    <li className="nav-item"><a target="_blank" href="https://paypal.me/itakedemy"><LeftSideItem icon="payment" label="Donate" class="item"/></a></li>
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