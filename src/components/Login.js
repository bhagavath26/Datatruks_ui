import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/login.scss';

export class Login extends Component {
  render() {
    return (
      <React.Fragment>  
        <Header />
        <div className="cs_logincontainer">
          
        </div>
        <Footer />
      </React.Fragment>  
    )
  }
}

export default Login

