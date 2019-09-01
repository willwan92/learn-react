import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CommentForm extends PureComponent {

    render() {
        return (
            <form className="comment-form">
                <textarea></textarea>
                <button>submit</button>
            </form>
        )
    }
}