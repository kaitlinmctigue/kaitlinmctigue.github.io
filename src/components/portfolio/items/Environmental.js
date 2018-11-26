import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/dci.jpg';

const title = 'Environmental Design Research';
const tags = ['Research', 'Dev'];
const classification = 'dev';
const problem = 'eAgent is much more than just a NCIC access software, although it certainly is that. It is Diverse Computing’s flagship product, and over the years the eAgent family has taken on a life of its own. The consequence is that many people in the criminal justice community know us as eAgent. When we go to conferences, people are typically looking for a banner that says eAgent.';
const solution = 'Bonafide unicorn specializing in design systems and frameworks for user interfaces.';

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
            </div>
        );
    }
}