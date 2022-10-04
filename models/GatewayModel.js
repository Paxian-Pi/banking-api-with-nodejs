const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GatewaySchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const GatewayModel = mongoose.model('gateways', GatewaySchema)

module.exports = GatewayModel