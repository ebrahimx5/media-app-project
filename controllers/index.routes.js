const router = require("express").Router()
const Film = require('../models/Film')


router.get('/', async (req,res)=>{
    allFilm = await Film.find()
    res.render('homepage.ejs', {allFilm: allFilm})
})
module.exports = router;
