const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");

mongoose.connect("mongodb://localhost:27017/chatUsersDB");
mongoose.Promise = global.Promise;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const signin = require("./routes/sign_in");
const login = require("./routes/log_in");
const chat = require("./routes/chat");

var app = express();
app.use(cors({ origin: "http://localhost:8080", credentials: true }));

app.use(
  session({
    secret: "chat_user",
    resave: false,
    saveUninitialized: true
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/signin", signin);
app.use("/login", login);
//app.use("/socket.io", chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
/*
io.on("connection", socket => {
  console.log("유저 연결됨" + socket);
  socket.on("chat", data => {
    console.log("메세지보냄 : " + data);
    io.emit("newchat", data);
  });
});*/

module.exports = app;
