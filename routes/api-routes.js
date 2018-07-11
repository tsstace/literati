// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the comments
  app.get("/api/comments", function(req, res) {
<<<<<<< HEAD
    db.Recommendations.findAll({})
=======
    db.recommendations.findAll({})
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  //Get route for returning comments of a specific book
  app.get("/api/comments/book/:title", function(req, res) {
<<<<<<< HEAD
    db.Recommendations.findAll({
=======
    db.recommendations.findAll({
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      where: {
        title: req.params.title
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single comment
  app.get("/api/comments/:id", function(req, res) {
<<<<<<< HEAD
    db.Recommendations.findOne({
=======
    db.recommendations.findOne({
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      where: {
        id: req.params.id
      }
    })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // POST route for saving a new comment
  app.post("/api/comments", function(req, res) {
    console.log(req.body);
<<<<<<< HEAD
    db.Recommendations.create({
=======
    db.recommendations.create({
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      user: req.body.user,
      email: req.body.email,
      title: req.body.title,
      author: req.body.author,
      ISBN: req.body.ISBN,
      cover_art_url: req.body.cover_art_url,
      rating: req.body.rating,
      comment: req.body.comment,
    })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // DELETE route for deleting comments
  app.delete("/api/comments/:id", function(req, res) {
<<<<<<< HEAD
    db.Recommendations.destroy({
=======
    db.recommendations.destroy({
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      where: {
        id: req.params.id
      }
    })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // PUT route for updating comments
  app.put("/api/comments", function(req, res) {
    console.log(req.body);
<<<<<<< HEAD
    db.Recommendations.update(req.body,
=======
    db.recommendations.update(req.body,
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });
};
