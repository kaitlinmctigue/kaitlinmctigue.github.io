import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/environment.png';

import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Prototyping with Environmental Factors';
const tags = ['Dev', 'UX Research', 'Environmental Design'];
const classification = 'dev';
const problem = 'From emergency rooms, to command centers, to unit common areas, hospitals are full of very different lighting environments. Users of an interactive patient-flow dashboard were experiencing eye strain, especially during long shifts.';
const process = 'Using the Standford design-thinking framework, we uncovered a surprising number of factors contributing to eye strain. We prototyped solutions in CSS, and I leveraged Internet Explorer’s accessibility tools to test stylesheets for effectiveness of alleviating eye strain.';
const solution = 'We made changes to text, color palette, and the way we render fonts, all to improve legibility. We introduced a “night mode” for nighttime use and wall-boards in dark hospital corridors. Lastly, we standardized best practices for lighting and hardware.';

import dtbar from '../../../images/portfolio/dt_bar.png';

export default class Environmental extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Environmental Factors'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    nda={true}
                    splash={splashImg}
                    problem={problem}
                    process={process}
                    solution={solution}
                />

                <Setup
                    role={'UX Researcher, UI Designer, UI Developer'}
                    team={'Jamie Slater, Jason Spector'}
                    year={2018}
                    nda={true}
                />

                <Section title={'Process'} staticImg={dtbar}/>

                <Backlink/>
            </div>
        );
    }
}