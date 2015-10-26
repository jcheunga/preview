var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
	collectionid: String,
	collectioncost: String,
	imagecollection: Array,
	category: String,
	likes: { type: Number, min: 0 },
	date: { type: Date, default: Date.now },
	rating: { type: Number, min: 0 },
	__v: {type: Number, select: false}
});

Image = mongoose.model('Image', ImageSchema);