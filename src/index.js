import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/layout" component={Layout} />
        </React.Fragment>
    </BrowserRouter>

, document.getElementById('root'));
