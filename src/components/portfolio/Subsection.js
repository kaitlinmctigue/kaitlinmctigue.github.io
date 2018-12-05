import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Img from './Img';

class Subsection extends Component {

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
                <a href={this.props.link} target={'_back'} className={'link'}>{this.props.link}</a>
            );
        }
    }

    render() {
        return (
            <div className={'col-xs-12 col-sm-12 subsection'}>
                {this.title()}
                {this.text()}
                {this.img()}
                {this.link()}
            </div>
        );
    }
}

Subsection.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    quote: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string
};

export default Subsection;