var mongoose = require('mongoose');
var Promise = require('bluebird');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: String,
	email: String,
	comments: String,
	is_read:Boolean

},{ timestamps: { createdAt: 'created_at' } });
var Contact = mongoose.model('contact', contactSchema);
Promise.promisifyAll(Contact);
Promise.promisifyAll(Contact.prototype);
module.exports = Contact;
//var Questions = mongoose.model('Questions', Questions);
