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

    textAfterImg() {
        if (this.props.textAfterImg) {
            return (
                <p>
                    {this.props.textAfterImg}
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
                <Img img={this.props.img} caption={this.props.caption ? this.props.caption : ''}></Img>
            );
        }
    }

    staticImg() {
        if (this.props.staticImg) {
            return (
                <img src={this.props.staticImg} className={'img img-responsive'}></img>
            );
        }
    }

    caption() {
        if (this.props.caption) {
            return (
                <p>
                    <em>
                        {this.props.caption}
                    </em>
                </p>
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
                    {this.staticImg()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__text'}>
                    {this.caption()}
                </div>
                <div className={'col-xs-12 col-sm-12 section__text'}>
                    {this.textAfterImg()}
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
    textAfterImg: PropTypes.string,
    quote: PropTypes.string,
    img: PropTypes.string,
    staticImg: PropTypes.string,
    caption: PropTypes.string,
    link: PropTypes.string
};

export default Section;