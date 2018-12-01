import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Quote from './Quote';

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

    render() {
        return (
            <div className={'section row'}>
                <div className={'col-xs-12 col-sm-12'}>
                    {this.title()}
                </div>
                <div className={'col-xs-12 col-sm-12'}>
                    {this.text()}
                </div>
                <div className={'col-xs-12 col-sm-12'}>
                    {this.quote()}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    quote: PropTypes.string
};

export default Section;