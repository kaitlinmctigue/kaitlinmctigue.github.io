import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/cards.jpg';

import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Interactive Learning Science Principles Project';
const tags = ['dev', 'research', 'instructional design', 'game design', 'learning science'];
const classification = 'dev';
const problem = 'There are dozens of reputable sets of learning science principles, with hundreds of actual principles. These principles are core to the work of designers of instructional technologies, and especially designers of educational games. However, learning the principles can be a challenge. \n' +
    '\n' +
    'In the Design of Educational Games course at Carnegie Mellon University, Dr. Erik Harpstead uses the set of 30 principles from Koedinger, Booth, and Klahr’s 2013 article Instructional Complexity and the Science to Constrain It. Students are expected to more or less memorize the list, a daunting task that often leads to misconceptions about some of the principles.\n';
const solution = 'We make research backed principles from the learning sciences more accessible to designers and students by providing examples and contextualizing the design questions that can have pedagogical impacts. Each principle is represented in the form of a card, making up an interactive deck.\n';

import logo from '../../../images/portfolio/ixprinciples/cmulogos.png';
import trans from '../../../images/portfolio/ixprinciples/transformational.png';

export default class InteractivePrinciples extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Interactive Principles'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    nda={false}
                    splash={splashImg}
                    problem={problem}
                    solution={solution}
                />

                <Setup
                    role={'Researcher, Designer, Developer. I single-handedly coded the app in React.'}
                    team={'Dr. Erik Harpstead'}
                    year={2018}
                    nda={false}
                    client={'The OHLab at Carnegie Mellon'}
                    img={logo}
                />

                <Section title={'Process'} staticImg={trans} caption={'The Transformational Framework by Sabrina Culyba guided my research process'} />

                <Section title={'View Project'} text={'View the live website:'} link={'http://www.edugames.design/principles'}/>

                <Section title={'View the Source Code'} text={'View the project source code on Github:'} link={'https://github.com/eharpste/interactive-principles'}/>

                <Section title={'Pitch Video'}/>
                <div className={'video-responsive'}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/RwJ3SbDKNDc?rel=0&amp;showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <Backlink/>
            </div>
        );
    }
}