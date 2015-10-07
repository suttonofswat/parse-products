var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	          products: []
	    };
	},
	componentWillMount: function() {
	      var query = new Parse.Query(ProductModel);
	      query
	      .equalTo('type', 'Books')
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
				<div>
					<div>{product.get('name')}</div>
					<div>{product.get('description')}</div>
					<div>{product.get('type')}</div>
					<div>${product.get('price')}</div>
				</div>
			);
		});

			return (
				<div>
					<h1>Books</h1>
					{productElements}
				</div>
			);
		
		
	}
	
})