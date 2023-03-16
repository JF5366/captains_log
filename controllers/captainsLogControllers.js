const CaptainsLog = require('../models/CaptainModel')


module.exports.index = async(req, res) => {
    try {
        const captainslog = await CaptainsLog.find()
        res.render('Index', { logs: captainslog }) 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const captainslog = await CaptainsLog.findById(req.params.id)
        res.render('Show', { logs: captainslog })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('New')
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







