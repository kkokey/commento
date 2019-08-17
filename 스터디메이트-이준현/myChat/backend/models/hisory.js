const mongoose = require("mongoose");
const schema = mongoose.Schema;

const historySchema = new schema({
  user_birth: { type: Date, default: Date.now },
  user_Update: String
});

module.exports = mongoose.model("Historys", historySchema);
