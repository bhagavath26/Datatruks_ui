import React, { Component } from 'react';
import '../styles/resetStyle.scss';
import '../styles/global.scss';
import '../styles/simple-grid.scss';
import '../styles/header.scss';

export class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cs_nav">
          <div className="row">
            <div className="col-2">
              <a href="#" className="logo">Logo</a>
            </div>
            <div className="col-10">
              <ul className="headernav">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">APIs</a></li>
                <li><a href="#">Try Demo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard
