import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TabSelector.css'


export default class TabSelector extends Component {
	static propsTypes = {
		value: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func
	}

	static defaultProps = {
		value: null,
		options: [],
		onChange: () => {}
	}

	render() {
		const { value, options, onChange } = this.props;
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
			</div>
		)
	}
}
