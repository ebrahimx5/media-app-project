const router = require("express").Router()
const Film = require('../models/Film')
const Series = require("../models/Series")


router.get('/', async (req,res)=>{
    let allFilm
    if(req.session.user) {allFilm = await Film.find({userCard: req.session.user._id}).populate('userCard')}
    else{allFilm = await Film.find().populate('userCard')}
    const allSeries = await Series.find().populate('userCard')
    res.render('homepage.ejs', {allFilm: allFilm, allSeries : allSeries})
})


module.exports = router;


