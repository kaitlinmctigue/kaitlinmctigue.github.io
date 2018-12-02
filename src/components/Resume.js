import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../mctigue_resume.pdf';

const resumelink = 'https://kaitlinmctigue.github.io/images/mctigue_resume.pdf';
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
                            <a href={resumelink} target={'_blank'} className={'link'}>
                                <FontAwesomeIcon icon={'arrow-circle-down'}/>
                                Download PDF Resume
                            </a>
                        </div>
                        <div className={'col-xs-12 col-md-6'}>
                            <a href={linkedin} target={'_blank'}  className={'link'}>
                                View My LinkedIn Profile
                                <FontAwesomeIcon icon={'arrow-right'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}