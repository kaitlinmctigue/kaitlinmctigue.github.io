import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/cards.jpg';

import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Interactive Learning Science Principles Project';
const tags = ['research', 'instructional design', 'game design', 'learning science'];
const classification = 'dev';
const problem = 'There are dozens of reputable sets of learning science principles, with hundreds of actual principles. These principles are core to the work of designers of instructional technologies, and especially designers of educational games. However, learning the principles can be a challenge. \n' +
    '\n' +
    'In the Design of Educational Games course at Carnegie Mellon University, Dr. Erik Harpstead uses the set of 30 principles from Koedinger, Booth, and Klahr’s 2013 article Instructional Complexity and the Science to Constrain It. Students are expected to more or less memorize the list, a daunting task that often leads to misconceptions about some of the principles.\n';
const solution = 'We make research backed principles from the learning sciences more accessible to designers and students by providing examples and contextualizing the design questions that can have pedagogical impacts. Each principle is represented in the form of a card, making up an interactive deck.\n';
const ideationtext = 'I set out with the very meta challenge of designing a game experience that used the learning science principles to teach the learning science principles.\n' +
    '\n' +
    'Our earliest concept was one big game in which the player could turn the principle off and on to feel it’s absence.\n' +
    '\n' +
    'Another idea I paper-prototyped was a “choose your own adventure” style experience in which the player was tasked to teach an alien to make a peanut butter and jelly sandwich by making choices that best utilize the principles. This approach piggybacked on both the Quizzing principle and the Application principle by teaching through repeated exposure, similar to how Duolingo teaches vocabulary.\n';

import logo from '../../../images/portfolio/ixprinciples/cmulogos.png';
import trans from '../../../images/portfolio/ixprinciples/transformational.png';
import principlesresearch from '../../../images/portfolio/ixprinciples/principlesresearch.png';
import operation from '../../../images/portfolio/ixprinciples/operation.jpg';
import cards1 from '../../../images/portfolio/ixprinciples/cards1.jpg';
import cards2 from '../../../images/portfolio/ixprinciples/cards2.jpg';
import inspo from '../../../images/portfolio/ixprinciples/inspo.png';
import screens from '../../../images/portfolio/ixprinciples/screens.png';
import carddesign from '../../../images/portfolio/ixprinciples/carddesign.png';

export default class InteractivePrinciples extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: Interactive Principles'
        });
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    nda={false}
                    splash={splashImg}
                    problem={problem}
                    solution={solution}
                    classification={classification}
                />

                <Setup
                    role={'Researcher, Designer, Developer. I single-handedly coded the app in React.'}
                    team={'Dr. Erik Harpstead'}
                    year={2018}
                    nda={false}
                    client={'The OHLab at Carnegie Mellon'}
                    img={logo}
                />

                <Section title={'Process'} img={trans} caption={'The Transformational Framework by Sabrina Culyba guided my research process'} />

                <Section title={'Learning Science Background Research'} img={principlesresearch}
                    text={'Dr. Harpstead uses Koedinger’s consolidated set of 30 learning science principles for his course. To get a deep understanding of what the principles meant, I spent some time with each of the papers that Koedinger referenced in his set. I began sketching concepts for how we could make players of our solution feel the presence or absence of each principle in a visual way.'}
                />

                <Section title={'Playing Lots of Games (I mean, more research)'}
                    text={'Another thing I did in this exploratory background research phase was play a LOT of games to find examples of games that leveraged learning science principles. Dr. Harpstead had discovered in his teaching that students were better able to understand learning science principles and less likely to fall into common misconceptions when they were able to experience the principles through play.\n'}
                    img={operation}
                    caption={'Operation is a perfect example of the Immediate Feedback Timing principle, which students often misunderstand. In operation the player knows their mistake as soon as they touch the metal edge of the body (game board).\n'}
                />

                <Section title={'Ideation and First Concepts'}
                    text={ideationtext}
                    img={cards2}
                    img2={cards1}
                />

                <Section title={'Deck of Cards Concept'}
                    img={inspo}
                    text={'After playtesting our initial paper prototypes we began to realize the need to view all principles in one place so that students could start from an overview and have control over the level of depth of knowledge they wanted.\n' +
                    '\n' +
                    'The deck of cards concept was born from inspiration from Jesse Schell’s deck of lenses for game design. We envisioned an interactive deck of cards that players could use to learn at their own pace through reading, viewing visual representations, and playing games.'}
                    caption={'Inspiration (left to right, top to bottom): The Art of Game Design: A Book of Lenses, Ideation Decks, Tinycards by Duolingo, Coglode, Laws of UX, GAPBIT (Game Design Patterns for Behavioral Therapy)'}
                />

                <Section title={'Prototyping'} img={carddesign} caption={'Card design concepts'} img2={screens} caption2={'An early iteration of the website design'}
                    textAfterImg={'In order to test our card prototype we really needed to completely build out content for each principle so that we could test information retention and what content was most important to users.\n' +
                    '\n' +
                    'I chose to build the prototype in React for the ease of working with JSON data. We maintained the master file of data in Google Sheets and periodically exported it to JSON using some custom javascript.\n'}/>


                <Section title={'Usability Testing and Iteration'}
                    text={'We conducted usability testing with CMU students and faculty as well as game design professionals. We used thinkaloud protocol and task analysis to get feedback on the prototype. We then asked participants to play a short educational game (Coding for Carrots by Google) and identify principles they felt the game utilized.\n' +
                '\n' +
                'We received very positive feedback on the visual design and usability of the prototype. We identified some problem areas in the illustrations and also in the information hierarchy of the card design.\n' +
                '\n' +
                'We received a very positive response from faculty on the prototype, who expressed gratitude that we were making learning science more accessible. One scholar from the OHLab even called our project “potentially groundbreaking.”\n'}
                />

                <Section title={'Assessment and Outcomes'}
                    text={'I made many changes based on our testing sessions, and as of the time of this writing the Interactive Principles website is live and ready to be used in the graduate Educational Game Design course next semester. Future OHLab interns will continue to iterate on the website as students use it and provide additional feedback.'}/>

                <Section title={'View Project'} text={'View the live website:'} link={'http://www.edugames.design/principles'}/>

                <Section title={'View the Source Code'} text={'View the project source code on Github:'} link={'https://github.com/eharpste/interactive-principles'}/>

                <Section title={'Final Product Video'}/>
                <div className={'video-responsive'}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/RwJ3SbDKNDc?rel=0&amp;showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <Backlink/>
            </div>
        );
    }
}