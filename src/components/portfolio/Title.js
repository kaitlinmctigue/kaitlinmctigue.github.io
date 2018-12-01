import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {

    render() {
        return (
            <h2 className={'section-header'}>
                {this.props.title}
            </h2>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string
};

export default Title;