import React, { Component } from 'react';

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
			<p>It is {this.state.date.toLocaleTimeString()}.</p>
		)
	}
}