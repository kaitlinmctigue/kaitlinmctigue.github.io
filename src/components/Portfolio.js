import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toy from '../images/thumbnails/toy.jpg';
import dci from '../images/thumbnails/dci.jpg';
import thor from '../images/thumbnails/thor.jpg';
import hosp from '../images/thumbnails/hosp.jpg';

export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'work'
        };

        this.changeModeFilter = this.changeModeFilter.bind(this);

        this.works = [
            {
                'id': 0,
                'title': 'Diverse Computing Rebrand',
                'tags': ['brand'],
                'img': dci,
                'class': 'des',
                'path': 'dci-brand'
            },
            {
                'id': 3,
                'title': 'Environmental Design Research',
                'tags': ['research', 'dev'],
                'img': hosp,
                'class': 'dev',
                'path': 'dci'
            },
            {
                'id': 2,
                'title': 'Playsmart RFID Toys Concept',
                'tags': ['instructional design', 'physical computing'],
                'img': toy,
                'class': 'des',
                'path': 'dci'
            },
            {
                'id': 1,
                'title': 'Tennessee Homeland Online Records',
                'tags': ['angular2', 'dev', 'brand'],
                'img': thor,
                'class': 'dev',
                'path': 'dci'
            }
        ];

        this.plays = [
            {
                'id': 0,
                'title': 'Women Drowning Photo Series',
                'tags': [],
                'img': '',
                'class': 'des'
            },
            {
                'id': 1,
                'title': 'The Shining Hotel Project',
                'tags': [],
                'img': '',
                'class': 'dev'
            }
        ];
    }

    changeModeFilter(test) {
        this.setState({filter: test});
    }

    renderTag(tag) {
        return(
            <span className="badge">
                {tag}
            </span>
        );
    }

    renderPreview(work) {
        return(
            <div className="col-xs-12 col-sm-6" key={work.id}>
                <div className="item-preview">
                    <Link to={'/portfolio/' + work.path} className={'item-preview__content item-preview__content--' + work.class}>
                        <div className={'item-preview__content__img'} style={{backgroundImage: 'url(' + work.img + ')'}}></div>
                        <div className="item-preview__content__desc">
                            <div className={'item-preview__content__desc__title item-preview__content__desc__title--' + work.class}>
                                {work.title}
                            </div>
                            <div className="item-preview__content__desc__desc">
                                {work.tags.map((tag) =>
                                    <span key={tag.toString()} value={tag} className={'badge'}>
                                        {tag}
                                    </span>
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
            <div className="portfolio text-center">
                <Link to='/' className="logo"></Link>
                <div className="title">
                    <span className="title__des">UX Designer & </span>
                    <br className='hidden-sm hidden-md hidden-lg'/>
                    <span className="title__dev">UI Developer</span>
                </div>
                <div className="portfolio__intro mx-auto text-center">
                    <p>Bonafide unicorn specializing in design systems and frameworks for user interfaces. I enjoy high-fidelity prototyping, writing pixel-perfect css, and asking questions that other people are afraid to ask.</p>
                </div>

                <div className="portfolio__body">
                    <div className="portfolio__body__links">
                        <div className={'link ' + (this.state.filter == 'work' ? 'active' : '')} onClick={this.changeModeFilter.bind(this, 'work')}>
                            Work
                        </div>
                        <div className={'link ' + (this.state.filter == 'play' ? 'active' : '')} onClick={this.changeModeFilter.bind(this, 'play')}>
                            Play
                        </div>
                    </div>

                    <div className="portfolio__body__items">
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}