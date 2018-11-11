import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="mx-auto text-center portfolio">
                <Link to='/'>
                    <div className="logo"></div>
                </Link>
                <div className="title">
                    <span className="title__des">UX Designer & </span>
                    <span className="title__dev">UI Developer</span>
                </div>
                <div className="portfolio__intro mx-auto text-center">
                    <p>Bonafide unicorn specializing in design systems and frameworks for user interfaces. I enjoy high-fidelity prototyping, writing pixel-perfect css, and asking questions that other people are afraid to ask.</p>

                </div>
            </div>
        );
    }
}