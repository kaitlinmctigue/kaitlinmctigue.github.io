import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/ucre.jpg';
import artlogo from '../../../images/portfolio/ucre/artlogo.png';
import poster from '../../../images/portfolio/ucre/poster.png';
import affinity from '../../../images/portfolio/ucre/affinity.jpg';
import interview from '../../../images/portfolio/ucre/interview.jpg';
import storyboard from '../../../images/portfolio/ucre/storyboard.jpg';
import testing from '../../../images/portfolio/ucre/testing.jpg';
import modal from '../../../images/portfolio/ucre/modal.png';

import Section from '../Section';
import Backlink from '../Backlink';
import Setup from '../Setup';
import TableauViz from '../TableauViz';

const title = 'The Art + Human Circuit';
const tags = ['design', 'UX Research', 'UX Design'];
const classification = 'des';
const problem = 'Citizens of Pittsburgh are not as interested in public art as we would like them to be considering the costs. They become numb to it when it is a part of their daily life, and they are not willing to read long plaques.';
const solution = 'The Art + Human Circuit is an interactive life-size “circuit” that empowers citizens to connect with public art and each other.';
const execsummary = 'We used various research methods to understand the current landscape of public art through a lens of engagement and memorability. \n' +
    '\n' +
    'The need for social interaction was one of the strongest experiences that resonated with our participants.\n' +
    '\n' +
    'The Art + Human Circuit is a highly interactive and collaborative art experience that entices people to engage with art and with other people. This solution speaks to people’s desire to receive information in a more engaging way, and to share art experiences with others.\n';
const generative = 'We began our exploratory phase with extensive background research on public art in Pittsburgh, and arts organizations and existing solutions. We used contextual inquiry to understand how and why people interact with public art, and identify areas to improve. We also conducted thinkaloud protocol with an existing public art website. We talked to 8 unique participants total.\n';

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

                <Section title={'Executive Summary'} text={execsummary}/>

                <Section title={'Metro21 Engagement Data'}
                    link={'https://public.tableau.com/profile/katie.mctigue#!/'}
                    text={'In a previous semester, Metro 21 had conducted a study in which they placed QR codes on public art downtown, and tracked engagement. The QR code linked to a website that provided more information about the art. This data helped us better understand the problem context. We learned that tourists engage with art more than locals. We also noticed some interesting patterns around the work week and weather.\n'}/>
                <TableauViz url={'https://public.tableau.com/shared/SP8D3969G?:display_count=y&:origin=viz_share_link'}/>
                {/*<TableauViz url={'https://public.tableau.com/shared/5KK7YB2CD?:display_count=y&:origin=viz_share_link'}/>*/}

                <Section title={'Exploratory & Generative Research Methods'}
                    text={generative}
                    img={interview}
                    img2={affinity}
                />

                <Section title={'Participant Quote:'}
                    quote={'"I\'ve never gone inside a place of art without other people… I just like to be with people… I like to share with them."'}
                />

                <Section title={'Key Insights'}/>
                <div className={'row'}>
                    <div className={'col-xs-12'}>
                        <p>
                            When we synthesized our research we uncovered some key insights.
                        </p>
                        <ol>
                            <li>People would rather interact with art than passively read a plaque.</li>
                            <li>People preferred to share art experiences with their friends and family rather than going alone.</li>
                            <li>Novelty is key. People become numb to art that they see on a daily basis. People want a break from their daily lives.</li>
                        </ol>
                    </div>
                </div>

                <Section title={'We asked ourselves...'} quote={'How might we create an interactive & social experience to increase engagement with public art?'}/>

                <Section
                    title={'Evaluative Research Methods'}
                    text={'We used storyboards and speed dating to validate the needs we had identified. We tested 5 needs total, but found that participants had the strongest reaction to the social interaction scenarios.\n'}
                    img={storyboard}
                    img2={testing}
                    textAfterImg={'Our storyboarding results guided our first experience prototype, which we tested on the streets of Oakland, Pittsburgh.'}
                />

                <Section title={'Participant Quote:'}
                    quote={'"It is a collaboration for 2 people, or a puzzle for 1 person!"'}
                />

                <Section
                    title={'Final Solution Design'}
                    img={modal}
                    textAfterImg={'The Art + Human Circuit is an experience built around public art that invites citizens to stand on connection points (tiles). Only when 2+ people stand on connection points is the circuit complete, and the art comes to life with light!\n' +
                    ' \n' +
                    'In the words of one of our participants, “it is a collaboration for 2 people, or a puzzle for 1 person.” There is no need for a plaque-- the fun is in working with others to figure out how to engage with the art.\n'}
                />

                <Section title={'Final Poster'} img={poster}/>

                <Section
                    title={'My Role and Learning Experience'}
                    text={'Each of our team members wore many different hats throughout this process, with all of us sharing the responsibilities of UX research and UX design. I personally took on project management and visual design work, and played a key role in ideation. I loved working with this very committed, hardworking, and creative group of people with different skills and backgrounds.'}
                />

                <Backlink/>
            </div>
        );
    }
}