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
import { ReactComponent as UploadIcn } from '../images/upload.svg';

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
            <h1>Toolbar</h1>
            <hr/>
            <div className="cs_toolbar">
                <h5>My Title</h5>
            </div>
            <h1>Card</h1>
            <hr/>
            <div className="cs_card">
                <div className="card_box">
                    <h5>Simple card</h5>
                </div>
            </div>
            <h1>Buttons</h1>
            <hr/>
            <button className="cs_btnbase">Basic</button> 
            <button className="cs_btnbase cs_btnprimary">Primary</button> 
            <button className="cs_btnbase cs_btnprimary"><span className="btn_icn"> <UploadIcn /></span>Button with icon</button>
            <button className="cs_btnbase disabled">Disabled</button>
            <h1>Alert</h1>
            <hr/>
            <div className="cs_alertbox success">
                <h4>Sucess</h4>
                <p>Submitted sucessfully</p>
            </div>
            <div className="cs_alertbox warning">
                <h4>Warning</h4>
                <p>Warning info message</p>
            </div>
            <div className="cs_alertbox danger">
                <h4>Danger</h4>
                <p>Danger alert message</p>
            </div>
        </React.Fragment>
    )
  }
}

export default Layout
