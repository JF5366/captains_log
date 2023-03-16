const FoodLog = require('../models/FoodModel')


module.exports.index = async(req, res) => {
    try {
        const foodLog = await FoodLog.find()
        res.render('food/Index', { foodlogs: foodLog }) 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const foodLog = await FoodLog.findById(req.params.id)
        res.render('food/Show', { foodlogs: foodLog })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('food/New')
}

module.exports.create = async(req, res) => {
    if (req.body.isHealthy) {
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }
    try {
        await FoodLog.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error')
    }
    res.redirect('/food')
}

module.exports.delete = async (req, res) => {
    console.log('DELETE /food/:id')
    try{
    await FoodLog.findByIdAndDelete(req.params.id)
    res.redirect('/food')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    try {
        const logData = await FoodLog.findById(req.params.id)
        res.render('food/Edit', { foodlogs: logData })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {

    if (req.body.isHealthy) {
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }
try{
    await FoodLog.findByIdAndUpdate(req.params.id, req.body) /
    res.redirect(`/food/${req.params.id}`) 

}catch(err){
    console.log(err)
    res.send(err.message)
}
}







