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

// POSTS comments into database
router.post("/api/comments", function(req, res) {
  console.log("Comment here!", req.user);
  db.Recommendations.create({
    email : req.body.email,
    user: req.body.user,
    title: req.body.title,
    author: req.body.author,
    cover_art_url: req.body.cover_art_url,
    status: req.body.status,
    rating: req.body.rating,
    comment: req.body.comment
  }).then(function(result){
    console.log(res.json(result))
    
  })
  
});




// Read all our routes and set up logic within those routes where required.
router.get("/api/recommendations", function(req, res) {
    
});


// Export routes for server.js to use.
module.exports = router;