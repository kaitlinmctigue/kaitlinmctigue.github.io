import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quote extends Component {

    render() {
        return (
            <div className={'section-quote'}>
                {this.props.quote}
            </div>
        );
    }
}

Quote.propTypes = {
    quote: PropTypes.object
};

export default Quote;