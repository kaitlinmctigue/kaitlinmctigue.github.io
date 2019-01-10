import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/toy.jpg';

import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';

const title = 'Playsmart RFID Toys Concept';
const tags = ['Design', 'instructional design', 'gamification', 'physical computing'];
const classification = 'des';
const problem = 'Teaching young children to clean up after themselves is exhausting.';
const solution = 'Using gamification techniques and some low-budget prototyping tools, we imagined a smart playkit that takes the burden of enforcing cleanup off of parents.';

export default class PlaySmart extends Component {

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
                    course={'Interaction Design Studio, Carnegie Mellon University'}
                    role={'Product Designer'}
                    team={'Aishwarya Dwivedi, Anhong Guo'}
                    year={2018}
                />

                <Section title={'Pitch Video'}/>
                <div className={'video-responsive'}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/5vU-OfPIf0U?rel=0&amp;showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <Backlink/>
            </div>
        );
    }
}