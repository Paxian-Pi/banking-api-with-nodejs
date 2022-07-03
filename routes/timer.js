const express = require('express')
const router = express.Router()
const passport = require('passport')

const TimerModel = require('../models/TimerModel')

// @route   GET api/timer/countdown
// @desc    Get server countdown timer
// @access  public

/**
 * @swagger
 * components:
 *  schemas:
 *      TimerModel:
 *          type: object
 *          properties:
 *              startTimer:
 *                  type: string
 *                  description: Start timer
 *          required:
 *              - startTimer
 *          example:
 *              startTimer: start
 */

/**
 * @swagger
 * /api/timer/countdown:
 *  post:
 *      summary: Get server countdown timer
 *      tags: [TimerModel]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/TimerModel'
 *      responses:
 *          200:
 *              description: Server countdown timer
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/TimerModel'
 */
router.post('/countdown', (req, res) => {
    
    const timer = new TimerModel({
        startTimer: req.body.startTimer,
        minutes: 05,
        seconds: 45
    })

    timer
        .save()
        .then((isTimer) => {
            console.log(isTimer)

            const countDownTime = {
                minutes: isTimer.minutes,
                seconds: isTimer.seconds
            }
            
            res.json(countDownTime)
            
            // if (isTimer.startTimer == 'start') {
            //     TimerModel.findOneAndUpdate(
            //         {
            //             $set: { startTimer: 'stop' },
            //             new: true
            //         }
            //     ).then((done) => res.json(done))
            // }
        })
        .catch(() => res.status(404).json('Could not get timer!'))
})

module.exports = router