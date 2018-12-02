import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Backlink extends Component {

    render() {
        return (
            <div className={'section'}>
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12'}>
                        <Link to={'/'} className={'link'}>
                            <FontAwesomeIcon icon={'arrow-left'}/>
                            Back to All Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlink;