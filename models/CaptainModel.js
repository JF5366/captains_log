const mongoose = require('mongoose')

const Schema = mongoose.Schema

const captainsSchema = new Schema({
    title: {  type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true }
}, {timestamps: true})

const CaptainsLog = mongoose.model('logs', captainsSchema)

module.exports = CaptainsLog