import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'


export default class CommentList extends PureComponent {
	static propTypes = {
		comments: PropTypes.array.isRequired
	};
	render() {
		return (
			<div className="comment-list">
				{this.props.comments.map((comment, index) => <CommentItem comment={comment} key={index} />)}
			</div>
		)
    }
}

