const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routers/index");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/main", mainRoutes);

// app.get("/", (req, res) => {
//   res.send("abcd");
// });

mongoose
  .connect(
    "mongodb+srv://admin:tport123@cluster0.5kzat.mongodb.net/inHouseDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("connected" + result);
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));
