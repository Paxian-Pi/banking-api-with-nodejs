const mongoose = require('mongoose')
const Schema = mongoose.Schema


const NetworkDataSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const NetworkDataModel = mongoose.model('networks', NetworkDataSchema)

module.exports = NetworkDataModel