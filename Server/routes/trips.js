const { Trip, validateTrip } = require('../models/trip');
const express = require('express');
const router = express.Router();
    
    //i need a route that will show all parks that have been visited
    //this route should show the parks that i have visitied
router.get('/', async (req, res) => {
        // console.log("you made it");
        const parks = await Trip.find();
        return res.send(parks);
});
    //i need another route that will allow me to update the 'parks visited' list from the front end
    //i also need to update the 'parks visited' list 
    //if the park has been visited, notify the user
    //else do nothing and proceed
    //state property needs to be in the nps.gov api documentation
router.post('/new', async (req, res) => {
    try{
        const {error} = validateTrip(req.body);
        if(error)
        return res.status(400).send(error);
        
        newTrip = new Trip ({
            parkName: req.body.parkName,
            stateName: req.body.stateName,
            parkId: req.body.parkId
        });

        await newTrip.save();   
        return res.send(newTrip);
    } catch(error){
        console.log(error);
    };
});

module.exports = router;
