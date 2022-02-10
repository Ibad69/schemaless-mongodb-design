const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userRecordsSchema = new Schema({
  formId: { type: Schema.Types.ObjectId, ref: "User" },
  details: [Schema.Types.Mixed],
});

module.exports = mongoose.model("UserRecords", userRecordsSchema);
