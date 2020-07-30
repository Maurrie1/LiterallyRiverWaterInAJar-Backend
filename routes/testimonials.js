var express = require("express");
var router = express.Router();
var models = require("../models");

// render createTestimonial.js react screen
router.get("/about", function (req, res, next) {
  models.posts.findAll().then((posts) => {
    res.json({posts});
  });
});

// create new testimonial
router.post("/about", function (req, res, next) {
  console.log(req.body);
  console.log("post being created");
  models.posts
    .findOrCreate({
      where: {
        PostBody: req.body.newPost.postBody
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.json({ message: 'you did it!'});
      } else {
        res.json({ message:'You did it wrong. Get it together.'});
      }
    })
});

// render editTestimonial.
// router.get("", function (req, res, next) {});

// //  edit testimonial as user
// router.put("", function (req, res, next) {});

// //  delete testimonial as user
// router.post("", function (req, res, next) {});

// //  delete testimonial as admin
// router.post("", function (req, res, next) {});

module.exports = router;
