// landingpage-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads landing-page.html as homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing-page.html"));
  });

  // index route loads landing-page.html as homepage
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-page.html"));
  });


};