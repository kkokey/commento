const express = require("express");
const router = express.Router();
const userSchema = require("../models/user.js");
const crypto = require("crypto");

/* GET home page. */
router.get("/", function(req, res, next) {});

router.post("/", function(req, res, next) {
  const user = req.body.user.user_id;
  const userpw = req.body.user.password;

  userSchema.findOne({ user_id: user }, function(err, data) {
    if (!data) {
      res.json({ success: "fail" });
      return;
    }
    crypto.pbkdf2(
      userpw,
      data.salt.toString("base64"),
      100000,
      64,
      "sha512",
      (err, key) => {
        if (key.toString("base64") === data.password) {
          res.status(200).json({
            success: "success",
            user_id: data.user_id,
            user_name: data.name
          });
        } else {
          res.json({ success: "fail" });
        }
      }
    );
  });
});

module.exports = router;
