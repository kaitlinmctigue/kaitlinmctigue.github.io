import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resume from '../mctigue_resume.pdf';

export default class Resume extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Document
                    file={resume}>
                    <Page width={1100} pageNumber={1} />
                </Document>
                <Link to={resume} className={'link'}>
                    <i className='fas fa-arrow-circle-down'></i>
                    Download PDF
                </Link>
            </div>
        );
    }
}