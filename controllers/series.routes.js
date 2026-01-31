const express = require('express')
const router = require('express').Router()
const Series = require('../models/Series')


router.get('/create', (req, res) => {

    const genres = [
        "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
        "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports",
        "Shounen", "Shoujo", "Seinen", "Isekai", "Mecha", "Psychological",
        "Supernatural", "Thriller", "Music", "School Life", "Historical",
        "Martial Arts"
    ];

    const ageRating = ['G', 'PG', '13+', '15+', '18+']

    res.render('create-series.ejs', { genres: genres, ageRating: ageRating })


})

router.post('/create', async (req, res) => {
    req.body.userCard = req.session.user._id
    createdSeries = await Series.create(req.body)
    res.redirect('/series/create')
})



router.get('/edit/:id', async (req, res) => {

    const genres = [
        "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
        "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports",
        "Shounen", "Shoujo", "Seinen", "Isekai", "Mecha", "Psychological",
        "Supernatural", "Thriller", "Music", "School Life", "Historical",
        "Martial Arts"
    ];

    const ageRating = ['G', 'PG', '13+', '15+', '18+']

    const foundSeries = await Series.findById(req.params.id)
    res.render('edit-series.ejs', {ageRating : ageRating, genres : genres, foundSeries : foundSeries})


})

router.post('/edit/:id', async (req,res)=>{

    const editSeries = await Series.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')

})


router.post('/delete/:id', async (req,res)=>{

    const deletedSeries = await Series.findByIdAndDelete(req.params.id)
    res.redirect('/')

})

module.exports = router