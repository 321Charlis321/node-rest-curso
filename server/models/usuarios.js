const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} No es un rol Valido'
};
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "En necesario el nombre de usuario"]

    },
    email: {
        type: String,
        required: [true, "Es necesario el email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Es necesario el password"]
    },
    img: {
        type: String,
        required: false

    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false

    }



});

usuarioSchema.methods.toJSON = function() { // Va imprimir el resultado

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
};


usuarioSchema.plugin(uniqueValidator, { message: '{PATH} , ya esta siendo usado por otro Usuario' });


module.exports = mongoose.model('usuario', usuarioSchema); // esto se va a llamar usuario y va tomar los datos de usaurioSchema