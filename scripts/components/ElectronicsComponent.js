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
	      .equalTo('type', 'Electronics')
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
					<a href={'#product/details/'+product.id}>{product.get('name')}</a>
					<div>{product.get('description')}</div>
					<div>{product.get('type')}</div>
					<div>${product.get('price')}</div>
				</div>
			);
		});

			return (
				<div>
					<h1>Electronics</h1>
					{productElements}
				</div>
			);
		
		
	}
	
})