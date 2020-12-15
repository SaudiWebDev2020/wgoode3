const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/postBucketDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Successfully connected to postBucketDB") )
  .catch(err => console.error("Something went wrong!\n", err));