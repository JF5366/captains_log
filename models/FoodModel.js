const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodLogSchema = new Schema({
    title: {  type: String, required: true },
    ingredients: { type: String, required: true },
    isHealthy: { type: Boolean, default: true }
}, {timestamps: true})

const FoodLog = mongoose.model('food', foodLogSchema)

module.exports = FoodLog