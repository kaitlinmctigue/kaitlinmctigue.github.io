import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableauReport from 'tableau-react';

class TableauViz extends Component {

    render() {
        return (
            <div className={'row'}>
                <div className={'col-xs-12 tableau-viz'}>
                    <TableauReport url={this.props.url}/>
                </div>
            </div>
        );
    }
}

TableauViz.propTypes = {
    url: PropTypes.string
};

export default TableauViz;