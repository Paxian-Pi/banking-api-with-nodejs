const mongoose = require('mongoose')
const Schema = mongoose.Schema


const FileUploadSchema = new Schema({
    file: {
        type: String
    },
    filePath: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const FileUploadModel = mongoose.model('uploads', FileUploadSchema)

module.exports = FileUploadModel