const moongose = require('mongoose');

const RatingSchema = new moongose.Schema({
    date: Date,
    left_hand: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'LeftHand'
    },
    right_hand: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'RightHand'
    },
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    minutiae : Object,
    status: String
});

module.exports = moongose.model('Rating', RatingSchema);