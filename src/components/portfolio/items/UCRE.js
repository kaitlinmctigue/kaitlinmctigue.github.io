import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/ucre.jpg';
import artlogo from '../../../images/portfolio/ucre/artlogo.png';

import Section from '../Section';
import Backlink from '../Backlink';
import Setup from '../Setup';

const title = 'The Art + Human Circuit';
const tags = ['design', 'UX Research', 'UX Design'];
const classification = 'des';

export default class UCRE extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: UCRE'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    splash={splashImg}
                />

                <Setup
                    role={'UX Researcher, UX Designer'}
                    year={2019}
                    team={'Rissa Lee, Michael Silvestre, Amy Lu, Matthew Fang'}
                    course={'User Centered Research and Evaluation at Carnegie Mellon University'}
                    img={artlogo}
                    client={'Metro21: Smart Cities Institute'}
                />

                <Section title={''}/>

                <Backlink/>
            </div>
        );
    }
}