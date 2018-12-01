import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Backlink extends Component {

    render() {
        return (
            <div className={'section'}>
                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-12'}>
                        <Link to={'/'} className={'link'}>
                            Back to All Projects
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlink;