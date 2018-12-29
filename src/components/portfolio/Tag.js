import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {

    render() {
        return (
            <span key={this.props.tag.toString()} value={this.props.tag} className={'badge badge--' + (this.props.tag.toString().toLowerCase())}>
                {this.props.tag}
            </span>
        );
    }
}

Tag.propTypes = {
    tag: PropTypes.string
};

export default Tag;