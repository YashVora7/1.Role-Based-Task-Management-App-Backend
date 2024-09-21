const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    date: { type: Date, default: Date.now }
});

const taskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    completed: { type: Boolean, default: false },
    comments: [commentSchema]
},{timestamps : true});

const taskModel = mongoose.model('task', taskSchema);
module.exports = taskModel;
