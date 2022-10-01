const { json } = require('body-parser')
const express = require('express')
const router = express.Router()

const NetworkDataModel = require('../models/NetworkDataModel')

// @route   POST api/network/network-data
// @desc    Network route
// @access  public
router.post('/network-data', (req, res) => {

    const networkdata = new NetworkDataModel({
        label: req.body.label,
        isChecked: req.body.isChecked
    })
    
    networkdata
        .save()
        .then(networkData => res.json(networkData))
        .catch(error => res.status(404).json(error))
})

// @route   GET api/network/all
// @desc    Network route
// @access  public
router.get('/all', (req, res) => {
    NetworkDataModel
        .find()
        .then(data => res.json(data))
})

module.exports = router