const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

//buffer will take image that is uploaded and "convert" it to data that can be used
const pictureSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    image: { data: Buffer, contentType: String},
    // imageUrl: { data: String }

})

const Picture = mongoose.model('picture', pictureSchema);

// function validatePicture(picture){
//     const schema = Joi.object({
//         img: Joi.buffer().Joi.string(),
//         imageUrl: Joi.string()
//     })
//     return schema.validate(picture);
// }

console.log(module);

module.exports = Picture;
// exports.validatePicture = validatePicture;
//exports.pictureSchema = pictureSchema;