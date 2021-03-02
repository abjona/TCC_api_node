const moongose = require('mongoose');

const RightHandSchema = moongose.Schema({
    thumb: String,
    index: String,
    medium: String,
    ring: String,
    minimun: String
});

module.exports = moongose.model('RightHand', RightHandSchema);