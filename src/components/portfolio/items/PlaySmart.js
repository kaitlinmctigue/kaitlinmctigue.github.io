import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/toy.jpg';
import logo from '../../../images/portfolio/playsmart/playsmartlogo.png';

import storyboarding from '../../../images/portfolio/playsmart/storyboarding.jpg';
import storyboarding2 from '../../../images/portfolio/playsmart/storyboarding2.jpg';
import app from '../../../images/portfolio/playsmart/app.png';
import box from '../../../images/portfolio/playsmart/box.png';
import cui from '../../../images/portfolio/playsmart/cui.png';
import sticker from '../../../images/portfolio/playsmart/sticker.png';
import roadmap from '../../../images/portfolio/playsmart/roadmap.png';

import Setup from '../Setup';
import Backlink from '../Backlink';
import Section from '../Section';
import Subsection from '../Subsection';

const title = 'Leveraging the power of play to teach kids to clean up.';
const tags = ['transformational design', 'conversation design', 'physical computing'];
const classification = 'des';
const problem = 'Teaching young children to clean up after themselves is exhausting.';
const solution = 'Using gamification techniques and some low-budget prototyping tools, we imagined a smart playkit that takes the burden of enforcing cleanup off of parents.';

const goals = 'Internet of things technologies are getting cheaper and more powerful, and mobile app developers are making the most of it. We set out to think up a novel, marketable, and scalable use of IoT and mobile. The assigned deliverable for our studio course project was a pitch video in which we “Wizard of Oz"-ed our prototype enough to gauge interest in our product from potential buyers.';
const story1 = 'We went through 30+ ideas before we landed on our smart playkit idea. To judge the potential of our ideas, we quickly storyboarded them and showed them to anyone with eyes!';
const story2 = 'Once we landed on our concept, we jumped straight into storyboarding our pitch video. Our pitch video is more or less a prototype itself, and it was through the storyboarding process that we ironed out the details of our product.';

export default class PlaySmart extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Playsmart'
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
                    classification={classification}
                />

                <Setup
                    course={'Interaction Design Studio, Carnegie Mellon University'}
                    role={'Product Designer'}
                    team={'Aishwarya Dwivedi, Anhong Guo'}
                    year={2018}
                    img={logo}
                />

                <Section title={'Goals'} text={goals}/>

                <Section title={'Storyboarding Part 1'} text={story1} img={storyboarding}/>

                <Section title={'Storyboarding Part 2'} text={story2} img={storyboarding2} caption={'Me totally pretending to draw on the board for this cool photo.'}/>

                <Subsection title={'How it Works'} text={'There are four components to the Playsmart playkit:'}/>

                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'1. RFID Stickers'} img={sticker} textAfterImage={'RFID Owlie stickers are placed on each toy.'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'2. RFID Enabled Toy-Chest'} img={box} textAfterImage={'Surprise: toys go in the chest.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'3. Conversational User Interface'} img={cui} textAfterImage={'The Playsmart mascot Owlie is the voice of the conversational interface. Owlie instructs the child to put their toys in the chest at a set time. In a future iteration, Owlie might be a cute stuffed animal instead of a hunk of plastic.'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Subsection title={'4. Mobile App'} img={app} textAfterImage={'The Playsmart companion app enables parents to configure Owlie and access all the data of their child’s progress.'}/>
                    </div>
                </div>

                <Section title={'Pitch Video'}/>
                <div className={'video-responsive'}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/5vU-OfPIf0U?rel=0&amp;showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <Section title={'Roadmap'} img={roadmap}/>

                <Section title={'Outcomes'} text={'Playsmart was just an exercise, but we received positive feedback on our solution design and marketing pitch in our class presentation. More interestingly, we received overwhelmingly strong responses to our storyboards from parents. It is evident that the problem Playsmart aims to solve is pervasive, and that people would be willing to pay to solve it. Teaching young children to clean up after themselves is exhausting.\n'}/>

                <Backlink/>
            </div>
        );
    }
}