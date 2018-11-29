// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// COMPONENTS
import App from './components/App';

// STYLES
import 'normalize.css';
import './styles/app.scss';


ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App>
            loading
        </App>
    </HashRouter>,
    document.getElementById('app'));