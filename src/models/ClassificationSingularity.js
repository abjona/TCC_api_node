const moongose = require('mongoose');

const ClassificationSingularity = new moongose.Schema({
    deltaQtd: Number,
    coreQtd: Number,
    description: String,
    characters: [String]
});

module.exports = moongose.model('ClassificationSingularity', ClassificationSingularity);