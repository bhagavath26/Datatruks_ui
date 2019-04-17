import React, { Component } from 'react';
import '../styles/layout.scss';
import user from '../images/search.svg';
import notify from '../images/alarm.svg';
import avatar from '../images/avatar.svg';
import dashboard from '../images/dashboard.svg';
import message from '../images/message.svg';
import uielement from '../images/ui_element.svg';

import { ReactComponent as MessageIcn } from '../images/message.svg';
import { ReactComponent as DashIcn } from '../images/dashboard.svg';
import { ReactComponent as ElementIcn } from '../images/ui_element.svg';

export class Layout extends Component {
  render() {
    return (
        <React.Fragment>            
            <h1>Menu</h1>
            <hr/>
            <div className="cs_navbar">
                <div class="container">
                    <div className="navcontainer">
                        <div className="nav_left">
                            <h3>LOGO</h3>
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
            <div className="cs_sidenav">
                <div className="box_left">
                    <ul className="ul_main">
                        <li className="active"><DashIcn /> <span>Dashboard</span></li>
                        <li> <MessageIcn /><span>Message</span></li>
                        <li> <ElementIcn /><span>UI Elements</span></li>
                    </ul>
                </div>
                <div className="box_right"></div>
            </div>
        </React.Fragment>
    )
  }
}

export default Layout
