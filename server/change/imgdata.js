var Xray = require('x-ray');
var x = Xray();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

exports.addimgdata = function(req, res) {

	var id = req.body.id;
	var url = req.body.url;	
	var category = req.body.category;
	
	function parseURL(url){
    parsed_url = {};

    if ( url == null || url.length == 0 )
        return parsed_url;

    protocol_i = url.indexOf('://');
    parsed_url.protocol = url.substr(0,protocol_i);

    remaining_url = url.substr(protocol_i + 3, url.length);
    domain_i = remaining_url.indexOf('/');
    domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
    parsed_url.domain = remaining_url.substr(0, domain_i);
    parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

    domain_parts = parsed_url.domain.split('.');
    switch ( domain_parts.length ){
        case 2:
          parsed_url.subdomain = null;
          parsed_url.host = domain_parts[0];
          parsed_url.tld = domain_parts[1];
          break;
        case 3:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2];
          break;
        case 4:
          parsed_url.subdomain = domain_parts[0];
          parsed_url.host = domain_parts[1];
          parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
          break;
    }

    parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;

    return parsed_url;
	}

	var urlhost = parseURL(url).host.toLowerCase();
	
	if (urlhost === 'backcountry'){
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

	} else {
		x(url, { 
			imglink: '#landingImage@src',
			price: '#priceblock_ourprice',
			name: '#productTitle',
			brand: '#brand'
		})(function(err, data) {

			var pricevalue = Number(data.price.replace(/[^0-9\.-]+/g,""));

			var finaldata = {
				id: id,
				url: url,
				category: category,
				imglink: data.imglink,
				price: pricevalue,
				name: data.name,
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
	}
};



