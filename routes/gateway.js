const { json } = require('body-parser')
const express = require('express')
const router = express.Router()

const GatewayModel = require('../models/GatewayModel')

// @route   POST api/gateway/create
// @desc    Create network
// @access  public
router.post('/create', (req, res) => {

    GatewayModel.findOne({ location: req.body.location })
        .then((gateway) => {
            
            // console.log(network)

            if (gateway != null && gateway.location == req.body.location) {
                return res.status(404).json({ 'error': `${req.body.location} gateway already exists!` })
            }
            
            new GatewayModel({ groupName: req.body.groupName, location: req.body.location })
                .save()
                .then(gatewayDetails => res.json(gatewayDetails))
                .catch(err => res.status(404).json(err))
        })
})

// @route   GET api/gateway/get-all
// @desc    Network route
// @access  public
router.get('/get-all', (req, res) => {
    GatewayModel
        .find()
        .then(data => res.json(data))
})

module.exports = router