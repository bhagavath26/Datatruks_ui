import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/resetStyle.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FormElements from './components/FormElements';
import Typography from './components/Typography';
import Layout from './components/Layout';
import Header from './components/Header';
import Login from './components/Login';
import SideBar from './components/SideBar';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/FormElements" component={FormElements} />
            <Route path="/Typography" component={Typography} />
            <Route path="/layout" component={Layout} />
            <Route path="/Header" component={Header} />
            <Route path="/SideBar" component={SideBar} />
            
        </React.Fragment>
    </BrowserRouter>

, document.getElementById('root'));
