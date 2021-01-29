const mongoose = require('mongoose');
const joi = require('joi');
const config = require('config');


const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, minlength: 5, maxlength: 255 },
    email: {type: String, unique: true, required: false},
    password: {type: String, required: false}
});

const User = mongoose.model('user',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(user);
}


exports.User = User;
exports.userSchema = userSchema;
exports.validateUser = validateUser;
