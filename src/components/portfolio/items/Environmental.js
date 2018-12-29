import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/hosp.jpg';

import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Environmental Design Research & Development';
const tags = ['Dev', 'UX Research'];
const classification = 'dev';
const problem = 'After the 2017.3 upgrade, TeleTracking customers were experiencing eye fatigue when using the IQ platform.';
const solution = 'Using the design thinking framework, we uncovered a surprising myriad of factors contributing to this problem, and addressed each of them. Key changes included increased contrast, text rendering improvements, and a “night” color theme.';

import dtbar from '../../../images/portfolio/dtbar.svg';

export default class Environmental extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    splash={splashImg}
                    problem={problem}
                    solution={solution}
                />

                <Setup
                    client={'TeleTracking'}
                    role={'UX Researcher, UI Designer, UI Developer'}
                    team={'Jamie Slater, Jason Spector'}
                    year={2018}
                />

                <Section title={'Process'} img={dtbar}/>

                <Backlink/>
            </div>
        );
    }
}