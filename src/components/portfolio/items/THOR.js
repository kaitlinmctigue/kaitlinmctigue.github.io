import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/thor.jpg';
import logos from '../../../images/portfolio/thor/thor_logos.png';
import original from '../../../images/portfolio/thor/original.jpg';
import logo from '../../../images/portfolio/thor/logo.png';
import loading from '../../../images/portfolio/thor/loading.gif';
import login from '../../../images/portfolio/thor/login.png';

import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';
import Img from '../Img';
import Spacer from '../Spacer';

const title = 'Tennessee Homeland Online Records';
const tags = ['dev', 'angular2', 'branding'];
const classification = 'dev';
const problem = 'Imagine it’s 2 am. An officer pulls over a person, and then calls in to the Tennessee Fusion Center to have an agent run that person’s history. Every minute that officer waits, she is potentially in danger.\n' +
    '\n' +
    'In Tennessee, legacy software and processes were holding back officers from doing their jobs safely and efficiently while on the go.\n';
const solution = 'A modern, responsive web application that is just as usable from a squad car as it is from the Tennessee Fusion Center.';
const scope = 'In a little under a year and a half, my team reimagined and rebuilt a legacy app as a mobile first, responsive, WCAG AA compliant web application. The front end was the primary concern of our efforts, yet we rewrote a good portion of the back end as well to improve performance.';
const beginning = 'My team began this project with a week-long road trip through Tennessee. Each day we visited law enforcement agencies to observe users, and hold focus groups.\n' +
    '\n' +
    'I was responsible for organizing our massive file of user feedback, and analyzing for key takeaways. The first wireframes for THOR were sketched from my hotel room in Nashville at midnight, and the first stories were written the first day we got back to the office. We were on a tight timeline!\n';
const branding = 'As a part of this contract, I was given the task of branding the application. I created a logo, chose fonts for the application, developed a color palette, and established cohesive recurring graphical elements. I wanted to create a brand identity that would be memorable, modern, clean, and approachable. Yet I also wanted to ensure that the app fit with the Tennessee Bureau of Investigation’s established presence, which is that of a serious and authoritative institution. To achieve a sense of conformity, I based my color palette and typography on the State of Tennessee’s website, as well as TBI’s website. I also incorporated elements from Tennessee’s flag and state seal into my design.';

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
                    client={'Tennessee Bureau of Investigation, for Diverse Computing, Inc.'}
                    role={'UX Lead, UI Developer'}
                    team={'Myself as UX Lead and UI Developer, Rick McDonnell as Full-stack Developer, Corey Fitzgerald as Full-stack Developer, Brinson Tatum as Project Lead, Ashley Augustine as Project Manager. Diverse Computing, Inc.'}
                    year={2016}
                    img={logos}
                />

                <Section title={'Scope'} text={scope}/>

                <Section title={'Legacy System'} img={original} caption={'The legacy system, LEADR, and was released in 2004.'}/>

                <Section title={'The Beginning'} text={beginning}/>

                <Section title={'High Fidelity Mockups'}/>

                <Section title={'Branding'} text={branding}/>
                <div className={'row'}>

                    <Spacer size={'small'}/>

                    <div className={'col-xs-12 col-sm-6'}>
                        <Img img={logo} caption={'THOR logo'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Img img={loading} caption={'Loading graphic (stars mark TBI headquarters)'}/>
                    </div>

                    <Spacer size={'small'}/>

                    <div className={'col-xs-12 col-sm-12'}>
                        <Img img={login} caption={'Login page'}/>
                    </div>
                </div>

                <Backlink/>
            </div>
        );
    }
}