import React, { Component } from 'react';
import Header from '../Header';
import splashImg from '../../../images/thumbnails/women.jpg';

import Section from '../Section';
import Backlink from '../Backlink';

import hali from '../../../images/portfolio/womendrowning/hali.jpg';
import kayla from '../../../images/portfolio/womendrowning/kayla.jpg';
import melina from '../../../images/portfolio/womendrowning/melina.jpg';
import mikayla from '../../../images/portfolio/womendrowning/mikayla.jpg';
import nest from '../../../images/portfolio/womendrowning/nest.jpg';
import sierra from '../../../images/portfolio/womendrowning/sierra.jpg';
import Setup from '../Setup';

const title = 'Women Drowning';
const tags = ['Design', 'Photography', 'Art Direction'];
const classification = 'des';
const body = 'This collection of images showcases my artistic development learning to work with models. I photographed each of these images in 2015, some on a 35mm film camera and some on my Nikon DSLR. It was my intention to represent that to a certain extent each woman is “drowning” within the narrative of the photo that contains her.';

export default class WomenDrowning extends Component {

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
                />

                <Setup
                    role={'Photographer, Art Director'}
                    year={2016}
                />

                <Section title={'Background'} text={body}/>

                <Section title={'Hali'} img={hali}/>
                <Section title={'Mikayla'} img={mikayla}/>
                <Section title={'Eliza'} img={nest}/>
                <Section title={'Sierra'} img={sierra}/>
                <Section title={'Kayla'} img={kayla}/>
                <Section title={'Melina'} img={melina}/>

                <Backlink/>
            </div>
        );
    }
}