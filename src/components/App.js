import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';



export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dark: false,
            work: true
        };

        this.work = [
            {
                'id': 0,
                'title': 'Diverse Computing Rebrand',
                'tags': [],
                'img': ''
            }
        ];

        this.changeTheme = this.changeTheme.bind(this);
        this.workOrPlay = this.workOrPlay.bind(this);
    }

    changeTheme() {
        this.setState({ dark: !this.state.dark });
    }

    workOrPlay() {
        this.setState({ work: !this.state.work });
    }

    render() {
        return (
            <div className={(this.state.dark ? 'theme-dark' : 'theme-light')}>
                <div className='base'>
                    <Router>
                        <div>
                            <div className='header d-flex flex-column flex-sm-row'>
                                <ul className='header__utility col'>
                                    <li>
                                        <a className="theme-toggle link" onClick={this.changeTheme}>Toggle Colors</a>
                                    </li>
                                </ul>
                                <ul className='header__links col'>
                                    <li>
                                        <Link className="link" to="/">Portfolio</Link>
                                        <Link className="link" to="/resume">Resume</Link>
                                        <Link className="link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="body d-flex flex-column flex-sm-row">
                                <div className="col">
                                    <Route exact path="/" component={Portfolio} />
                                    <Route path="/resume" component={Resume} />
                                    <Route path="/contact" component={Contact} />
                                </div>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}