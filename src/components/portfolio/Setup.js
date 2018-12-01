import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Setup extends Component {

    client() {
        if (this.props.client) {
            return(
                <div className={'col-xs-12 col-sm-12 subsection'}>
                    <Title title={'Client'} />
                    <p>
                        {this.props.client}
                    </p>
                </div>
            );
        }
    }

    role() {
        if (this.props.role) {
            return(
                <div className={'col-xs-12 col-sm-12 subsection'}>
                    <Title title={'Role'} />
                    <p>
                        {this.props.role}
                    </p>
                </div>
            );
        }
    }

    team() {
        if (this.props.team) {
            return(
                <div className={'col-xs-12 col-sm-12 subsection'}>
                    <Title title={'Team'} />
                    <p>
                        {this.props.team}
                    </p>
                </div>
            );
        }
    }

    year() {
        if (this.props.team) {
            return(
                <div className={'col-xs-12 col-sm-12 subsection'}>
                    <Title title={'Year'} />
                    <p>
                        {this.props.year}
                    </p>
                </div>
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