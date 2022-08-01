const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const FileUploadModel = require('../models/FileUploadModel')

var fileName;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads/');
    },
    filename: function (req, file, cb) {
        // fileName = Date.now() + path.extname(file.originalname)
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.get('/upload', (req, res) => res.send('File upload API'))

router.put("/uploadfile", upload.single("file"), uploadFile);

function uploadFile(req, res) {
    const host = req.hostname;
    const filePath = req.protocol + "://" + host + '/' + req.file.path;
    
    const fileUpload = new FileUploadModel({
        file: req.file.filename,
        filePath: filePath
    })

    fileUpload
        .save()
        .then(file => {
            console.log(file);
            res.json({ message: "Successfully uploaded file", data: req.file });
        })

}


// router.put('/uploadfile', upload.single('file'), (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType: req.file.mimetype,
//         image: new Buffer.from(encode_img, 'base64')
//     };
//     FileUploadModel.create(final_img, function(err, result) {
//         if(err) {
//             console.log(err);
//         }else{
//             // console.log(result.img.Buffer.from());
//             console.log("Saved To database");
//             // console.log(final_img.contentType);
//             // console.log(final_img.image);
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })


module.exports = router