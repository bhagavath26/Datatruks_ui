import React, { Component } from 'react';
import '../styles/layout.scss';

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
                            <h1>LOGO</h1>
                        </div>
                        <div className="nav_right">
                            <div className="header_search">
                                {/* <img src={require('./images/serach.svg')} /> */}
                                <input class="input-field" type="text" placeholder="Username" name="usrnm" />
                            </div>
                            <div className="header_notification"></div>
                            <div className="header_profile"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Layout
