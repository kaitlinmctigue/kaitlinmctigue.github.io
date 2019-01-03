import React, { Component } from 'react';
import Img from './portfolio/Img';
import { SocialIcon } from 'react-social-icons';
import headshot from '../images/headshot.jpg';

export default class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'contact'}>
                <div className={'contact__img'}>
                    <img src={headshot} className={'img img-responsive'} />
                </div>
                <div className={'contact__text'}>
                    <h1 className={'title contact__text__title'}>
                        looking for help on a project, or just a cup of coffee?
                    </h1>
                    <div className={'contact__text__body'}>
                        <p>Shoot me an email at kaitlinmctigue at gmail dot com</p>
                        {/*<p><a className={'link'} href={'https://www.linkedin.com/in/katiemctigue'} target={'_blank'}>linkedin.com/in/katiemctigue</a></p>*/}

                        <div className={'contact__text__body__social'}>
                            <div className={'row'}>
                                <div className={'col-xs-12 contact__text__body__social--top'}>
                                    I actively do stuff on <br/>
                                    <SocialIcon url="https://www.linkedin.com/in/katiemctigue" />
                                    <SocialIcon url="https://medium.com/@katiemctigue" />
                                    <SocialIcon url="https://github.com/kaitlinmctigue" />
                                    <SocialIcon url="https://www.instagram.com/katiemctigue/" />
                                </div>

                                <div className={'col-xs-12 contact__text__body__social--bottom'}>
                                    Maybe one day I will update my <br/>
                                    <SocialIcon url="https://twitter.com/MctigueKatie?lang=en" />
                                    <SocialIcon url="https://dribbble.com/katiemctigue" />
                                    <SocialIcon url="https://open.spotify.com/user/kaitlinmctigue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}