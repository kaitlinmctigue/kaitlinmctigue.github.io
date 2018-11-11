// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';



// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.scss';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));