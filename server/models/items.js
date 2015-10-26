var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	name: String,
	brand: String,
	category: String,
	price: String,
	url: String,
	id: String,
	date: { type: Date, default: Date.now },
	imglink: String,
	rating: { type: Number, min: 0 }
});

Item = mongoose.model('Item', ItemSchema);