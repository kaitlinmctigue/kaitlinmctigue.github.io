import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Img extends Component {

    render() {
        return (
            <img className={'img img-responsive'} src={this.props.img}/>
        );
    }
}

Img.propTypes = {
    img: PropTypes.string
};

export default Img;