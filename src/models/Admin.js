const moongose = require('mongoose');

const Admin = new moongose.Schema({
    user: String,
    senha: String,
})

module.exports = moongose.model('Admin', Admin);