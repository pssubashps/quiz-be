var express = require('express');
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

router.post('/', function(req, res, next) {
	console.log(req.body)
	var query = QuestionsModel.create(req.body,function(err,data){
		if(err) {
			console.log(err);
		}else{
				return res.json(data);
		}
	});
	
	
});

module.exports = router;