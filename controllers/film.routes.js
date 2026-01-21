const express = require("express");
const router = express.Router();
const Film = require('../models/Film')



router.get('/create' , (req,res)=>{
    

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


    res.render('create-film.ejs',{genres : genres, ageRating: ageRating})
})

router.post('/create', async(req, res)=>{
    createdFilm = await Film.create(req.body)
    console.log(createdFilm)
    res.redirect('/film/create')
})


module.exports = router;
