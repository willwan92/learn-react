import React, { Component } from 'react'
import AdvancedTabSelector from './AdvancedTabSelector'
import { blockStatement } from '@babel/types';

const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export default class ColorSelector extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: null
		}
	}

	handleChange = (val) => {
		this.setState({
			color: val
		})
	}


	render() {
		const color = this.state.color;
		return (
			<div>
				<h3>选择颜色：</h3>
				<AdvancedTabSelector
					options={options}
					value={color}
					onChange={this.handleChange}
				>
					{
						val => (
							<span 
								style={
									{
										display: "inline-block",
										backgroundColor: color,
										width: "40px",
										height: "40px"
									}
								}
							></span>
						)
					}
				</AdvancedTabSelector>
			</div>
		)
	}
}