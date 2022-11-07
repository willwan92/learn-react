import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import withTimer from '../higher-order-components/withTImer'

export class CommentForm extends PureComponent {

    render() {
        return (
            <form className="comment-form">
                <textarea></textarea>
								<p>{this.props.time.toLocaleString()}</p>
                <button>submit</button>
            </form>
        )
    }
}

export default withTimer(CommentForm)