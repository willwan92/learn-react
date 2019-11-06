import React, { Component } from 'react';

import './clock.css';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		console.log('clock constoucted');
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		console.log('clock didMount');
		this.TimerId = setInterval(() => this.tick(), 1000)
	}

	componentDidUpdate() {
		console.log('clock didUpdate');
	}

	componentWillUnmount() {
		clearInterval(this.TimerId);
		console.log('clock clockWillUnmount');
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return (
			<div className="clock-box">
				<p>It is {this.state.date.toLocaleTimeString()}.</p>
			</div>
		)
	}
}