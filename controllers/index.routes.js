const router = require("express").Router();
const Film = require('../models/Film');
const Series = require("../models/Series");

router.get('/', async (req,res) => {
  try {
    let allFilm;
    let allSeries;

    if(req.session.user) {        
      allFilm = await Film.find({ userCard: req.session.user._id }).populate('userCard');
      allSeries = await Series.find({ userCard: req.session.user._id }).populate('userCard');
    } else {
      allFilm = await Film.find().populate('userCard');
      allSeries = await Series.find().populate('userCard');
    }

    res.render('homepage.ejs', { allFilm: allFilm, allSeries: allSeries });
  } catch (error) {
    console.log("Error in GET /:", error);
  }
});

module.exports = router;
