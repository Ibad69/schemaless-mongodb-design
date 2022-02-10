const category = require("../models/category");
const user = require("../models/user");
const userRecords = require("../models/userRecords");

exports.addCategory = async (req, res) => {
  let catg = new category(req.body);
  await catg.save();
  return res.json({ success: true, message: catg });
};

exports.addForm = async (req, res) => {
  //   let user = new user(req.body);
  let body = req.body;
  let savedForm = {};
  let categoryId = body.category;
  let fields = body.fields;
  savedForm = {
    category: categoryId,
    fields: fields,
  };
  let newUser = new user(savedForm);
  await newUser.save();
  return res.json({ success: true, message: user });
};

exports.addUserRecord = async (req, res) => {
  let body = req.body;
  let enteredForm = {};
  let formId = body.formId;
  let details = body.details;
  enteredForm = {
    formId: formId,
    details: details,
  };
  let newDetail = new userRecords(enteredForm);
  await newDetail.save();
  return res.json({ success: true, message: enteredForm });
};

exports.getUserCvs = async (req, res) => {
  let records = await userRecords.find();
  return res.json({ success: true, message: records });
};
