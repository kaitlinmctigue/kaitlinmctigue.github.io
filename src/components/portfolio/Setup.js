import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Subsection from './Subsection';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spacer from './Spacer';

class Setup extends Component {

    client() {
        if (this.props.client) {
            return(
                <Subsection title={'Client'} text={this.props.client}></Subsection>
            );
        }
    }

    course() {
        if (this.props.course) {
            return(
                <Subsection title={'Course'} text={this.props.course}></Subsection>
            );
        }
    }

    role() {
        if (this.props.role) {
            return(
                <Subsection title={'My Role'} text={this.props.role}></Subsection>
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
        if (this.props.year) {
            return(
                <Subsection title={'Year'} text={this.props.year.toString()}></Subsection>
            );
        }
    }

    img() {
        if (this.props.img) {
            return(
                <Subsection img={this.props.img}></Subsection>
            );
        }
    }

    before() {
        if (this.props.before) {
            return(
                <Subsection title={'Before'} img={this.props.before}></Subsection>
            );
        }
    }

    after() {
        if (this.props.after) {
            return(
                <Subsection title={'After'} img={this.props.after}></Subsection>
            );
        }
    }

    requestPermission() {
        if (this.props.nda) {
            return(
                <div className={'subsection'}>
                    <Title title="There's more to this..."/>
                    <div>
                        I am unable to share further details about this project online. Shoot me an email to discuss further.
                    </div>
                    <Spacer size={'smallest'}/>
                    <a href={'mailto:kaitlinmctigue@gmail.com'} className={'link'}>
                        <FontAwesomeIcon icon={'envelope'}/>
                        Shoot me an email
                    </a>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className={'section'}>
                    <div className={'row setup'}>
                        <div className={'col-xs-12 col-sm-6'}>
                            {this.year()}
                            {this.client()}
                            {this.course()}
                            {this.role()}
                            {this.team()}
                        </div>
                        <div className={'col-xs-12 col-sm-6'}>
                            {this.img()}
                            {this.before()}
                            {this.after()}
                            {this.requestPermission()}
                        </div>
                    </div>
                </div>
                {this.props.projectLink ?
                    <div className={'section'}>
                        <div className={'row'}>
                            <div className={'col-xs-12 col-sm-12 section__title'}>
                                <Title title={'View Project Website'} />
                            </div>
                            <div className={'col-xs-12 col-sm-12 section__link'}>
                                <a href={this.props.projectLink} target={'_blank'} className={'link section-quote'}>{this.props.projectLinkText ? this.props.projectLinkText : this.props.projectLink}</a>
                            </div>
                        </div>
                    </div> :
                    <div/>
                }
            </div>
        );
    }
}

Setup.propTypes = {
    client: PropTypes.string,
    course: PropTypes.string,
    role: PropTypes.string,
    team: PropTypes.string,
    year: PropTypes.number,
    img: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string,
    nda: PropTypes.bool,
    projectLink: PropTypes.string,
    projectLinkText: PropTypes.string
};

export default Setup;