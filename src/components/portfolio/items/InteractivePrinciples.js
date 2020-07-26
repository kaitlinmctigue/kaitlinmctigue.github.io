import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/cards.jpg';

import Section from '../Section';
import Setup from '../Setup';
import Backlink from '../Backlink';

const title = 'Making learning science principles more accessible to game designers with a virtual deck of cards';
const tags = ['research', 'instructional design', 'game design', 'learning science'];
const classification = 'dev';
const problem ='Memorizing lists is boring.\n' +
    '\n' +
    'Designers of transformational games must have a base understanding of learning science.\n' +
    '\n' +
    'In the Design of Educational Games course at Carnegie Mellon University, students struggled to memorize 30 core learning science principles, and frequently formed misconceptions.\n';
const solution = 'An interactive deck of virtual cards that provide concrete examples and contextualize the design questions that can have pedagogical impacts.\n';
const ideationtext = 'I paper-prototyped several game ideas, including a “choose your own adventure” style experience in which the player was tasked to teach an alien to make a peanut butter and jelly sandwich. This approach piggybacked on both the Quizzing principle and the Application principle by teaching through repeated exposure, similar to how Duolingo teaches vocabulary.\n';

import logo from '../../../images/portfolio/ixprinciples/cmulogos.png';
import trans from '../../../images/portfolio/ixprinciples/transformational.png';
// import principlesresearch from '../../../images/portfolio/ixprinciples/principlesresearch.png';
import operation from '../../../images/portfolio/ixprinciples/operation.jpg';
import cards1 from '../../../images/portfolio/ixprinciples/cards1.jpg';
import cards2 from '../../../images/portfolio/ixprinciples/cards2.jpg';
import cards2b from '../../../images/portfolio/ixprinciples/cards2.png';
import cards3 from '../../../images/portfolio/ixprinciples/cards3.png';
import inspo from '../../../images/portfolio/ixprinciples/inspo.png';
import screens from '../../../images/portfolio/ixprinciples/screens.png';
import carddesign from '../../../images/portfolio/ixprinciples/carddesign.png';
import Insight from '../Insight';

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
                    projectLink={'http://www.edugames.design/principles'}
                    projectLinkText={'edugames.design/principles'}
                />

                <Section title={'Process'} img={trans} caption={'The Transformational Framework by Sabrina Culyba guided my research process'} />

                <Section title={'Koedinger’s List of 30 Principles'} link={'https://www.learnlab.org/research/wiki/images/c/c0/Koedinger-Science-2013.pdf'}
                    text={'Dr. Harpstead uses Koedinger’s consolidated set of 30 learning science principles for his course. To get a deep understanding of what the principles meant, I spent some time with each of the papers that Koedinger referenced in his set. I began sketching concepts for how we could make players of our solution feel the presence or absence of each principle in a visual way.'}
                />

                <Section title={'Recognizing the Principles in Games'}
                    text={'Every semester, students have the same common misconceptions about certain principles after reading Koedinger’s paper. \n\nDr. Harpstead had discovered in his teaching that students were better able to understand learning science principles and less likely to fall into common misconceptions when they were able to experience the principles through play.\n'}
                    img={operation}
                    caption={'Students often use compiling code as an example of the Immediate Feedback Principle, but it isn’t. Operation is a perfect example of immediate feedback.'}
                />

                <Insight title={'Insight'} insight={'Playing games helps students contextualize the principles, which helps them avoid common misconceptions.'}/>

                {/*<Section title={'Insight'} quote={'Playing games helps students contextualize the principles, which helps them avoid common misconceptions.'}/>*/}

                <Section title={'Ideation and First Concepts'}
                    text={ideationtext}
                    img={cards2}
                    img2={cards1}
                />

                <Section title={'A Big Failure'}
                    text={'Dr. Harpstead was not impressed. My approach was very literal, a bit heavy-handed, and the experience I designed lacked fun. Fun, it turns out, is a very difficult thing to design!\n' +
                '\n' +
                'I took a step back, and asked myself what I could build that would be the most impactful to the students in the course. What could I build in 3 months that would be shippable and scalable?\n'}/>

                {/*<Section title={'Takeaway'}*/}
                {/*quote={'My prototype was "chocolate-covered broccoli". No matter how much “fun” you cover the boring content in, people will smell it a mile away.'}*/}
                {/*/>*/}

                <Insight title={'Takeaway'} insight={'My prototype was "chocolate-covered broccoli". No matter how much “fun” you cover the boring content in, people will smell it a mile away.'}/>


                <Section title={'A Big Pivot'}
                    img={inspo}
                    text={'The deck of cards concept was born from inspiration from Jesse Schell’s deck of lenses for game design. Schell’s cards are “lenses” that prompt the designer to see their game through different perspectives. This model has been used in a number of other educational tools with great results.'}
                    caption={'Inspiration (left to right, top to bottom): The Art of Game Design: A Book of Lenses, Ideation Decks, Tinycards by Duolingo, Coglode, Laws of UX, GAPBIT (Game Design Patterns for Behavioral Therapy)'}
                />

                <Section title={'Prototyping'} img={carddesign}
                    text={'To design the cards, I needed to understand what one or two data points were the most important for people to quickly understand the principles.\n' +
                         '\n' +
                         'I followed the Concreteness Fading Principle for guidance, and started off each card with a real-life concrete example, followed by the more abstract definition.\n'}
                    caption={'Card design concepts'} img2={screens} caption2={'An early iteration of the website design'}
                    textAfterImg={'I chose to build the prototype in React for the ease of working with JSON data. We maintained the master file of data in Google Sheets and periodically exported it to JSON using some custom javascript.\n'}/>


                <Section title={'Usability Testing and Iteration'}
                    text={'We conducted usability testing with CMU students and faculty as well as game design professionals. We used thinkaloud protocol and task analysis to get feedback on the prototype. We then asked participants to play a short educational game (Coding for Carrots by Google) and identify principles they felt the game utilized.\n' +
                '\n' +
                'We received very positive feedback on the visual design and usability of the prototype. We identified some problem areas in the illustrations and also in the information hierarchy of the card design.\n' +
                '\n' +
                'We received a very positive response from faculty on the prototype, who expressed gratitude that we were making learning science more accessible. One scholar from the OHLab even called our project “potentially groundbreaking.”\n'}
                />

                <Insight title={'Finding'} insight={'Delightful microinteractions prompt curiosity and exploration.'}/>

                {/*<Section title={'Finding'} quote={'Delightful microinteractions prompt curiosity and exploration.'}/>*/}

                <Section title={'Final Design'}
                    img={cards3} img2={cards2b}/>

                <Section title={'Assessment and Outcomes'}
                    text={'I made many changes based on our testing sessions, and as of the time of this writing the Interactive Principles website is live and ready to be used in the graduate Educational Game Design course next semester. Future OHLab interns will continue to iterate on the website as students use it and provide additional feedback.'}/>

                <Section title={'Faculty Participant Quote'} quote={'I think this is potentially groundbreaking.'}/>

                <Section title={'View Project'} text={'View the live website:'} link={'http://www.edugames.design/principles'}/>

                <Section title={'View the Source Code'} text={'View the project source code on Github:'} link={'https://github.com/eharpste/interactive-principles'}/>

                <Section title={'Demo Video'}/>
                <div className={'video-responsive'}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/RwJ3SbDKNDc?rel=0&amp;showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <Backlink/>
            </div>
        );
    }
}