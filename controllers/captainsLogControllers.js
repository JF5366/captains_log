const CaptainsLog = require('../models/CaptainModel')


module.exports.index = async(req, res) => {
    try {
        const captainslog = await CaptainsLog.find()
        res.render('logs/Index', { logs: captainslog }) 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const captainslog = await CaptainsLog.findById(req.params.id)
        res.render('logs/Show', { logs: captainslog })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('logs/New')
}

module.exports.create = async(req, res) => {
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await CaptainsLog.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error')
    }
    res.redirect('/logs')
}

module.exports.delete = async (req, res) => {
    console.log('DELETE /logs/:id')
    try{
    await CaptainsLog.findByIdAndDelete(req.params.id)
    res.redirect('/logs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    try {
        const logData = await CaptainsLog.findById(req.params.id)
        res.render('logs/Edit', { logs: logData })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
try{
    await CaptainsLog.findByIdAndUpdate(req.params.id, req.body) /
    res.redirect(`/logs/${req.params.id}`) 

}catch(err){
    console.log(err)
    res.send(err.message)
}
}







