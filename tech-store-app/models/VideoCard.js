const { Schema, model, Types } = require('mongoose');

const videoCardSchema = new Schema({
    title: String,
    laptops: { type: [Types.ObjectId], default: [], ref: 'Laptop' },
    computers: { type: [Types.ObjectId], default: [], ref: 'Computer' }
});

const VideoCard = model('VideoCard', videoCardSchema);

module.exports = VideoCard;