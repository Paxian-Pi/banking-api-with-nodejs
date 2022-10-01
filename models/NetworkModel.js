const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NetworkSchema = new Schema({
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
        default: Date.now()
    }
})

const NetworkModel = mongoose.model('networks', NetworkSchema)

module.exports = NetworkModel