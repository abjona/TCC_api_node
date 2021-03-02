const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = moongose.model('User', UserSchema);