import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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

    onRoute() {

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
                                        <NavItem className="theme-toggle link" onClick={this.changeTheme}></NavItem>
                                    </Nav>
                                    <Nav pullRight className='header__links'>
                                        <LinkContainer to='/portfolio'>
                                            <NavItem eventKey={1} className='link'>
                                                Portfolio
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/resume">
                                            <NavItem eventKey={2} className='link'>
                                                Resume
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/contact">
                                            <NavItem eventKey={3} className='link'>
                                                Contact
                                            </NavItem>
                                        </LinkContainer>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                            <div className="body text-center">
                                <Route exact path="/" component={Portfolio} />
                                <Route path="/portfolio" component={Portfolio} />
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