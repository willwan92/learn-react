import React, { Component } from 'react';
import propsTypes from 'prop-types';

export default class Comment extends Component {
    static propsTypes = {
        comment: propsTypes.object.isRequired
    };
    render () {
        const { author, content } = this.props.comment;
        return (
            <div className="comment-item">
                <span className="avatar"></span>
                <a href="#">{author}</a>
                <p>{content}</p>
            </div>
        )
    }
}