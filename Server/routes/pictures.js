const { Picture } = require("../models/picture");
const express = require('express');
const router = express.Router();
const multer = require('multer');
// const fs = require('fs');
// const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    Picture.find({}, (error, items) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred', error);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

router.post('/', upload.single(), async (req,res) => {
    try {
        // const {error} = validatePicture(req.body);
        // if(error)
        //     return res.status(400).send(error);

        photo = new Picture({
            name: req.body.name,
            description: req.body.description,
            image: {
                data: req.body.buffer.toString(),
                contentType: 'image/png'
            }
        });

        await photo.save();

        return res.send(photo);
    } catch (error) {
        return res.status(500).send(`InternalServerError:${error}`);
    }

})


module.exports = router;