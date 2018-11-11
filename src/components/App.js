import React, { Component } from 'react';
import logo from '../logo.png';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='theme-dark'>
                <div className='base'>
                    <img className='logo' src={logo} />
                    <h1 className='title'>dgsdg</h1>
                </div>
            </div>
        );
    }
}