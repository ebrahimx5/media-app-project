const express = require("express");
const router = express.Router();
const Film = require('../models/Film')



router.get('/create', (req, res) => {


    const genres = [
        'Action',

        'Comedy',

        'Drama',

        'Fantasy',

        'Horror',

        'Mystery',

        'Romance',

        'Science Fiction',

        'Thriller',

        'Western',

        'Musical',

        'Animation',]

    const ageRating = ['G', 'PG', '13+', '15+', '18+']


    res.render('create-film.ejs', { genres: genres, ageRating: ageRating })
})

router.post('/create', async (req, res) => {
    req.body.userCard = req.session.user._id
    createdFilm = await Film.create(req.body)
    console.log(createdFilm)
    res.redirect('/film/create')
})

router.get('/edit/:id', async (req, res) => {

    const genres = [
        'Action',

        'Comedy',

        'Drama',

        'Fantasy',

        'Horror',

        'Mystery',

        'Romance',

        'Science Fiction',

        'Thriller',

        'Western',

        'Musical',

        'Animation',]

    const ageRating = ['G', 'PG', '13+', '15+', '18+']

    const foundFilm = await Film.findById(req.params.id)
    res.render('edit-film.ejs', { foundFilm: foundFilm, ageRating : ageRating, genres : genres })
})



router.post('/edit/:id', async (req,res)=>{

    const editFilm = await Film.findByIdAndUpdate(req.params.id, req.body);
    console.log(editFilm)
    res.redirect('/')

})


router.post('/delete/:id', async (req,res)=>{

    const deletedFilm = await Film.findByIdAndDelete(req.params.id)
    res.redirect('/')

})























module.exports = router;
