console.log("inside of mongoose.config.js");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cars_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => console.log("Successfully connected to cars_db"))
  .catch( err => console.error("Something went wrong". err));