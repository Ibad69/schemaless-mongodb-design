const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  fields: [Schema.Types.Mixed],
});

module.exports = mongoose.model("User", userSchema);
