const { json } = require('body-parser')
const express = require('express')
const router = express.Router()

const GatewayModel = require('../models/GatewayModel')

// @route   POST api/gateway/create
// @desc    Create network
// @access  public
router.post('/create', (req, res) => {

    GatewayModel.findOne({ groupName: req.body.groupName })
        .then((gateway) => {

            console.log(gateway)
            // res.json(gateway)

            if (gateway != null && gateway.location[0].city == req.body.city) {
                return res.status(404).json({ 'error': `${req.body.city} gateway already exists!` })
            }
            
            if (gateway == null) {
                new GatewayModel({ groupName: req.body.groupName })
                    .save()
                    .then(() => {
                        // console.log(data)
                        GatewayModel.findOne({ groupName: req.body.groupName })
                            .then((gatewayData) => {
                                const loc = { city: req.body.city }
                                
                                gatewayData.location.unshift(loc)
                                gatewayData.save().then(location => res.json(location))
                            })
                    })
                    .catch(err => res.status(404).json(err))
            }
            else {
                GatewayModel.findOne({ groupName: req.body.groupName })
                    .then((gatewayData) => {
                        const loc = { city: req.body.city }

                        gatewayData.location.unshift(loc)
                        gatewayData.save().then(location => res.json(location))
                    })
            }

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