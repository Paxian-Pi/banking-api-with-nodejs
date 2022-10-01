const { json } = require('body-parser')
const express = require('express')
const router = express.Router()

const NetworkModel = require('../models/NetworkModel')

// @route   POST api/network/
// @desc    Create network
// @access  public
router.post('/create', (req, res) => {

    new NetworkModel({ label: req.body.label, isChecked: req.body.isChecked })
        .save()
        .then(id => res.json(id))
        .catch(err => res.status(404).json(err))
})

// @route   POST api/network/network-data
// @desc    Modify Network
// @access  public
router.post('/modify', (req, res) => {
    
    NetworkModel.findOneAndUpdate(
        { label: req.body.label },
        { $set: { isChecked: req.body.isChecked } },
        { new: true }
    ).then(data => res.json(data))
})

// @route   GET api/network/all
// @desc    Network route
// @access  public
router.get('/get-all', (req, res) => {
    NetworkModel
        .find()
        .then(data => res.json(data))
})

module.exports = router