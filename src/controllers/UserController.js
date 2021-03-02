const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const store = async (req, res) => {
    let { nome, email, senha } = req.body;
    console.log(nome, email, senha);
    
    senha = md5(senha);
    let user = await User.create({
        nome,
        email,
        senha
    });

    if (user) {
        return res.send(user);
    }
    else {
        return res.send({ message: 'Erro ao cadastrar!', error: true });
    }

}

const login = async (req, res) => {
    let { email, senha } = req.body;
    senha = md5(senha);
    let user = await User.findOne({ email, senha })

    if (user) {
        await jwt.sign(
            { user },
            'finger',
            (err, token) => {
                return res.send({
                    token,
                    user
                });
            });
    }

    else return res.send({ message: 'Usuário não encontrado', error: true })
}

const loginAdmin = async (req, res) => {
    let { user, senha } = req.body;
    senha = md5(senha);
    let userAdmin = await Admin.findOne({ user, senha })

    if (userAdmin) {
        await jwt.sign(
            { userAdmin },
            'finger',
            (err, token) => {
                return res.send({
                    token,
                    userAdmin
                });
            });
    }

    else return res.send({ message: 'Usuário não encontrado', error: true })
}

module.exports = {
    login,
    loginAdmin,
    store
}