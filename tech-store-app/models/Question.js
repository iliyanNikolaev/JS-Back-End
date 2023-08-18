const { Schema, model, Types } = require('mongoose');

const questionSchema = new Schema({
    buyer: { type: Types.ObjectId, ref: 'User'},
    seller: { type: Types.ObjectId, ref: 'User'},
    computer: { type: Types.ObjectId, ref: 'Computer' },
    laptop: { type: Types.ObjectId, ref: 'Laptop' },
    approved: Boolean,
    adress: String,
    phone: String
});

const Question = model('Question', questionSchema);

module.exports = Question;