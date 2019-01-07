import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Backlink extends Component {

    toTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={'section backlink'}>
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Link to={'/'} className={'link backlink__back'}>
                            <FontAwesomeIcon icon={'arrow-left'}/>
                            Back to All Projects
                        </Link>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <a className={'link backlink__top'} onClick={this.toTop}>
                            <FontAwesomeIcon icon={'arrow-up'}/>
                            Back to Top
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlink;