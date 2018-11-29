import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resume from '../mctigue_resume.pdf';

const resumelink = '../images/mctigue_resume.pdf';
const linkedin = 'https://www.linkedin.com/in/katiemctigue';

export default class Resume extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'resume'}>
                <Document
                    file={resume}>
                    <Page width={1100} pageNumber={1} />
                </Document>
                <div className={'resume__actions'}>
                    <div className={'row'}>
                        <div className={'col-xs-12 col-md-6'}>
                            <Link to={resumelink} target={'_blank'} className={'link'}>
                                <span className='fas fa-arrow-circle-down'></span>
                                Download PDF Resume
                            </Link>
                        </div>
                        <div className={'col-xs-12 col-md-6'}>
                            <Link to={linkedin} className={'link'}>
                                <span className='fas fa-arrow-circle-down'></span>
                                View My LinkedIn Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}