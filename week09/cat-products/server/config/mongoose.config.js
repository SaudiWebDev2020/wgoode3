const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/catproductsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Successfully connected to \"catproductsDB\""))
  .catch(err => console.error("Something went wrong!\n", err));
