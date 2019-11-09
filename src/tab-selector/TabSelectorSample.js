import React, { Component } from 'react'
import TabSelector from './TabSelector'

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export default class TabSelectorSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	handleChange = (val) => {
		this.setState({
			value: val
		})
	}

	render() {
		return (
			<TabSelector 
				options={options}
				value={this.state.value}
				onChange={this.handleChange}
			/>
		)
	}
}