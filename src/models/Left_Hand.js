const moongose = require('mongoose');

const LeftHandSchema = moongose.Schema({
    thumb: String,
    index: String,
    medium: String,
    ring: String,
    minimun: String
});

module.exports = moongose.model('LeftHand', LeftHandSchema);