import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toy from '../images/thumbnails/toy.jpg';
import dci from '../images/thumbnails/dci.jpg';
import thor from '../images/thumbnails/thor.jpg';
import hosp from '../images/thumbnails/environment.png';
import stanley from '../images/thumbnails/stanley.png';
import women from '../images/thumbnails/women.jpg';

import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Tag from './portfolio/Tag';

export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'work'
        };

        this.changeModeFilter = this.changeModeFilter.bind(this);

        this.works = [
            {
                'id': 2,
                'title': 'Playsmart RFID Toys Concept',
                'tags': ['design', 'instructional design', 'gamification'],
                'img': toy,
                'class': 'des',
                'path': 'playsmart'
            },
            {
                'id': 1,
                'title': 'Tennessee Homeland Online Records',
                'tags': ['dev', 'angular2', 'branding'],
                'img': thor,
                'class': 'dev',
                'path': 'thor'
            },
            {
                'id': 0,
                'title': 'Diverse Computing Rebrand',
                'tags': ['design', 'branding'],
                'img': dci,
                'class': 'des',
                'path': 'dci-brand'
            },
            {
                'id': 3,
                'title': 'Prototyping with Environmental Factors',
                'tags': ['dev', 'ux research', 'environmental design'],
                'img': hosp,
                'class': 'dev',
                'path': 'environmental-design'
            }
        ];

        this.plays = [
            {
                'id': 0,
                'title': 'Women Drowning Photo Series',
                'tags': ['design', 'Photography', 'Art Direction'],
                'img': women,
                'class': 'des',
                'path': 'women-drowning'
            },
            {
                'id': 1,
                'title': 'The Shining Hotel Project',
                'tags': ['dev', 'react', 'interactive art'],
                'img': stanley,
                'class': 'dev',
                'path': 'shining-hotel'
            }
        ];
    }

    changeModeFilter(e) {
        this.setState({ filter: e });
    }

    renderTag(tag) {
        return(
            <span className={'badge badge--' + {tag}}>
                {tag}
            </span>
        );
    }

    renderPreview(work) {
        return(
            <div className="col-xs-12 col-md-6" key={work.id}>
                <div className="item-preview">
                    <Link to={'/portfolio/' + work.path} className={'item-preview__content item-preview__content--' + work.class}>
                        <div className={'item-preview__content__img'} style={{backgroundImage: 'url(' + work.img + ')'}}></div>
                        <div className="item-preview__content__desc">
                            <div className={'item-preview__content__desc__title item-preview__content__desc__title--' + work.class}>
                                {work.title}
                            </div>
                            <div className="item-preview__content__desc__desc">
                                {work.tags.map((tag) =>
                                    <Tag tag={tag} key={tag}></Tag>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        var items;
        if (this.state.filter == 'play') {
            items =
                <div className="row">
                    {this.plays.map(this.renderPreview)}
                </div>;
        } else {
            items =
                <div className="row">
                    {this.works.map(this.renderPreview)}
                </div>;
        }

        return (
            <div className="portfolio">
                <div className="title">
                    <span className="title__des">Designer & </span>
                    <br className='hidden-sm hidden-md hidden-lg'/>
                    <span className="title__dev">Developer</span>
                </div>
                <div className="portfolio__intro mx-auto">
                    <p>
                        Hi! I’m a product <span className={'text--blue'}>designer</span> who likes to <span className={'text--red'}>code</span>. <br/>
                        I’m interested in AI, consumer health, game-based UI patterns, and <a href={'/#/contact'}>lots of other stuff</a>.
                    </p>
                </div>

                <div className="portfolio__body">
                    <div className="portfolio__body__links">
                        <ButtonToolbar>
                            <span className={'portfolio__body__links__filter pull-left'}>filter: </span>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={'work'} value={this.state.filter} onChange={this.changeModeFilter}>
                                <ToggleButton value={'work'}>Work</ToggleButton>
                                <ToggleButton value={'play'}>Play</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>

                    <div className="portfolio__body__items">
                        {items}
                        <p className={'portfolio__body__items__nda'}>
                            Note: All of my work at TeleTracking is protected under an NDA. Please feel free to reach out to discuss further.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}