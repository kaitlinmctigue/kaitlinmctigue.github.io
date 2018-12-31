import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Quote from './Quote';
import Img from './Img';

class Section extends Component {

    title() {
        if (this.props.title) {
            return (
                <Title title={this.props.title} />
            );
        }
    }

    text() {
        if (this.props.text) {
            return (
                <p>
                    {this.props.text}
                </p>
            );
        }
    }

    quote() {
        if (this.props.quote) {
            return (
                <Quote quote={this.props.quote}></Quote>
            );
        }
    }

    img() {
        if (this.props.img) {
            return (
                <Img img={this.props.img}></Img>
            );
        }
    }

    link() {
        if (this.props.link) {
            return (
                <a href={this.props.link} target={'_blank'} className={'link'}>{this.props.link}</a>
            );
        }
    }

    render() {
        return (
            <div className={'section row'}>
                <div className={'col-xs-12 col-sm-12 section__title'}>
                    {this.title()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__text'}>
                    {this.text()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__quote'}>
                    {this.quote()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__img'}>
                    {this.img()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__img'}>
                    {this.link()}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    quote: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
};

export default Section;