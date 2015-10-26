var Xray = require('x-ray');
var x = Xray();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

exports.addimgdata = function(req, res) {

	var id = req.body.id;
	var url = req.body.url;	
	var category = req.body.category;

	x(url, { 
		imglink: '#main_product_image@src',
		price: '.ui-pl-pricing-high-price',
		name: 'title',
		brand: '.qa-brand-name'
	})(function(err, data) {

		var price = data.price.replace('-','').trim();
		var pricevalue = Number(price.replace(/[^0-9\.-]+/g,""));
		var name = data.name.replace('| Backcountry.com','').trim();

		var finaldata = {
			id: id,
			url: url,
			category: category,
			imglink: data.imglink,
			price: pricevalue,
			name: name,
			brand: data.brand
		}
		
		if (err) {
			console.log(err);
			res.status(400).send(err);			
		}
		res.status(200).send(finaldata);
		/*
		Item.create(finaldata, function (err) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		}
		res.status(200).send(finaldata);
		});*/

	});

};



