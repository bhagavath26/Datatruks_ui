import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/resetStyle.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FormElements from './components/FormElements';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/FormElements" component={FormElements} />
            
        </React.Fragment>
    </BrowserRouter>

, document.getElementById('root'));
