import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


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
                            <Navbar collapseOnSelect className='header'>
                                <Navbar.Header>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav className='header__utility'>
                                        <NavItem eventKey={1} className="theme-toggle link" onClick={this.changeTheme}></NavItem>
                                    </Nav>
                                    <Nav pullRight className='header__links'>
                                        <NavItem eventKey={2} href="/" className='link'>
                                            Portfolio
                                        </NavItem>
                                        <NavItem eventKey={3} href="/resume" className='link'>
                                            Resume
                                        </NavItem>
                                        <NavItem eventKey={4} href="/contact" className='link'>
                                            Contact
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                            <div className="body text-center">
                                <Route exact path="/" component={Portfolio} />
                                <Route path="/resume" component={Resume} />
                                <Route path="/contact" component={Contact} />
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}