const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, minlength: 5, maxlength: 255 },
    email: {type: String, unique: true, required: false},
    password: {type: String, required: false}
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, name: this.userName}, config.get('jwtSecret'));
};

const User = mongoose.model('user',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(user);
}


module.exports = User;
module.exports = userSchema;
module.exports = validateUser;
