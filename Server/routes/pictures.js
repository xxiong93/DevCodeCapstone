const { Picture } = require("../models/picture");
const express = require('express');
const router = express.Router();
const multer = require('multer');
// const fs = require('fs');
// const path = require('path');



// const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try{
        console.log('hit');
  const images = await Picture.find()
        // if (error) {
        //     console.log(error);
        //     res.status(500).send('An error occurred', error);
        // }
        // else {
        //     res.render('imagesPage', { items: items });
        // }
        return res.send(images)
        
    }
    catch(error){
        return res.status(500).send(`Internal Server Error`)
    }
});

router.post('/upload',  async (req,res) => {
    try {
        // const {error} = validatePicture(req.body);
        // if(error)
        //     return res.status(400).send(error);
        console.log("hit")
        photo = new Picture({
            name: req.body.name,
            description: req.body.description,
            image: {
                // data: req.body.buffer,
                // contentType: 'image/png'
            }
        });

        await photo.save();

        return res.send(photo);
    } catch (error) {
        return res.status(500).send(`InternalServerError:${error}`);
    }

})
// console.log(Picture);

module.exports = router;