const express = require('express');
const router = express.Router();

const Sport = require('../models/sport')

router.get('/', deportesGET);
router.get('/:id', deportesGETbyId);
router.post('/', deportesPost);

async function deportesGET(req, res, next){
    try {
        const sports = await Sport.find().populate('triki')
        res.status(200).json(sports);
    } catch (error) {
        res.status(400);
        next(error);
    }
}

async function deportesGETbyId(req, res, next){
    const id = req.params.id;
    try {
        const sports = await Sport.findById(id).populate('triki')
        res.status(200).json(sports);
    } catch (error) {
        res.status(400);
        next(error);
    }
}

async function deportesPost(req, res, next){
    const sport = new Sport(req.body
        /*{
            name: req.body.name,
            playersPerTeam: req.body.playersPerTeam
        }*/
    );

    try {
        const savedSport = await sport.save();
        res.status(201).json(savedSport);
        //res.json(savedSport);
    } catch (error) {
        res.status(400);
        next(error);
    }
}


module.exports = router;