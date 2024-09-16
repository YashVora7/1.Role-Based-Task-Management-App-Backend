const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const taskModel = mongoose.model('task', taskSchema);
module.exports = taskModel;
