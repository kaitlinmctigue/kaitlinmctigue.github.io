import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spacer extends Component {

    render() {
        return (
            <div className={'row'}>
                <div className={'col-xs-12'}>
                    <div className={'spacer spacer--' + (this.props.size ? this.props.size : 'default')}/>
                </div>
            </div>
        );
    }
}

Spacer.propTypes = {
    size: PropTypes.string
};

export default Spacer;