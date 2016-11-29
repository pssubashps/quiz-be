var mongoose = require('mongoose');
var Promise = require('bluebird');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var newsletterSchema = new Schema({
	email: { type: String, unique: true }

},{ timestamps: { createdAt: 'created_at' } });
var Newsletter = mongoose.model('contact', newsletterSchema);
Promise.promisifyAll(Newsletter);
Promise.promisifyAll(Newsletter.prototype);
module.exports = Newsletter;
//var Questions = mongoose.model('Questions', Questions);
