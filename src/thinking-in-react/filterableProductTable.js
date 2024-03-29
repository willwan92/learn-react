import React, { Component } from 'react';

// SearchBar
class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.handleInStockChange = this.handleInStockChange.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	handleInStockChange(e) {
		this.props.onInStockChange(e.target.checked);
	}

	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.filterText}
					onChange={this.handleFilterTextChange}
				/>
				<p>
					<label>
						<input 
							type="checkbox" 
							checked={this.props.inStockOnly}
							onChange={this.handleInStockChange}
						/>
						Only show products in stock
					</label>
				</p>
			</form>
		)
	}
}

// ProductCategoryRow
class ProductCategoryRow extends Component {
	render() {
		const category = this.props.category;

		return (
			<tr>
				<th colSpan="2">
					{category}
				</th>
			</tr>
		)
	}
}

// ProductRow
class ProductRow extends Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ? 
			product.name :
			<span style={{color: 'red'}}>
				{product.name}
			</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		)
	}
}

// ProductTable
class ProductTable extends Component {
	render() { 
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		const rows = [];
		let lastCategory = null;

		this.props.products.forEach(product => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}

			if (inStockOnly && !product.stocked) {
				return;
			}

			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category} />
				)
			}

			rows.push(
				<ProductRow 
					product={product}
					key={product.name} />
			);

			lastCategory = product.category;
		});

		return ( 
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

// FilterableProductTable
class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this.handleInStockChange = this.handleInStockChange.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	handleFilterTextChange(filterText) {
		this.setState({
			filterText: filterText
		})
	}

	handleInStockChange(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly
		})
	}

	render() { 
		return ( 
			<div>
				<SearchBar 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onInStockChange={this.handleInStockChange}
					onFilterTextChange={this.handleFilterTextChange}
				/>
				<ProductTable 
					products={this.props.products} 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		 );
	}
}
 
export default FilterableProductTable;