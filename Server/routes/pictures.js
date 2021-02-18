const { Picture } = require("../models/picture");
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null , './photos')
    },
    filename: (req, file, callback) => {
        console.log(file)
        callback(null, Date.now() + path.extname(file.originalname))
        
    }
})
const upload = multer({storage: storage});

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

router.post('/upload', upload.single('image'), (req, res) => {
        res.send("picture has been uploaded")

})


module.exports = router;