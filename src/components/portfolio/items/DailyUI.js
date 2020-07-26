import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/dailyui.png';
import brain from '../../../images/portfolio/dailyui/brainanimate.gif';
// import day3 from '../../../images/portfolio/dailyui/day3.png';
import day13 from '../../../images/portfolio/dailyui/day13.png';
import day32 from '../../../images/portfolio/dailyui/day32.png';

import Section from '../Section';
import Backlink from '../Backlink';

import Setup from '../Setup';

const title = 'Designing something new every day of quarantine, even if sometimes it totally sucks';
const tags = ['Visual Design', 'UI Design', 'Illustration'];
const classification = 'des';
const body = 'To avoid completely losing my mind (or just speed up the process), I am completing the 100 day Daily UI challenge while in quarantine because of COVID-19. Every day I complete a design challenge. So far, it has been a great way to work on my visual design chops and try all the crazy UI trends I’ve ever wanted to butcher at no risk. \n' +
    '\n' +
    'I’m also keeping a little diary of what goes on each day. Sometimes it’s a grocery list, sometimes it’s unintelligible poetry. We’ll see what happens.\n';

export default class DailyUI extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: DailyUI'
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
                />

                <Setup
                    team={'Allllll byyyy myseeeeelf'}
                    year={2020}
                    projectLink={'https://dribbble.com/katiemctigue'}
                    projectLinkText={'dribbble.com/katiemctigue'}
                />

                <Section title={'Background'} text={body}/>

                <Section title={'Day 13: "Design a Messaging App"'} img={day13} link={'https://dribbble.com/shots/11005420-Daily-UI-Day-13-Messaging-App'}/>

                <Section title={'Day 15: "Design a Settings Page"'} img={brain} link={'https://dribbble.com/shots/11018773-Daily-UI-Day-15-On-Off-Switch'}/>

                {/*<Section title={'Day 3: "Design a Landing Page"'} img={day3} link={'https://dribbble.com/shots/10773062-Daily-UI-Day-3-Landing-Page'}/>*/}

                <Section title={'Day 32: "Design a Crowdfunding Campaign"'} img={day32} link={'https://dribbble.com/shots/11350286-Daily-UI-Day-32-Crowdfunding-Campaign'}/>

                <Section title={'Check Out My Progress on Dribble'} link={'https://dribbble.com/katiemctigue'}/>

                <Section title={'Check Out the Daily UI Project'} link={'https://www.dailyui.co/'}/>

                <Backlink/>
            </div>
        );
    }
}