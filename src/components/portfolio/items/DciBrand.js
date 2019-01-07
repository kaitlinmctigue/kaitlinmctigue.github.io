import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/dci.jpg';

import Title from '../Title';
import Section from '../Section';
import Img from '../Img';
import Setup from '../Setup';

import logo1 from '../../../images/portfolio/logo_before.png';
import logo2 from '../../../images/portfolio/logo_after.png';
import banners from '../../../images/portfolio/banners.jpg';
import brochure from '../../../images/portfolio/brochure.jpg';
import document from '../../../images/portfolio/document.jpg';
import guide from '../../../images/portfolio/guide.jpg';
import proposal1 from '../../../images/portfolio/proposal1.jpg';
import proposal2 from '../../../images/portfolio/proposal2.jpg';
import proposal3 from '../../../images/portfolio/proposal3.jpg';
import Backlink from '../Backlink';

const title = 'Diverse Computing Rebrand';
const tags = ['Design', 'Branding'];
const classification = 'des';
const problem = 'Diverse Computing\u2019s flagship product, eAgent, had overshadowed its parent company. The strength of the eAgent brand made it tricky for DCI to branch out beyond the NCIC access domain, and position itself in the criminal justice community as, well, diverse.';
const solution = 'A new identity for Diverse Computing that complements the eAgent brand and sets the foundation for a comprehensive platform of solutions form the criminal justice community.';
const role = 'I was completely accountable for this rebrand from logo design, to website overhaul, to updating document designs and other print materials, to corporate education and enforcement.';
const team = 'Consulting and executive decisions from senior leadership: Lester Hutt, Andrew Rawling, Dan Percy, and Tony Pun. Support from interns: Christopher Hill and Brooke Winston.';
const brand = 'DCI has always positioned itself as a software company serving Law Enforcement agencies. DCI\u2019s collateral featured lots of \u201Cbadge and gun\u201D imagery, and often leveraged fear as a method of persuasion (\u201Cwill your software be there for your officers in a life-or-death situation?\u201D). Black, grey, and gold were used heavily, and both visual design and written copy were quite serious and formal.';

export default class DciBrand extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={'portfolio-page ' + classification}>
                <Header
                    title={title}
                    tags={tags}
                    splash={splashImg}
                    problem={problem}
                    solution={solution}
                />

                <Setup
                    client={'Diverse Computing, Inc'}
                    role={role}
                    team={team}
                    year={2016}
                    before={logo1}
                    after={logo2}
                />

                <Section title={'The Former Brand'} text={brand}/>

                <div className={'row'}>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Section title={'Before'} quote={'A software company serving law enforcement agencies'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-6'}>
                        <Section title={'After'} quote={'A services company partnering with the criminal justice community'}/>
                    </div>
                </div>

                <div className={'row section'}>
                    <div className={'col-xs-12'}>
                        <Title title={'The New Brand'}/>
                        <p>Key selling points:</p>
                        <ul>
                            <li>Next-generation open-source technology.</li>
                            <li>“By CJI professionals, for CJI professionals”: many employees with experience working as a officers.</li>
                            <li>Expertise in CJIS compliance.</li>
                        </ul>
                    </div>
                </div>

                <Section title={'7 Foot Conference Banners'} img={banners}/>

                <Section title={'Marketing Collateral'} img={brochure}/>

                <div className={'row section'}>
                    <div className={'col-xs-12 col-sm-12'}>
                        <Title title={'RFP Presentation'}/>
                    </div>
                    <div className={'col-xs-12 col-sm-4'}>
                        <Img img={proposal1}/>
                    </div>
                    <div className={'col-xs-12 col-sm-4'}>
                        <Img img={proposal2}/>
                    </div>
                    <div className={'col-xs-12 col-sm-4'}>
                        <Img img={proposal3}/>
                    </div>
                </div>

                <Section title={'Document Design'} img={document}/>

                <Section title={'Guide'} img={guide}/>

                <Backlink/>
            </div>
        );
    }
}