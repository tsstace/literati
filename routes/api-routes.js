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
    db.Comment.findAll({})
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // Get route for returning comments of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // Get route for retrieving a single comment
  app.get("/api/comments/:id", function(req, res) {
    db.Comment.findOne({
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
    db.Comment.create({
      title: req.body.title,
      body: req.body.body,
    })
      .then(function(dbComment) {
        res.json(dbComment);
      });
  });

  // DELETE route for deleting comments
  app.delete("/api/comments/:id", function(req, res) {
    db.Comment.destroy({
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
    db.Comment.update(req.body,
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
