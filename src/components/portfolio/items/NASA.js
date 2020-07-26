import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/nasa2.png';
import logo from '../../../images/portfolio/nasa/ames.png';
import diamond from '../../../images/portfolio/nasa/diamond.png';
import team from '../../../images/portfolio/nasa/team.png';

// import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';
import Insight from '../Insight';

const title = 'Empowering astronauts to independently diagnose spacecraft anomalies on the first crewed mission to Mars';
const tags = ['Product Designer', 'Project Manager'];
const classification = 'des';
const problem = 'Historically, crewed space missions are largely controlled from the Mission Control Center on the ground. That means the ground solves any problems that arise\n' +
    '\n' +
    'Deep-space travel means long communication delays and even blackouts. Crew members will need to solve urgent vehicle anomalies on their own.';
const jsc = 'In order to design the future of space travel, we needed a robust understanding of the current state of space travel. What works well? What are the pain points? What risks will be increased in long-duration space travel?\n' +
    '\n' +
    'We took a 3 day research trip to Johnson Space Center where we interviewed Flight Controllers and Administrators, and observed a Mission Control training simulation. We also later interviewed two astronauts.\n';

export default class NASA extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Talos'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    splash={splashImg}
                    classification={classification}
                    problem={problem}
                    solution={'A crew-centered problem-solving framework that empowers astronauts to think like a flight controller.'}
                />

                <Setup
                    role={'Product Designer, Project Manager'}
                    team={'JT Aceron, Nathan Barnhart, Aditi Magal, Megan Parisi'}
                    year={2020}
                    client={'NASA Ames Research Center (MHCI Capstone Project)'}
                    img={logo}
                    projectLink={'https://nasa-talos.webflow.io/'}
                    projectLinkText={'nasa-talos.webflow.io'}
                />

                {/*<Section title={'View Project Website'} link={'https://nasa-talos.webflow.io/'}/>*/}

                {/*<Section title={'This page is under construction!'} quote={'This project is still in progress, and will be completed in August 2020. ' +*/}
                {/*'Check back soon for an update!'}/>*/}

                <Section title={'View Project Blog'} link={'https://medium.com/mhci-x-nasa-capstone-2020'}/>

                <Section title={'Project Brief'} quote={'NASA aims to understand how to enable four astronauts to diagnose and manage vehicle anomalies previously managed by 40 personnel on the ground.'}/>

                <Section title={'Our Process'} img={diamond}/>

                <Section title={'Contextual Inquiry at Johnson Space Center'} text={jsc} img={team}/>

                <Insight insight={'Reference materials during diagnosis are just as important as pre-flight training.'} desc={'Astronauts spend years training for a new mission. They can’t possibly remember all of the in-depth systems training they receive.'}/>

                <Section title={'Participant Quote'} quote={'“We typically don\'t train crew members currently for downstream implications. [Astronauts] safe the system, and then the ground takes care of everything else.”'}/>

                <Backlink/>
            </div>
        );
    }
}