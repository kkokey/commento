const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/user.js");
const userHistory = require("../models/hisory.js");
const router = express.Router();
const crypto = require("crypto");
mongoose.connect("mongodb://localhost:27017/chatUsersDB");

router.get("/", function(req, res, next) {
  findAll(userSchema);
});

/* GET home page. */
router.post("/", function(req, res, next) {
  const user = new userSchema();
  const history = new userHistory();
  history.user_Update = "신규가입";

  history.save(function(err) {});

  console.log(req.body.user.user_id);
  console.log(req.body.user.name);
  console.log(req.body.user.email);
  console.log(req.body.user.password);

  user.name = req.body.user.name;
  user.email = req.body.user.email;
  user.user_id = req.body.user.user_id;
  user.password = req.body.user.password;
  user.user_his = history._id;

  user.save(function(err) {
    if (err) {
      res.json({ success: "fail" });
      return;
    }
    res.json({ success: "success" });
  });
});

function findAll(mongodb) {
  mongodb
    .findOne({name:'실험'}).function(err, data) {
      console.log(data)
    }

}
module.exports = router;
