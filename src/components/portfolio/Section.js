import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Quote from './Quote';
import Img from './Img';

class Section extends Component {

    title() {
        if (this.props.title) {
            return (
                <div className={'col-xs-12 col-sm-12 section__title'}>
                    <Title title={this.props.title} />
                </div>
            );
        }
    }

    text() {
        if (this.props.text) {
            return (
                <div className={'col-xs-12 col-sm-12 section__text'}>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            );
        }
    }

    textAfterImg() {
        if (this.props.textAfterImg) {
            return (
                <div className={'col-xs-12 col-sm-12 section__text'}>
                    <p>
                        {this.props.textAfterImg}
                    </p>
                </div>
            );
        }
    }

    quote() {
        if (this.props.quote) {
            return (
                <div className={'col-xs-12 col-sm-12 section__quote'}>
                    <Quote quote={this.props.quote}></Quote>
                </div>
            );
        }
    }

    img() {
        if (this.props.img) {
            console.log(this.props);
            return (
                <div className={'col-xs-12 col-sm-12 section__img'}>
                    <Img img={this.props.img} caption={this.props.caption ? this.props.caption : ''}></Img>
                </div>
            );
        }
    }

    img2() {
        if (this.props.img2) {
            console.log(this.props);
            return (
                <div className={'col-xs-12 col-sm-12 section__img'}>
                    <Img img={this.props.img2}></Img>
                </div>
            );
        }
    }

    staticImg() {
        if (this.props.staticImg) {
            return (
                <div className={'col-xs-12 col-sm-12 section__img'}>
                    <img src={this.props.staticImg} className={'img img-responsive'}></img>
                </div>
            );
        }
    }

    link() {
        if (this.props.link) {
            return (
                <div className={'col-xs-12 col-sm-12 section__link'}>
                    <a href={this.props.link} target={'_blank'} className={'link'}>{this.props.link}</a>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={'section row'}>
                {this.title()}
                {this.text()}
                {this.quote()}
                {this.img()}
                {this.staticImg()}
                {this.textAfterImg()}
                {this.img2()}
                {this.link()}
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
    img2: PropTypes.string,
    caption: PropTypes.string,
    link: PropTypes.string
};

export default Section;