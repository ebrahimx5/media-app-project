const express = require("express");
const router = express.Router();
const Film = require("../models/Film");

router.get("/create", (req, res) => {
  try {
    const genres = [
      "Action","Comedy","Drama","Fantasy","Horror",
      "Mystery","Romance","Science Fiction","Thriller",
      "Western","Musical","Animation",
    ];

    const ageRating = ["G", "PG", "13+", "15+", "18+"];
    res.render("create-film.ejs", { genres: genres, ageRating: ageRating });
  } catch (error) {
    console.log("Error in GET /create:", error);
  }
});

router.post("/create", async (req, res) => {
  try {
    req.body.userCard = req.session.user._id;
    const createdFilm = await Film.create(req.body);
    console.log(createdFilm);
    res.redirect("/film/create");
  } catch (error) {
    console.log("Error in POST /create:", error);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const genres = [
      "Action","Comedy","Drama","Fantasy","Horror",
      "Mystery","Romance","Science Fiction","Thriller",
      "Western","Musical","Animation",
    ];

    const ageRating = ["G", "PG", "13+", "15+", "18+"];
    const foundFilm = await Film.findById(req.params.id);

    res.render("edit-film.ejs", {
      foundFilm: foundFilm,
      ageRating: ageRating,
      genres: genres,
    });
  } catch (error) {
    console.log("Error in GET /edit/:id:", error);
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    const editFilm = await Film.findByIdAndUpdate(req.params.id, req.body);
    console.log(editFilm);
    res.redirect("/");
  } catch (error) {
    console.log("Error in POST /edit/:id:", error);
  }
});

router.post("/delete/:id", async (req, res) => {
  try {
    const deletedFilm = await Film.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log("Error in POST /delete/:id:", error);
  }
});



module.exports = router;