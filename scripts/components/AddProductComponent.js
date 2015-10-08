var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="name" className="validate" />
								<label>Product Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="textarea1" ref="description" className="materialize-textarea"></textarea>
								<label>Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="number" id="price" ref="price" className="validate" />
								<label>Price</label>
							</div>
							<div className="input-field col s6">
								<select className="browser-default" id="type" ref="type">
									<option value="" disabled selected>Category</option>
									<option value="Books">Books</option>
									<option value="Electronics">Electronics</option>
									<option value="Clothing">Clothing</option>
								</select>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();
		var newProduct = new ProductModel({
			name: this.refs.name.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			price: parseInt(this.refs.price.getDOMNode().value),
			type: this.refs.type.getDOMNode().value
		});
		newProduct.save(),
		this.props.router.navigate('allProducts', {trigger: true});
		
	}
});