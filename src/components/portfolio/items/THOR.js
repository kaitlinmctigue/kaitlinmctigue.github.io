import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/thor.jpg';

import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Tennessee Homeland Online Records';
const tags = ['dev', 'angular2', 'branding'];
const classification = 'dev';
const problem = 'Legacy software and processes were holding back officers from doing their jobs safely and efficiently while on the go.';
const solution = 'A modern, responsive web application that is just as usable from a squad car as it is from the Tennessee Fusion Center.';

export default class THOR extends Component {

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
                    client={'Tennessee Bureau of Investigation'}
                    role={'UX Lead, UI Developer'}
                    team={'Brinson Tatum, Rick McDonald, Corey Fitzgerald'}
                    year={2016}
                />

                <Backlink/>
            </div>
        );
    }
}