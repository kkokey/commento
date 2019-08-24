const express = require("express");
const userSchema = require("../models/user.js");
const userHistory = require("../models/hisory.js");
const router = express.Router();
const crypto = require("crypto");

router.get("/", function(req, res, next) {
  findAll(userSchema);
});

/* GET home page. */
router.post("/", function(req, res, next) {
  const user = new userSchema();
  const history = new userHistory();

  // 회원가입에 적었던 아이디를 db에서 검색
  userSchema.findOne({ user_id: req.body.user.user_id }, function(err, data) {
    // db에서 아이디 검색이 안됬을때는 가입 진행
    if (!data) {
      // 유저 가입 내역 추가.
      history.user_Update = "신규가입";

      // 유저 가입 내역 저장
      saveDB(history);

      // 유저 회원가입 정보 입력
      user.name = req.body.user.name;
      user.email = req.body.user.email;
      user.user_id = req.body.user.user_id;
      user.password = req.body.user.password;
      user.user_his = history._id;

      // 유저 비밀번호 암호화 후 저장
      makePasswd(user);

      res.json({ success: "success" });

      // 아이디가 검색되었을때
    } else if (data) {
      res.json({ success: "definded" });
      return;
    }
  });
});

// db저장 함수
function saveDB(mogodbSchema) {
  mogodbSchema.save(function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function findAll(mongodb) {
  mongodb
    .findOne({ name: "실험" })
    .populate("user_his")
    .exec((err, data) => {
      console.log(data);
    });
}

// 유저 비밀번호 암호화 함수
function makePasswd(mogodbSchema) {
  console.log("들어옴");
  crypto.randomBytes(64, function(err, buf) {
    crypto.pbkdf2(
      mogodbSchema.password,
      buf.toString("base64"),
      100000,
      64,
      "sha512",
      (err, key) => {
        mogodbSchema.password = key.toString("base64");
        mogodbSchema.salt = buf.toString("base64");

        // 유저 저장
        saveDB(mogodbSchema);
      }
    );
  });
}
module.exports = router;
