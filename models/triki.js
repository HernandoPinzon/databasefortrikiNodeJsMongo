const mongoose = require('mongoose');

const trikiEsquema2 = new mongoose.Schema({
    campos: [Number]
});

const trikiEsquema = new mongoose.Schema({
    pos1: { type: Number, required: true },
    pos2: { type: Number, required: true },
    pos3: { type: Number, required: true },
    pos4: { type: Number, required: true },
    pos5: { type: Number, required: true },
    pos6: { type: Number, required: true },
    pos7: { type: Number, required: true },
    pos8: { type: Number, required: true },
    pos9: { type: Number, required: true }
});

const Triki = mongoose.model('Triki', trikiEsquema);


module.exports = Triki;