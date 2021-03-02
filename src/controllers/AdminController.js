const Admin = require('../models/Admin');
const md5 = require('md5');
senha = md5('admin');

const AdminCreate = async () => {
    
    let user = await Admin.create({
        user: 'admin',
        senha: senha
    });

    if (user) {
        return 'ok';
    }
    else {
        return 'err';
    }
}

module.exports = AdminCreate;