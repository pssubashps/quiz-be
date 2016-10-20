var mongoose = require('mongoose');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionsSchema = new Schema({
	title: String,
	answer1: String,
	answer2: String,
	answer3: String,
	answer4: String,
	answer5: String,
	category_name : String,
	correct_answer : String,
	comments:String
});
module.exports = mongoose.model('questions', questionsSchema);
//var Questions = mongoose.model('Questions', Questions);
