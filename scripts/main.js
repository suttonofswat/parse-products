'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');
var ProductDetailsComponent= require('./components/ProductDetails');
var AllProductsComponent = require('./components/AllProductsComponent');

var app = document.getElementById('app');

Parse.initialize(
	'8EDh10L79slP1XtV31DaU7LX0V535SmeCjCsPRfG',
	'ku0ubeXIrQADE6owuKfJdXrtKDr0dnJFLnj6mzDa'
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'allProducts' : 'allProducts',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'product/details/:id': 'productDetails',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	allProducts: function() {
		React.render(<AllProductsComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent router={r}/>, app);
	},
	books: function() {
		React.render(<BooksComponent />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent />, app);
	},
	productDetails: function(id) {
		React.render(
			<ProductDetailsComponent productId={id} />,
			app
		);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);