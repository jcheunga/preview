var mongoose = require('mongoose');
var Image = mongoose.model('Image');
var _ = require('lodash');

exports.all = function(req, res) {
	Image.find({}).exec(function(err, images) {
		if(!err) {
			res.json(images);
		} else {
			console.log('Error in query');
		}
	});
};

exports.add = function(req, res) {
	var colid = req.body.collectionid;
  Image.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(colid);
  });
};

exports.remove = function(req, res) {
	var query = {id: req.body.id };
	Image.findOneAndRemove(query, function(err, data) {
		if(err) console.log('Error on delete');
		res.status(200).send('Removed successfully');
	});
};

exports.update = function(req, res) {
	var query = { collectionid: req.body.collectionid };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Image.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Image.findOneAndUpdate(query, { $inc: { likes: isIncrement ? 1: -1 } }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }

};