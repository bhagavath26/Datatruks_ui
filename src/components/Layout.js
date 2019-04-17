import React, { Component } from 'react';
import '../styles/layout.scss';
import user from '../images/search.svg';
import notify from '../images/alarm.svg';
import avatar from '../images/avatar.svg';

export class Layout extends Component {
  render() {
    return (
        <React.Fragment>            
            <h1>Menu</h1>
            <hr/>
            <div className="fi_navbar">
                <div class="container">
                    <div className="navcontainer">
                        <div className="nav_left">
                            <h1>LOGO</h1>
                        </div>
                        <div className="nav_right">
                            <div className="header_search">
                                <input class="input-field" type="text" placeholder="Search" name="usrnm" />
                                <img src={user} />
                            </div>
                            <div className="dropdown">
                            <img className="notify-img" src={notify} />
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            </div>
                            <div className="dropdown profile">
                            <img className="notify-img" src={avatar} />
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            </div>
                            <div className="header_profile"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Sidebar</h1>
            <hr/>
            <div className="fi_sidenav">
                <div className="box_left">
                    
                </div>
                <div className="box_right">r</div>
            </div>
        </React.Fragment>
    )
  }
}

export default Layout
