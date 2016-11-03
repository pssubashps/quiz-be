var express = require('express');
var wrap = require('co-express');
var router = express.Router();
var ContactModel = require('../models/contact');


router.post('/', function(req, res, next) {

	var query = ContactModel.create(req.body, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			return res.json(data);
		}
	});


});

module.exports = router;