import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Insight extends Component {

    render() {
        return (
            <div className={'section row'}>
                <div className={'col-xs-12 col-sm-12 section__title'}>
                    <Title title={this.props.title ? this.props.title : 'Key Insight'} />
                </div>
                <div className={'col-xs-12 col-sm-12 insight'}>
                    <FontAwesomeIcon icon={'lightbulb'} className={'insight__icon'}/>
                    <div className={'insight__text'}>
                        <div className={'insight__text__title title'}>{this.props.insight}</div>
                        <p>
                            {this.props.desc}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Insight.propTypes = {
    title: PropTypes.string,
    insight: PropTypes.string,
    desc: PropTypes.string
};

export default Insight;