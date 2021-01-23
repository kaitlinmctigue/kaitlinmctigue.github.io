import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/nasa2.png';
import logo from '../../../images/portfolio/nasa/ames.png';
import diamond from '../../../images/portfolio/nasa/diamond.png';
import team from '../../../images/portfolio/nasa/team.png';
import nico from '../../../images/portfolio/nasa/nico.png';
import diary from '../../../images/portfolio/nasa/diarypost.png';
import nathan from '../../../images/portfolio/nasa/nathan.jpg';
import puzzlea from '../../../images/portfolio/nasa/puzzlea.svg';
import puzzleb from '../../../images/portfolio/nasa/puzzleb.svg';
import puzzlec from '../../../images/portfolio/nasa/puzzlec.svg';
import puzzled from '../../../images/portfolio/nasa/puzzled.svg';

// import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';
import Insight from '../Insight';
import Subsection from '../Subsection';

const title = 'Empowering astronauts to independently diagnose spacecraft anomalies on the first crewed mission to Mars';
const tags = ['Product Designer', 'Project Manager'];
const classification = 'des';
const problem = 'Historically, crewed space missions are largely controlled from the Mission Control Center on the ground. That means the ground solves any problems that arise\n' +
    '\n' +
    'Deep-space travel means long communication delays and even blackouts. Crew members will need to solve urgent vehicle anomalies on their own.';
const jsc = 'In order to design the future of space travel, we needed a robust understanding of the current state of space travel. What works well? What are the pain points? What risks will be increased in long-duration space travel?\n' +
    '\n' +
    'We took a 3 day research trip to Johnson Space Center where we interviewed Flight Controllers and Administrators, and observed a Mission Control training simulation. We also later interviewed two astronauts.\n';
const experts = 'How do experts diagnose complex systems?\n' +
    '\n' +
    'For the answer to this question, we looked to experts in a range of fields, including HVAC, electrical engineering, mining, and auto repair. We focused on fields in which engineers face space-like conditions such as isolation and communication gaps\n';
const pivot = 'Halfway through our Spring 2020 semester, we were shocked to learn that we wouldn’t be coming back to CMU after spring break due to the COVID-19 crisis.\n' +
    '\n' +
    'At the same time, we were reaching a point of convergence in our capstone project: we had narrowed our problem space to critical thinking for diagnosis. We wanted to know more about what it’s really like to try to solve problems in space while you’re exhausted, stressed, and missing your loved ones.\n' +
    '\n' +
    'We decided to take advantage of the situation by focusing our research on remote collaboration and the impacts of isolation.\n' +
    '\n' +
    'We ran a study in which we had participants remotely played several rounds of the bomb-defusal game Keep Talking and Nobody Explodes. We added various communication obstacles and they progressed, including a delay.\n';
const ideation = 'Over the course of five rounds of testing, our team narrowed 100+ storyboards down to one high-fidelity prototype.\n' +
    '\n' +
    'We identified a lot of solution areas with high potential for impact. We also discovered a lot of obvious ideas. For example, we were really excited about our VR procedure viewer idea, until we realized that nearly every single person we spoke to from NASA had the same idea.\n' +
    '\n' +
    'We ultimately narrowed our focus based on impact for crew members, impact for our client, feasibility for our own timeline, and feasibility for actual implementation.\n';
const abcd = 'Introducing the ABCD framework for deep-space diagnosis. The ABCD framework is all about setting up crew members for success in the face of an urgent vehicle anomaly. We give them the right puzzle pieces to understand the problem, safe the vehicle, and plan for a long-term solution.';

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

                <Section title={'View Project Blog'} link={'https://medium.com/mhci-x-nasa-capstone-2020'}/>

                <Section title={'Project Brief'} quote={'NASA aims to understand how to enable four astronauts to diagnose and manage vehicle anomalies previously managed by 40 personnel on the ground.'}/>

                <Section title={'Our Process'} img={diamond}/>

                <Section title={'Contextual Inquiry at Johnson Space Center'} text={jsc} img={team}/>

                <Insight insight={'Reference materials during diagnosis are just as important as pre-flight training.'} desc={'Astronauts spend years training for a new mission. They can’t possibly remember all of the in-depth systems training they receive.'}/>

                <Section title={'Participant Quote:'} quote={'“We typically don\'t train crew members currently for downstream implications. [Astronauts] safe the system, and then the ground takes care of everything else.”'}/>

                <Section title={'Analogous Domains'} text={experts} img={nico} caption={'I conducted a 2 hour contextual inquiry with an electrical engineer and car hobbyist while he troubleshooted an issue with his vehicle.'}/>
                <div className={'row'}>
                    <div className={'col-xs-12'}>
                        <p>
                            The experts we consulted helped us identify some key best practices for troubleshooting:
                        </p>
                        <ol>
                            <li>Keep track of known knowns and known unknowns. Follow one path through to “known good” at a time.</li>
                            <li>Only change one variable at a time, and document the results.</li>
                            <li>Look for the the simplest things first. Try things that are the lowest risk to test first.</li>
                            <li>Use all your senses, not just vision.</li>
                            <li>Bring in fresh eyes to see things experts can’t.</li>
                        </ol>
                    </div>
                </div>

                <Insight insight={'People are tempted to cut corners while troubleshooting, especially when they get stressed or frustrated.'}/>

                <Section title={'Pandemic-Related Pivots'} text={pivot}/>

                <Insight insight={'Mistakes have more weight as the communication delay increases.'} desc={'People naturally front-load information to combat the delay. Misremembering one small detail can be dangerous.'}/>

                <Section title={'The Quarantine Diary Study'} img={diary} text={'We continued our remote work with a 10-day quarantine diary study with 105 participants. Our goal was to better understand the psychological impacts of deep space travel, and working under stress.'}/>

                <Insight insight={'In isolation, the days blend together. \n' +
                    'This is a barrier to critical thinking and productivity.'}
                desc={'Surprisingly, keeping a structured, anonymous diary actually seemed to help participants cope with the uncertainty and disorientation.'}/>

                <Section title={'Diary Study Participant Quote:'} quote={'"I’m not sure about the specific data you are looking for but typing this out for some unknown person to read is really helping me cope. Thank you!"'}/>

                <Section title={'Ideation and Evaluative Research'} img={nathan} text={ideation} caption={'Our prototype of what apparently is the most generic idea that ever was.'}/>

                {/*<Section title={'Solution Criteria'} text={abcd}/>*/}

                <Subsection title={'Solution Criteria'} text={abcd}/>

                <div className={'row svg-images'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'Access'} img={puzzlea} textAfterImage={'Easy access to resources including telemetry, procedures, and schematics.'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'Best Practices'} img={puzzleb} textAfterImage={'A clear workflow that follows troubleshooting best practices.'}/>
                    </div>
                </div>
                <div className={'row svg-images'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'Critical Thinking'} img={puzzlec} textAfterImage={'Nudges towards asking critical questions and considering downstream effects.'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'Documentation'} img={puzzled} textAfterImage={'Painless documentation that helps the crew as much as it helps MCC.'}/>
                    </div>
                </div>

                <Section title={'View Final Solution Website'} link={'https://nasa-talos.webflow.io/'}/>

                <Backlink/>
            </div>
        );
    }
}