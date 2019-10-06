import React, { Component } from 'react';

import ReactGA from 'react-ga';

import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headshot from '../images/headshot.jpg';

function initializeReactGA() {
    ReactGA.initialize('UA-149504089-1');
    ReactGA.pageview('/about');
    ReactGA.event({
        category: 'Page Views',
        action: 'View About Page'
    });
}

export default class Contact extends Component {

    constructor() {
        super();

        initializeReactGA();
    }

    render() {
        return (
            <div className={'contact'}>
                <h1 className={'title contact__title'}>
                    A bonafide unicorn who cares about solving people problems and code problems.
                </h1>
                <div className={'contact__img'}>
                    <img src={headshot} className={'img img-responsive'} />
                </div>
                <div className={'contact__text'}>
                    <div className={'contact__text__body'}>
                        <p>
                            I spend my days at TeleTracking working towards a mission of getting people healthcare without the wait, and my evenings at Carnegie Mellon University studying Human Computer Interaction.
                            I work full time while taking classes part time, and I expect to complete my Masters in HCI in August 2020.
                        </p>
                        <p>
                            Some tools I like to work with include the Adobe Suite, Sketch, HTML/CSS, SASS and LESS, React, Angular, and plain old javascript.
                        </p>
                        <p>
                            In my free time, I like to shoot film photography, write songs, and play way too much Stardew Valley.
                        </p>
                        <p>
                            <a className={'link'} href={'mailto:kaitlinmctigue@gmail.com'} target={'_blank'}>
                                <FontAwesomeIcon icon={'envelope'}/>
                                shoot me an email at kaitlinmctigue@gmail.com
                            </a>
                        </p>

                        <div className={'contact__text__body__social'}>
                            <div className={'row'}>
                                <div className={'col-xs-12 contact__text__body__social--top'}>
                                    I actively do stuff on <br/>
                                    <SocialIcon url="https://www.linkedin.com/in/katiemctigue" />
                                    <SocialIcon url="https://medium.com/@katiemctigue" />
                                    <SocialIcon url="https://github.com/kaitlinmctigue" />
                                    <SocialIcon url="https://www.instagram.com/katiemctigue/" />
                                    <SocialIcon url="https://open.spotify.com/user/kaitlinmctigue" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    Maybe one day I will update my <br/>
                                    <SocialIcon url="https://twitter.com/MctigueKatie?lang=en" />
                                    <SocialIcon url="https://dribbble.com/katiemctigue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}