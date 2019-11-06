import React, { Component } from 'react'

import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';

const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bood", content: "Hello Rekit!" },
];

export default class CommentBox extends Component {

	render() {
		return (
			<div className="comment-box">
				<h1>Comments(3)</h1>
				<CommentList comments={comments} />
				<CommentForm />
			</div>
		)
	}
}