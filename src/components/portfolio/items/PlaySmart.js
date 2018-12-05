import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/toy.jpg';

import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Playsmart RFID Toys Concept';
const tags = ['instructional design', 'physical computing'];
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

                <Backlink/>
            </div>
        );
    }
}