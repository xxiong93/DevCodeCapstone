const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

//i need a schema that will take the state and park name

const tripSchema = new mongoose.Schema({
    parkName: { type: String, required: true, minlength: 5 , maxlength: 100 },
    state: { type: String, required: false, }
});

const Trip = mongoose.model('Trip', tripSchema);

function validateTrip(trip) {
    const schema = Joi.object({
        parkName: Joi.string().required().min(5).max(100),
        state: Joi.string().required()
    });
    return schema.validate(trip);
}

//do i need to validate the state and park name?
//yes i need to validate these in order to keep track of which park has been visited


exports.Trip = Trip;
exports.tripSchema = tripSchema;
exports.validateTrip = validateTrip;