import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactGA from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import toy from '../images/thumbnails/toy.jpg';
import dci from '../images/thumbnails/dci.jpg';
import thor from '../images/thumbnails/thor.jpg';
import hosp from '../images/thumbnails/environment.png';
import stanley from '../images/thumbnails/stanley.png';
import women from '../images/thumbnails/women.jpg';
import cards from '../images/thumbnails/cards.jpg';
import ucre from '../images/thumbnails/ucre.jpg';

import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Tag from './portfolio/Tag';
// import Tag from './portfolio/Tag';

//Google Analytics
function initializeReactGA() {
    ReactGA.initialize('UA-149504089-1');
    ReactGA.event({
        category: 'Page Views',
        action: 'View Portfolio Page'
    });
}

function toggleFilter() {
    ReactGA.event({
        category: 'Portfolio Actions',
        action: 'Toggle Work/Play'
    });
}

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
                'tags': ['design', 'instructional design', 'game design'],
                'desc': 'Leveraging the power of play to teach kids to clean up.',
                'img': toy,
                'class': 'des',
                'path': 'playsmart'
            },
            {
                'id': 4,
                'title': 'Interactive Principles Project',
                'tags': ['dev', 'research', 'instructional design', 'game design'],
                'desc': 'Making learning science principles more accessible to game designers with a virtual deck of cards.',
                'img': cards,
                'class': 'dev',
                'path': 'interactive-principles'
            },
            {
                'id': 6,
                'title': 'The Art + Human Circuit',
                'tags': ['design', 'ux research', 'ux design'],
                'desc': 'Breaking the stigma of public art being “boring sculptures” to engage citizens and build community.',
                'img': ucre,
                'class': 'des',
                'path': 'art-circuit'
            },
            {
                'id': 3,
                'title': 'Prototyping with Environmental Factors',
                'tags': ['dev', 'ux research', 'environmental design'],
                'desc': 'Helping hospital employees beat eye-strain during long shifts, with code changes and environmental changes.',
                'img': hosp,
                'class': 'dev',
                'path': 'environmental-design'
            },
            {
                'id': 0,
                'title': 'Diverse Computing Rebrand',
                'tags': ['design', 'branding'],
                'desc': 'Reimagining a brand that had been overshadowed by its flagship product to reach new markets.',
                'img': dci,
                'class': 'des',
                'path': 'dci-brand'
            },
            {
                'id': 1,
                'title': 'Tennessee Homeland Online Records',
                'tags': ['dev', 'angular2', 'branding'],
                'desc': 'Empowering officers to access criminal records on the go, as quickly and safely as possible.',
                'img': thor,
                'class': 'dev',
                'path': 'thor'
            }
        ];

        this.plays = [
            {
                'id': 0,
                'title': 'Women Drowning Photo Series',
                'tags': ['design', 'Photography', 'Art Direction'],
                'desc': 'Exploring concepts of power, longing, loss, and femininity, on film and digital.',
                'img': women,
                'class': 'des',
                'path': 'women-drowning'
            },
            {
                'id': 1,
                'title': 'The Shining Hotel Project',
                'desc': 'Imagining what the hotel that inspired The Shining looked like through the eyes of Stephen King in 1977.',
                'tags': ['dev', 'react', 'interactive art'],
                'img': stanley,
                'class': 'dev',
                'path': 'shining-hotel'
            }
        ];

        initializeReactGA();
    }

    changeModeFilter(e) {
        this.setState({ filter: e });

        toggleFilter();
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
                            <div className={'item-preview__content__desc__text'}>
                                {work.desc}
                            </div>
                            <div className="item-preview__content__desc__tags">
                                <FontAwesomeIcon icon={'tag'} className={'item-preview__content__desc__tags__icon'}/>
                                {work.tags.map((tag, index, last) =>
                                    <Tag key={index} tag={tag + (((index + 1) != last.length) ? ', ' : '')}/>
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
                        Hi! I’m a product designer who likes to code. <br/>
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