import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './Tag';

class TagsAndRole extends Component {

    render() {
        return (
            <div className={'item-meta'}>
                <div className='item-meta__role'>
                    <FontAwesomeIcon icon={'user'} className={'item-meta__tags__icon'}/>
                    <span className={'item-meta__role__title'}>
                                    primary role:
                    </span>
                    <span className={'item-meta__role__text item-meta__role__text--' + ((this.props.class == 'des') ? 'des' : 'dev')}>
                        {(this.props.class == 'des') ? 'designer' : 'developer'}
                    </span>
                </div>
                <div className='item-meta__tags'>
                    <FontAwesomeIcon icon={'tag'} className={'item-meta__tags__icon'}/>
                    <span className={'item-meta__tags__title'}>
                                    skills:
                    </span>
                    <span className={'item-meta__tags__text'}>
                        {this.props.tags.map((tag, index, last) =>
                            <Tag key={index} tag={tag + (((index + 1) != last.length) ? ', ' : '')}/>
                        )}
                    </span>
                </div>
            </div>
        );
    }
}

TagsAndRole.propTypes = {
    tags: PropTypes.array,
    class: PropTypes.string
};

export default TagsAndRole;