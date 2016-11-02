var express = require('express');
var wrap = require('co-express');
var router = express.Router();
var QuestionsModel = require('../models/questions');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var query = QuestionsModel.find();
	query.exec(function(err, questions) {
		if (err) {
			console.log(err);
			return;
		} else {
			return res.json(questions);
		}

	})

});

router.get('/set', wrap(function*(req, res, next) {
	var questionSetCount = 10;
	var questionStartCount = 0;
	var questionSet = [];
	console.log("request came");
	try {
		console.log("Count Request");


		var query = QuestionsModel.count();
		yield query.execAsync().then(function(result){
			console.log(result);
			questionStartCount = result - questionSetCount;
		});

		questionStartCount =  Math.floor(Math.random() * (questionStartCount));
		console.log("Question will start from " + questionStartCount);

		var query = QuestionsModel.find().limit(questionSetCount).skip(questionStartCount);
		yield query.execAsync().then(function(result){
			questionSet = result;
			
		});

	} catch (e) {
		console.log("Error" + e);
	}
	console.log("Request comepleted");
	return res.json(questionSet);

}));

router.post('/', function(req, res, next) {
	console.log(req.body)
	var query = QuestionsModel.create(req.body, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			return res.json(data);
		}
	});


});

module.exports = router;