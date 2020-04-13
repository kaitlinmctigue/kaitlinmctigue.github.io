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
                    I like writing pixel-perfect <span className={'text--red'}>css</span> and asking <span className={'text--blue'}>questions</span> that other people are afraid to ask.
                </h1>
                <div className={'contact__img'}>
                    <img src={headshot} className={'img img-responsive'} />
                </div>
                <div className={'contact__text'}>
                    <div className={'contact__text__body'}>
                        <p>
                            I’m a big picture thinker, but I’m never afraid to get my hands dirty.
                        </p>
                        <p>
                            I’ve found that I can make a big impact when I serve as translator between engineers and product folks.
                        </p>
                        <p>
                            I like playing games, and thinking about ways that game-based patterns can delight people and motivate them to change their behavior.
                        </p>
                        <p>
                            I used to be afraid of UX research, until I realized that research is really just asking questions and then being strategic about the methods you use to get answers. I’m obsessed with data, but I try not to let that suck the humanity out of everything.
                        </p>
                        <p>
                            I love telling stories.
                        </p>
                        <p>
                            <a className={'link'} href={'mailto:kaitlinmctigue@gmail.com'} target={'_blank'}>
                                <FontAwesomeIcon icon={'envelope'}/>
                                shoot me an email at kaitlinmctigue@gmail.com
                            </a>
                        </p>

                        <div className={'contact__text__body__social'}>
                            <div className={'row'}>
                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    I’m currently working on the 100 day #dailyui challenge on<SocialIcon url="https://dribbble.com/katiemctigue" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--top'}>
                                    I enjoy dumping my ideas out into the world on<SocialIcon url="https://medium.com/@katiemctigue" />and<SocialIcon url="https://github.com/kaitlinmctigue" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    I pretend to be an adult on<SocialIcon url="https://www.linkedin.com/in/katiemctigue" />and<SocialIcon url="https://twitter.com/MctigueKatie?lang=en" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    But mostly I just post photos of my cats on<SocialIcon url="https://www.instagram.com/katiemctigue/" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    I write songs about my cats and other things on<SocialIcon url="https://open.spotify.com/artist/7mJOp9EcXEdAH6TL36flXw?si=lSyRjb79QlKhm9VcYZV7zA" />and<SocialIcon url="https://soundcloud.com/pacingmusic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}