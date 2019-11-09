import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../tab-selector/TabSelector.css'

// 函数作为子组件
export default class AdvancedTabSelector extends Component {
	static propsTypes = {
		value: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func,
		children: PropTypes.func
	}

	static defaultProps = {
		value: null,
		options: [],
		onChange: () => {},
		children: () => {}
	}

	render() {
		const { value, options, onChange, children } = this.props;
		return (
			<div className="tab-selector">
				<ul>
					{
						options.map(opt => (
							<li 
								key={opt.value}
								className={`tab-item ${opt.value === value ? 'selected' : ''}`}
								onClick={() => onChange(opt.value)}
							>
								{opt.name}
							</li>
						))
					}
				</ul>

				<br />

				{children && children(value)}
			</div>
		)
	}
}
