const express = require('express');
const router = express.Router();
//const morgan = require('morgan');

const Triki = require('../models/triki')

// (req de request, res de respuesta)
router.get('/', /*morgan('tiny'),*/async (solicitud, respuesta, next)=>{
    try {
        const trikis = await Triki.find()
        respuesta.status(200).json(trikis);
    } catch (error) {
        respuesta.status(400);
        next(error);
    }
});

router.get('/:id', /*morgan('tiny'),*/async (solicitud, respuesta, next)=>{

    const id = solicitud.params.id;
    try {
        const triki = await Triki.findById(id)
        respuesta.status(200).json(triki);
    } catch (error) {
        respuesta.status(400);
        next(error);
    }
});



router.post('/', async (req, res, next)=>{
    
    const triki = new Triki(req.body);

    try {
        const savedTriki = await triki.save();
        res.status(201);
        res.json(savedTriki);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.put('/:id', async (req, res, next)=>{
    const id = req.params.id;
    console.log(req.body)
    try {
        const modifiedTriki = await Triki.findByIdAndUpdate(id, req.body, {new:true});
        
        res.status(200);
        res.json(modifiedTriki);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

router.delete('/', (req, res)=>{
    res.send("Eliminando un triki");
});

module.exports = router;