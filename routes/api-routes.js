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

  // GET route for getting all of the recommendations
  app.get("/api/recommendations", function(req, res) {
    db.Recommendations.findAll({})
      .then(function(dbRecs) {
        res.json(dbRecs);
      });
  });

  //Get route for returning comments of a specific book
  app.get("/api/comments/book/:title", function(req, res) {
    db.Recommendations.findAll({
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
    db.Recommendations.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // POST route for saving a new recommendation
  app.post("/api/recommendation", function(req, res) {
    console.log(req.body);
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

  // DELETE route for deleting comments
  app.delete("/api/comments/:id", function(req, res) {
    db.Recommendations.destroy({
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
    db.Recommendations.update(req.body,
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
