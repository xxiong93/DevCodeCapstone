const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');


const tripSchema = new mongoose.Schema({
    parkName: { type: String, required: true, maxlength: 100 },
    stateName: { type: String, required: false, }
});

const Trip = mongoose.model('Trip', tripSchema);

function validateTrip(trip) {
    const schema = Joi.object({
        parkName: Joi.string().required().max(100),
        stateName: Joi.string().required()
    });
    return schema.validate(trip);
}

//do i need to validate the state and park name?
//yes i need to validate these in order to keep track of which park has been visited


exports.Trip = Trip;
exports.tripSchema = tripSchema;
exports.validateTrip = validateTrip;