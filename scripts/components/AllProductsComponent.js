var React = require('react');
var ProductModel = require('../models/ProductModel');
var query = new Parse.Query(ProductModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			  products: []
		};
	},
	componentWillMount: function() {
		  query
		  .find().then(
				(products) => {
					console.log(products);
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);
	},
	render: function() {
		var productElements = this.state.products
		.map(function(product) {
			return(
				<tr>
            		<td>{product.get('type')}</td>
           			<td>{product.get('name')}</td>
           			<td>${product.get('price')}</td>
           			<td><a href={'#product/details/'+product.id}>Details</a></td>
          		</tr>	
			);
		});

			return (
				<div className="fullPg">
					<h1>All Products</h1>
					<div>
						<button className="buttons waves-effect waves-light btn" onClick={this.sortLow}>Lowest</button>
						<button className="buttons waves-effect waves-light btn" onClick={this.sortHigh}>Highest</button>
						<button className="buttons waves-effect waves-light btn" onClick={this.sortNew}>Newest</button>
						<button className="buttons waves-effect waves-light btn" onClick={this.sortOld}>Oldest</button>
					</div>
					<table className="highlight">
						<thead>
							<tr>
								<th>Category</th>
								<th>Name</th>
								<th>Price</th>
								<th>More Information</th>
							</tr>
						</thead>
						<tbody>
							{productElements}
						</tbody>
					</table>
				</div>
			);
		
		
	},
	sortLow: function() {
			query
			.ascending("price")
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);

	},
	sortHigh: function() {
			query
			.descending("price")
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);

	},
	sortNew: function() {
			query
			.descending("createdAt")
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);

	},
		sortOld: function() {
			query
			.ascending("createdAt")
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);

	}
	
});





