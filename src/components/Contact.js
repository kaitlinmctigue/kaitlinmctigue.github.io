import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Link to='/' className="logo"></Link>
                CONTACT
            </div>
        );
    }
}