import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/nasa2.png';
import logo from '../../../images/portfolio/ames.png';

// import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';

const title = 'Empowering astronauts to independently diagnose spacecraft anomalies on the first crewed mission to Mars.';
const tags = ['Product Designer', 'Project Manager'];
const classification = 'des';

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
                />

                <Setup
                    role={'UX Researcher, UI Designer, UI Developer'}
                    team={'JT Aceron, Nathan Barnhart, Aditi Magal, Megan Parisi'}
                    year={2020}
                    client={'NASA Ames Research Center'}
                    img={logo}
                    projectLink={'https://nasa-talos.webflow.io/'}
                    projectLinkText={'nasa-talos.webflow.io'}
                />

                {/*<Section title={'View Project Website'} link={'https://nasa-talos.webflow.io/'}/>*/}

                <Section title={'This page is under construction!'} quote={'This project is still in progress, and will be completed in August 2020. ' +
                'Check back soon for an update!'}/>

                <Section title={'View Project Blog'} link={'https://medium.com/mhci-x-nasa-capstone-2020'}/>


                <Backlink/>
            </div>
        );
    }
}