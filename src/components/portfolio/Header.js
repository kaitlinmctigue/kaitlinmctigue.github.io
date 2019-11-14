import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    problem() {
        if (this.props.problem) {
            return(
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12 section'}>
                        <Title title={'The Problem'} />
                        <p>
                            {this.props.problem}
                        </p>
                    </div>
                </div>
            );
        }
    }

    process() {
        if (this.props.process) {
            return(
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12 section'}>
                        <Title title={'The Process'} />
                        <p>
                            {this.props.process}
                        </p>
                    </div>
                </div>
            );
        }
    }

    solution() {
        if (this.props.solution) {
            return(
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12 section'}>
                        <Title title={'The Solution'} />
                        <p className={'section-quote'}>
                            {this.props.solution}
                        </p>
                    </div>
                </div>
            );
        }
    }

    nda() {
        if (this.props.nda) {
            return(
                <p className={'header__nda'}>
                    Public overview of NDA-protected work
                </p>
            );
        }
    }

    render() {
        return (
            <div className={'header'}>

                {/*head*/}
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12'}>
                        <Link to={'/'} className={'link header__backlink'}>
                            <FontAwesomeIcon icon={'arrow-left'}/>
                            Back to All Projects
                        </Link>
                        <div className={'header__title title'}>
                            {this.props.title}
                        </div>
                        {this.nda()}
                        <div className={'header__tags'}>
                            <FontAwesomeIcon icon={'tag'} className={'header__tags__icon'}/>
                            {this.props.tags.map((tag, index, last) =>
                                <Tag key={index} tag={tag + (((index + 1) != last.length) ? ', ' : '')}/>
                            )}
                        </div>
                    </div>
                </div>

                {/*splash*/}
                <div className={'header__splash'} style={{backgroundImage: 'url(' + this.props.splash + ')'}}></div>

                {/*setup*/}
                {this.problem()}

                {this.process()}

                {this.solution()}
            </div>
        );
    }
}

Header.propTypes = {
    tags: PropTypes.array,
    title: PropTypes.string,
    nda: PropTypes.bool,
    splash: PropTypes.string,
    problem: PropTypes.string,
    process: PropTypes.string,
    solution: PropTypes.string
};

export default Header;