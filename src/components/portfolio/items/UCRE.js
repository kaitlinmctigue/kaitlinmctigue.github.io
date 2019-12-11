import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/ucre.jpg';
import artlogo from '../../../images/portfolio/ucre/artlogo.png';
import poster from '../../../images/portfolio/ucre/poster.png';

import Section from '../Section';
import Backlink from '../Backlink';
import Setup from '../Setup';

const title = 'The Art + Human Circuit';
const tags = ['design', 'UX Research', 'UX Design'];
const classification = 'des';
const problem = 'Citizens of Pittsburgh are not as interested in public art as we would like them to be considering the costs. They become numb to it when it is a part of their daily life, and they are not willing to read long plaques.';
const solution = 'The Art + Human Circuit is an interactive life-size “circuit” that empowers citizens to connect with public art and each other.';

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
                    problem={problem}
                    solution={solution}
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

                <Section title={'We asked ourselves...'} quote={'How might we create an interactive & social experience to increase engagement with public art?'}/>

                <Section title={'Final Poster'} img={poster}/>
                <Backlink/>
            </div>
        );
    }
}