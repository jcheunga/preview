var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var imgdata = require('../change/imgdata');

exports.all = function(req, res) {
	Item.find({}).exec(function(err, items) {
		if(!err) {
			res.json(items);
		} else {
			console.log('Error in query');
		}
	});
};

exports.add = function(req, res) {
	imgdata.addimgdata(req, res);
};

exports.remove = function(req, res) {
	var query = {id: req.body.id };
	Item.findOneAndRemove(query, function(err, data) {
		if(err) console.log('Error on delete');
		res.status(200).send('Removed successfully');
	});
};