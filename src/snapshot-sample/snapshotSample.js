import React, { Component } from 'react';

import './snapshotSample.css';

export default class SnapshowSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			if (this.state.messages.length > 100) {
				clearInterval(this.timerId);
			}
			this.handleNewMessage()
		}, 1000);
	}

	componentDidUpdate(
		prevProps,
		prevState,
		prevScrollHeight
	) {
		// scrollTop: 容器内的内容顶部到容器顶部的高度
		// scrollHeight：容器内的内容的高度
		const scrollTop = this.rootNode.scrollTop;
		if (scrollTop < 5) return;
		this.rootNode.scrollTop = scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
	}

	handleNewMessage() {
		this.setState(prev => ({
				messages: [`msg ${prev.messages.length}`, ...prev.messages]
			})
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	getSnapshotBeforeUpdate() {
		return this.rootNode.scrollHeight;
	}

	// ref的使用？
	render() {
		return (
			<div className="snapshot-sample">
				<div 
					className="message-box"
					ref={n => this.rootNode = n}
				>
					{this.state.messages.map(item => <div>{item}</div>)}
				</div>
			</div>
		)
	}
}