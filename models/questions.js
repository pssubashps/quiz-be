var mongoose = require('mongoose');
var Promise = require('bluebird');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
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
var Questions = mongoose.model('questions', questionsSchema);
Promise.promisifyAll(Questions);
Promise.promisifyAll(Questions.prototype);
module.exports = Questions;
//var Questions = mongoose.model('Questions', Questions);
