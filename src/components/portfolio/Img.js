import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Img extends Component {

    caption() {
        if (this.props.caption) {
            return (
                <p className={'caption'}>
                    <em>
                        {this.props.caption}
                    </em>
                </p>
            );
        }
    }

    render() {
        return (
            <div className={'row'}>
                <div className={'col-xs-12'}>
                    <img className={'img img-responsive'} src={this.props.img}/>
                </div>
                <div className={'col-xs-12'}>
                    {this.caption()}
                </div>
            </div>
        );
    }
}

Img.propTypes = {
    img: PropTypes.string,
    caption: PropTypes.string,
};

export default Img;