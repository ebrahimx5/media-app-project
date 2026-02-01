const router = require("express").Router();
const Film = require('../models/Film');
const Series = require("../models/Series");

router.get('/', async (req,res) => {
  try {
    let allFilm;
    let allSeries;
    let filmCount = 0;
    let seriesCount = 0;
    let totalCards = 0;
    let username = null;

    if(req.session.user) {        
      allFilm = await Film.find({ userCard: req.session.user._id }).populate('userCard');
      allSeries = await Series.find({ userCard: req.session.user._id }).populate('userCard');
      filmCount = allFilm.length;
      seriesCount = allSeries.length;
      totalCards = filmCount + seriesCount;
      username = req.session.user.username;
    } else {        
      allFilm = await Film.find().populate('userCard');
      allSeries = await Series.find().populate('userCard');
    }

    res.render('homepage.ejs', { allFilm : allFilm,  allSeries: allSeries,username: username, filmCount: filmCount,seriesCount: seriesCount, totalCards: totalCards});
  } catch (error) {
    console.log("Error in GET /:", error);
  }
});

router.get('/about', (req,res) =>{
  res.render('about.ejs');
});

router.get('/services', (req,res) =>{
  res.render('services.ejs');
});

router.get('/contact', (req,res) =>{
  res.render('contact.ejs');
});

router.get('/community', async (_, res) => {
  try {
    const allFilm = await Film.find().populate('userCard');
    const allSeries = await Series.find().populate('userCard');
    res.render('community.ejs', { allFilm, allSeries });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading community page");
  }
});




module.exports = router;

