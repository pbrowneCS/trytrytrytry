var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
	content: String,
	description: String,
	user: String,
	likes: {
		type: Number,
		default: 0,
  	},
	_question: [{type: mongoose.Schema.Types.Mixed, ref: 'Question'}],
	_user: [{type: mongoose.Schema.Types.Mixed, ref: 'User'}]
})

mongoose.model('Answer', AnswerSchema);