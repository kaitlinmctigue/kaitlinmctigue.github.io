import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Subsection from './Subsection';

class Setup extends Component {

    client() {
        if (this.props.client) {
            return(
                <Subsection title={'Client'} text={this.props.client}></Subsection>
            );
        }
    }

    role() {
        if (this.props.role) {
            return(
                <Subsection title={'Role'} text={this.props.role}></Subsection>
            );
        }
    }

    team() {
        if (this.props.team) {
            return(
                <Subsection title={'Team'} text={this.props.team}></Subsection>
            );
        }
    }

    year() {
        if (this.props.team) {
            return(
                <Subsection title={'Year'} text={this.props.year}></Subsection>
            );
        }
    }

    render() {
        return (
            <div className={''}>
                <div className={'row setup'}>
                    {this.client()}
                    {this.year()}
                    {this.role()}
                    {this.team()}
                </div>
            </div>
        );
    }
}

Setup.propTypes = {
    client: PropTypes.string,
    role: PropTypes.string,
    team: PropTypes.string,
    year: PropTypes.number
};

export default Setup;