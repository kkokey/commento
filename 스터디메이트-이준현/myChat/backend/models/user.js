const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  email: String,
  user_id: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  salt: { type: String, required: true },
  del_yn: { type: String, default: "n" },
  user_his: { type: schema.Types.ObjectId, ref: "Historys", required: true }
});

module.exports = mongoose.model("Users", userSchema);
