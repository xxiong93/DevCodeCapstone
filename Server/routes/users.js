const { User, validateUser } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    // console.log("I hit the new endpoint");

    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res.status(500).send(`Internal server Error: ${ex}`);
    }
});

router.post('/new', async (req,res) => {
    // console.log("I hit the new users endpoint");
    //ask myself some questions
    //what is this route for?
    //registering a new user
    //what are the steps for registering a new user
    //code here
    try {
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();
        return res.send(user);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }

    //what do I need to do?
    //see if anyone with this email being passed in already exists, if so, error message, telling them to log in
    //is there any information I'm trying to capture? from where? how is it stored?
    // try {
    //     let user = await User.findOne({ email:req.body.email });

    //     const{error} = validateUser(req.body);
    //     if(error){
    //         return res.status(500).send(error.details[0].message);
    //     }
    //         if(user) return res.status(400).send('User already registered.');

    //     user = new User ({
    //         userName = req.body.userName,
    //         email: req.body.email
    //         // password
        
    //     });  

    //     await user.save();
    // } catch (ex) {
    //     return res.status(500).send(`InternalServerError:${ex}`);
    // }

});

module.exports = router;