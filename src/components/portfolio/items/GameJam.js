import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../Header';
import splashImg from '../../../images/thumbnails/gamejam.jpg';
import gamejamlogo from '../../../images/portfolio/gamejam/gamejamlogo.jpg';
import gamejam1 from '../../../images/portfolio/gamejam/gamejam1.jpg';
import gamejam2 from '../../../images/portfolio/gamejam/gamejam2.jpg';
import gamejam3 from '../../../images/portfolio/gamejam/gamejam3.jpg';
import gamejam4 from '../../../images/portfolio/gamejam/gamejam4.jpg';

import Section from '../Section';
import Backlink from '../Backlink';

import Setup from '../Setup';

const title = 'Prompting players to think about how cultural values change with new experiences';
const tags = ['Game Design', 'Transformational Design'];
const classification = 'des';
const body = 'The theme for the 2019 Pittsburgh Board Game Jam was “foreign.”\n' +
    '\n' +
    'As our team of four gathered around a table full of random objects and game pieces, we brainstormed lots of different associations on the theme. Aliens. Puns about the number 4. Foreign objects in an x-ray. United Nations.\n';
const game = 'We decided on a goal of making the player feel like a foreigner. “The End of Our Exploring” is a game in which the rules change every few turns as players “immigrate”, and it’s the player’s job to learn the rules before they change. At the end of the game they come “home” and are judged against their home country’s cultural standards.\n';
const rules = 'Each player starts with 2 red cubes, 2 yellow cubes, 2 green cubes, and 2 purple cubes. Each player also has a 3 x 3 grid board, which they will put their cubes on. There will always be one blank space open, like a sliding puzzle.\n' +
    '\n' +
    'Each player represents a culture, with values. Values are represented by the orange cards. Their board is a traveler who will ‘immigrate’ to another culture. When they immigrate, the player gets points if their traveler satisfies the culture’s values. Values are hidden at first, and only become revealed once an immigrant ‘successfully’ meets the values. When this happens, the immigrating player gets 1 point per times the value was represented in their configuration.\n' +
    '\n' +
    'Eventually your traveler will come home, where it will have to satisfy as many of  the home values as possible. These points are worth double, so keep that in mind!';

export default class GameJam extends Component {

    constructor() {
        super();

        //Google Analytics
        ReactGA.initialize('UA-149504089-1');
        ReactGA.event({
            category: 'Project Page Views',
            action: 'View Project: GameJam'
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
                    team={'Brandon Fiksel, Erik Harpstead, Michael Silvestre'}
                    year={2019}
                    client={'Pittsburgh International Game Developers Association, 2019 Board Game Jam'}
                    img={gamejamlogo}
                />

                <Section title={'Background'} img={gamejam3} text={body}/>

                <Section title={'The End of Our Exploring'} img={gamejam1} text={game}/>

                <Section title={'Rules'} text={rules}/>

                <Section title={'Playtesting and Judging'} img={gamejam4}/>

                <Section title={'Outcomes'} img={gamejam2} text={'Our team won the award for Best Use of Theme!'}/>

                <Section link={'http://pigda.org/'} title={'Pittsburgh International Game Developers Association'}/>

                <Backlink/>
            </div>
        );
    }
}