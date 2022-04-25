const mongoose = require('mongoose');

const sportEsquema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    playersPerTeam: {
        type: Number
    },
    triki: {
        type: mongoose.Types.ObjectId,
        ref: 'Triki',
        required: false
    }
});

const Sport = mongoose.model('Sport', sportEsquema);

module.exports = Sport;