const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    label: {type: String, required: true},
    iconUrl: { type: String }
})

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;