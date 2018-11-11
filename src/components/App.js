import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='theme-light'>
                <div className='base'>
                    <div className='header'>
                        <div>
                            <Router>
                                <div>
                                    <ul className='header__links'>
                                        <li>
                                            <Link to="/">Portfolio</Link>
                                            <Link to="/resume">Resume</Link>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>

                                    <Route path="/resume" component={Resume} />
                                    <Route path="/contact" component={Contact} />
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}