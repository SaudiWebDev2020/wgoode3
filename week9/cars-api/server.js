console.log("inside of server.js");

const express = require("express");
const port = 8000;
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));


// this is code that belongs in a models folder

const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    color: String,
    features: []
}, {timestamps: true});

mongoose.connect("mongodb://localhost/cars_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => console.log("Successfully connected to cars_db"))
  .catch( err => console.error("Something went wrong". err));

const Cars = mongoose.model("Cars", CarSchema);

// this is code that belongs on a controllers folder

app.get("/", (req, res) => {
  Cars.find()
    .then(cars => res.render("index", {cars}))
    .catch(err => res.json(err));
});

app.post("/create", (req, res) => {
  Cars.create(req.body)
    .then(car => res.redirect("/"))
    .catch(err => res.json(err));
});

app.get("/cars", (req, res) => {
  Cars.find()
    .then(cars => res.json({status: "ok", cars}))
    .catch(err => res.json(err));
});

app.post("/cars", (req, res) => {
  Cars.create(req.body)
    .then(car => res.json({status: "ok", car}))
    .catch(err => res.json(err));
})

app.listen(port, () => console.log(`Listening on port: ${port}`));