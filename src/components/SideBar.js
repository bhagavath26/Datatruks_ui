import React, { Component } from 'react';
import '../styles/resetStyle.scss';
import '../styles/global.scss';
import '../styles/simple-grid.scss';
import '../styles/sideBar.scss';

export class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cs_side_nav">
            <div className="logoBox">
                <a href="#">Logo</a>
            </div>
            <ul className="leftNav">
                <li>
                    <a href="#"><i className="fa fa-home"></i> Home</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-user"></i> User</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-bell"></i> Nothification</a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-cog"></i> Settings</a>
                </li>
            </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard
