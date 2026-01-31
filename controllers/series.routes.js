const express = require('express');
const router = require('express').Router();
const Series = require('../models/Series');

router.get('/create', (req, res) => {
  try {
    const genres = [
      "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
      "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports",
      "Shounen", "Shoujo", "Seinen", "Isekai", "Mecha", "Psychological",
      "Supernatural", "Thriller", "Music", "School Life", "Historical",
      "Martial Arts"
    ];

    const ageRating = ['G', 'PG', '13+', '15+', '18+'];

    res.render('create-series.ejs', { genres: genres, ageRating: ageRating });
  } catch (error) {
    console.log("Error in GET /create:", error);
  }
});

router.post('/create', async (req, res) => {
  try {
    req.body.userCard = req.session.user._id;
    const createdSeries = await Series.create(req.body);
    res.redirect('/series/create');
  } catch (error) {
    console.log("Error in POST /create:", error);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const genres = [
      "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
      "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports",
      "Shounen", "Shoujo", "Seinen", "Isekai", "Mecha", "Psychological",
      "Supernatural", "Thriller", "Music", "School Life", "Historical",
      "Martial Arts"
    ];

    const ageRating = ['G', 'PG', '13+', '15+', '18+'];

    const foundSeries = await Series.findById(req.params.id);
    res.render('edit-series.ejs', { ageRating: ageRating, genres: genres, foundSeries: foundSeries });
  } catch (error) {
    console.log("Error in GET /edit/:id:", error);
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    const editSeries = await Series.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (error) {
    console.log("Error in POST /edit/:id:", error);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const deletedSeries = await Series.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.log("Error in POST /delete/:id:", error);
  }
});

module.exports = router;