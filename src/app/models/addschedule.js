const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Addschedule = new Schema(
    {
        date: { type: Date },
        time: { type: Date },
    });
module.exports = mongoose.model('Addschedule', Addschedule);