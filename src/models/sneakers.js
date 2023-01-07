const mongoose = require('mongoose');

const SneakerSchema = new mongoose.Schema({}, { strict: false });

const Sneaker = mongoose.model('Sneaker', SneakerSchema);

module.exports = Sneaker;
