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
				<div className="fullRow z-depth-3">
					<h5>{product.get('name')}</h5>
					<div>{product.get('createdAt').toDateString()}</div>
					<div>{product.get('description')}</div>
					<div>{product.get('type')}</div>
					<div>${product.get('price')}</div>
					<a href={'#product/details/'+product.id}>Details</a>
					
				</div>
			);
		});

			return (
				<div className="fullPg">
					<h1>Books</h1>
					{productElements}
				</div>
			);
		
		
	}
	
})