import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {

    render() {
        return (
            <div className={'section-header'}>
                {this.props.title}
            </div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string
};

export default Title;