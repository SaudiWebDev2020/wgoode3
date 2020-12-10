console.log("inside of server.js");

// this imports the Express library
const express = require("express");
const port = 8000;
// this makes an instance of the express webapp
const app = express();

// configures the app to accept form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// localhost:8000/
app.get("/", (req, res) => {
    console.log(req.url);
    res.send("<h1>Hello World</h1>");
});

// example hardcoded data
const recipes = [
    {name: "flan", ingredients: ["eggs", "sweetend condensed milk", "evaporated milk", "sugar"]},
    {name: "toast", ingredients: ["bread", "olive oil", "avocado", "tomota"]}
];
// localhost:8000/recipes
app.get("/recipes", (req, res) => {
    console.log(req.url);
    res.json(recipes);
});

// also localhost:8000/recipes (just this time it's post)
app.post("/recipes", (req, res) => {
    console.log(req.url, req.body);
    recipes.push(req.body);
    res.json({message: "ok"});
})

app.listen(port, () => console.log(`Listening on port: ${port}`));