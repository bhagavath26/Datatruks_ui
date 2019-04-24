import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/login.scss';
import '../styles/formElement.scss';

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cs_logincontainer">
          <div className="login-box">
            <div className="login-left">
              <div className="logo_div">
                <h3>LOGO</h3>
              </div>
              <h3>Super Easy Data Annotations</h3>
              <h6>Invite your team and generate high quality labeled data in minutes</h6>
              <small>By signing up on Dataturks, you agree with our privacy policy and terms.</small>
            </div>
            <div className="login-right">
            <h5>LOGIN</h5>
              <form class="cs_form_md">
                  <div class="cs_form_group">
                    <input id="username" class="form-control" type="text" required />
                    <label for="username">Username</label>
                  </div>
                  <div class="cs_form_group">
                    <input id="password" class="form-control" type="password" required />
                    <label for="password">Password</label>
                  </div>
                  <button className="cs_btnbase cs_btnprimary">LOGIN</button> 
                </form>
                <a href="">Forgot your password?</a>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login

