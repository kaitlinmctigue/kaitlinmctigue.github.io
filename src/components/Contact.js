import React, { Component } from 'react';
import Img from './portfolio/Img';
import headshot from '../images/headshot.jpg';

export default class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'contact'}>
                <div className={'contact__img'}>
                    <Img img={headshot} />
                </div>
                <div className={'contact__text'}>
                    <h1 className={'title contact__text__title'}>
                        looking for help on a project, or just a cup of coffee?
                    </h1>
                    <div className={'contact__text__body'}>
                        <p>kaitlinmctigue at gmail dot com</p>
                        <p><a className={'link'} href={'https://www.linkedin.com/in/katiemctigue'}>linkedin.com/in/katiemctigue</a></p>
                    </div>
                </div>
            </div>
        );
    }
}