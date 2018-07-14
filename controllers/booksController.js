//+++++++++++++++++++++++++++++++++DEPENDENCIES++++++++++++++++++++++++++++++++++++++++++
var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");

//Stash API key here...
require("dotenv")

//Create a method for pushing user info into database
router.post("/api/users", function(req, res) {
    //console.log("Req.body here=====>", req.body);
    db.User.create({
      profile_pic : req.body.profile_pic, 
      user_name : req.body.user_name,
      email : req.body.email
    }).then(function(result){
      res.json(result)
    }).catch(function(result){
      res.json(result)
  })
});

//Create a method for grabbing books from a google API by title 
var request = require("request");

router.get("/book", function(req, res) {
  request('https://www.googleapis.com/books/v1/volumes?q=' + req.query.title + '&key=' + process.env.GOOGLE_APIKEY, function(err, gres, body) {
      res.json(JSON.parse(body));
  })
});


//Route to get all of the books from the recommendations table for the feed
router.post("/api/recommendations", function(req, res) {
  console.log("Body", req.body);
  db.Recommendations.create({
    user: req.body.user,
    email: req.body.email,
    title: req.body.title,
    author: req.body.author,
    ISBN: req.body.ISBN,
    cover_art_url: req.body.cover_art_url,
    rating: req.body.rating,
    comment: req.body.comment,
  })
    .then(function(dbRecommendations) {
      res.json(dbRecommendations);
    });
});

router.get("/api/recommendations", function(req, res) {
  db.Recommendations.findAll({})
    .then(function(dbRecs) {
      res.render("recommendations");
    });
});

// POSTS books into database
router.post("/api/books", function(req, res) {
  console.log("Look here!", req.user);
  db.Books.create({
    email : req.body.email,
    user: req.body.user,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    copyright_date: req.body.copyright_date,
    ISBN: req.body.ISBN,
    cover_art_url: req.body.cover_art_url,
    synopsis: req.body.synopsis,
    status: req.body.status,
  }).then(function(result){
    console.log(result)
  })
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log(req.recommendations);
  db.Recommendations.findAll({})
  .then((data)=> {
    var hbsObject = {
      recommendations: data
    };
    console.log("Look here, dude!", hbsObject);
    res.render("recommendations", hbsObject);
  });
});


// Export routes for server.js to use.
module.exports = router;