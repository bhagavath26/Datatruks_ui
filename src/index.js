import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/resetStyle.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Typography from './components/Typography';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/layout" component={Layout} />
            <Route path="/typography" component={Typography} />
        </React.Fragment>
    </BrowserRouter>

, document.getElementById('root'));
